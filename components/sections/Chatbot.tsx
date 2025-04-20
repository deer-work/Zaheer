"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  Send,
  Minimize2,
  X,
  ThumbsUp,
  ThumbsDown,
  Phone,
  User, 
  Bot,
  Clock,
  MessageCircle,
} from "lucide-react";

// Define message type
interface ChatMessage {
  text: string;
  sender: "user" | "bot";
  loading?: boolean;
  error?: boolean;
  rateLimited?: boolean;
  resetTimeSeconds?: number;
  rateLimitReason?: string;
}

export default function ProfessionalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("chat");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      text: "Welcome to Zaheer Portfolio support. How may I assist you today?",
      sender: "bot",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) {
      setIsDisliked(false); // Remove dislike if like is clicked
    }
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) {
      setIsLiked(false); // Remove like if dislike is clicked
    }
  };

  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitCountdown, setRateLimitCountdown] = useState<number | null>(null);
  const [rateLimitReason, setRateLimitReason] = useState<string | null>(null);

  // Update the test rate limit function to support silent mode, wrapped in useCallback
  const handleTestRateLimit = useCallback(async (silent = false) => {
    try {
      // Only update UI if not in silent mode
      if (!silent) {
        setRateLimitReason('Checking rate limit status...');
      }
      
      // Make a lightweight request to check rate limit status
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: "test_rate_limit" }),
      });
      
      // If request succeeds, rate limit is gone
      if (response.ok) {
        setRateLimitCountdown(null);
        setRateLimitReason(null);
      } else {
        // If we get a 429, extract the new wait time
        if (response.status === 429) {
          try {
            const errorData = await response.json();
            const secondsMatch = errorData.error.match(/try again in (\d+) seconds/i);
            const resetSeconds = secondsMatch ? parseInt(secondsMatch[1]) : 60;
            
            // Only update with new time if it's significantly different or not in silent mode
            if (!silent || Math.abs(resetSeconds - (rateLimitCountdown || 0)) > 3) {
              setRateLimitCountdown(resetSeconds);
              if (!silent) {
                setRateLimitReason('Rate limit still active');
              }
            }
          } catch {
            // If parsing fails, only update message if not in silent mode
            if (!silent) {
              setRateLimitReason('Rate limit still active');
            }
          }
        }
      }
    } catch (error) {
      console.error("Error checking rate limit:", error);
      // Only update on error if not in silent mode
      if (!silent) {
        setRateLimitReason('Connection error. Try again.');
      }
    }
  }, [rateLimitCountdown]);

  // Update useEffect for rate limit countdown to include automatic server checks
  useEffect(() => {
    if (rateLimitCountdown && rateLimitCountdown > 0) {
      // For very low countdown values, check more frequently
      const interval = setInterval(() => {
        setRateLimitCountdown(prev => {
          if (prev === null || prev <= 1) {
            // Reset the rate limit state when countdown reaches zero
            return null;
          }
          return prev - 1;
        });

        // When countdown gets low, automatically check server status
        if (rateLimitCountdown <= 6 && rateLimitCountdown > 0) {
          // Schedule a server check near the end of the countdown
          handleTestRateLimit(true); // true for silent mode
        }
      }, 1000);
      
      return () => clearInterval(interval);
    } else if (rateLimitCountdown === 0) {
      // Ensure we reset to null if we somehow end up at exactly zero
      setRateLimitCountdown(null);
      setRateLimitReason(null);
    }
  }, [rateLimitCountdown, handleTestRateLimit]);

  // Add back the reset rate limit function
  const resetRateLimit = () => {
    // Only allow reset if the countdown is very low (likely expired on server)
    // or if we're in a potentially erroneous state
    if (rateLimitCountdown && rateLimitCountdown <= 5) {
      setRateLimitCountdown(null);
      setRateLimitReason(null);
    } else {
      // If the rate limit is still high, test with a new request instead of just clearing
      handleTestRateLimit(false); // explicit non-silent mode
    }
  };

  const handleSend = async () => {
    if (inputText.trim()) {
      const userQuery = inputText.trim();
      setMessages((prev) => [...prev, { text: userQuery, sender: "user" }]);
      setInputText("");
      setIsLoading(true);
      
      // Add immediate bot response with loading indicator
      setMessages((prev) => [...prev, { text: "", sender: "bot", loading: true }]);
      
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: userQuery }),
        });
        
        if (!response.ok) {
          // Check if response contains error JSON
          try {
            const errorData = await response.json();
            
            // Check if it's a rate limit error
            if (response.status === 429 && errorData.error) {
              // Extract seconds from error message if available
              const secondsMatch = errorData.error.match(/try again in (\d+) seconds/i);
              const resetSeconds = secondsMatch ? parseInt(secondsMatch[1]) : 120; // Default to 2 minutes
              
              // Extract reason if available
              const reason = response.headers.get('X-Rate-Limit-Reason') || 
                            errorData.error.split('.')[0] || 
                            'Rate limit exceeded';
              
              setRateLimitCountdown(resetSeconds);
              setRateLimitReason(reason);
              
              throw new Error(`${reason}. Please wait ${resetSeconds} seconds before trying again.`);
            }
            
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
          } catch {
            // If not JSON or other parsing error
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        
        if (!response.body) {
          throw new Error("Response body is null");
        }
        
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullText = "";
        
        // Update the loading message to show real content
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].loading = false;
          return newMessages;
        });
        
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          fullText += chunk;
          setMessages((prev) => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullText;
            return newMessages;
          });
        }
      } catch (error) {
        console.error("Error:", error);
        
        // Get error message
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
        const isRateLimited = errorMessage.includes("try again") || errorMessage.includes("Rate limit");
        
        setMessages((prev) => {
          // Replace the loading message with error
          const newMessages = [...prev];
          if (newMessages.length > 0 && newMessages[newMessages.length - 1].loading) {
            newMessages[newMessages.length - 1] = {
              text: errorMessage,
              sender: "bot",
              error: true,
              rateLimited: isRateLimited,
              rateLimitReason: rateLimitReason || undefined,
            };
          } else {
            newMessages.push({
              text: errorMessage,
              sender: "bot",
              error: true,
              rateLimited: isRateLimited,
              rateLimitReason: rateLimitReason || undefined,
            });
          }
          return newMessages;
        });
      } finally {
        setIsLoading(false);
      }
    }
  };
  const renderChatSection = () => (
    <>
      <div className="h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto p-4 space-y-4 flex-grow chatbot-scroll">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`flex items-start space-x-2 max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg ${
                message.sender === "user"
                  ? "bg-[#30193D]/50 text-[#F5F5F5]"
                  : message.error 
                    ? "bg-[#3D1919] text-[#F5F5F5]" 
                    : "bg-[#222222] text-[#E6E6FA]"
              }`}
            >
              {message.sender === "bot" && <Bot size={20} className={`mt-1 ${message.loading ? "animate-pulse" : ""} text-[#00FFFF]`} />}
              {message.sender === "user" && <User size={20} className="mt-1 text-[#00FFFF]" />}
              <p className="break-words">{message.loading ? "Thinking..." : message.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[#222222] text-[#E6E6FA] p-3 rounded-lg">
              <Bot size={20} className="animate-pulse text-[#00FFFF]" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-4 border-t border-[#444444]">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={rateLimitCountdown ? `Rate limited. Try again in ${rateLimitCountdown}s...` : "Type your message..."}
            className="flex-grow p-3 border border-[#444444] rounded-lg bg-black text-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#00FFFF] placeholder:text-[#D8BFD8]/50"
            onKeyDown={(e) => e.key === "Enter" && !rateLimitCountdown && handleSend()}
            disabled={isLoading || rateLimitCountdown !== null}
          />
          <button
            onClick={handleSend}
            className={`bg-gradient-to-r from-[#00CED1] to-[#00FFFF] text-black p-3 rounded-lg ${
              isLoading || rateLimitCountdown !== null 
                ? "opacity-50 cursor-not-allowed" 
                : "hover:from-[#00FFFF] hover:to-[#00CED1] transition-colors"
            }`}
            disabled={isLoading || rateLimitCountdown !== null}
          >
            <Send size={20} />
          </button>
        </div>
        {rateLimitCountdown !== null && (
          <div className="mt-2 text-xs text-[#D8BFD8]/70 text-center">
            <div className="font-semibold text-[#FF5F5F] mb-1">
              {rateLimitReason || 'Rate limit exceeded'}
            </div>
            <div className="text-[#D8BFD8]">
              Please wait {rateLimitCountdown} seconds before sending another message.
            </div>
            {rateLimitReason?.includes('Hourly') && (
              <div className="mt-1 text-[#D8BFD8]/50 text-xs">
                You&apos;ve reached your hourly message limit. Consider reviewing previous responses or trying again later.
              </div>
            )}
            {rateLimitCountdown <= 5 && (
              <button 
                onClick={() => resetRateLimit()}
                className="mt-2 text-[#00FFFF] hover:underline text-xs"
              >
                Try reset now
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );

  const renderFAQSection = () => (
    <div className="h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto p-4 space-y-4 flex-grow chatbot-scroll">
      <h3 className="font-bold text-lg mb-2 text-[#F5F5F5]">Frequently Asked Questions</h3>
      <div className="space-y-4">
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444]">
          <h4 className="font-semibold mb-2 text-[#00FFFF]">
            How do you optimize AI models for real-time applications?
          </h4>
          <p className="text-sm text-[#D8BFD8]">
            I use techniques such as model quantization, pruning, and
            distillation to reduce inference time and memory usage. For
            real-time AI applications, I utilize GPU/TPU acceleration and deploy
            models in cloud environments with serverless infrastructure to
            handle dynamic workloads efficiently.
          </p>
        </div>
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444]">
          <h4 className="font-semibold mb-2 text-[#00FFFF]">
            What is your approach to microservices architecture for large-scale
            applications?
          </h4>
          <p className="text-sm text-[#D8BFD8]">
            I design scalable, event-driven microservices using Kafka for
            asynchronous communication and FastAPI for RESTful services. I also
            utilize Dapr for service-to-service communication and employ
            Protobuf for efficient message serialization.,
          </p>
        </div>
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444]">
          <h4 className="font-semibold mb-2 text-[#00FFFF]">
            How do you handle complex AI and ML integrations in web
            applications?
          </h4>
          <p className="text-sm text-[#D8BFD8]">
            I leverage frameworks like FastAPI, TensorFlow, and PyTorch for
            seamless AI/ML integration into web applications. I ensure optimized
            model performance through fine-tuning and employ tools like
            LangChain to enhance LLM-based applications with RAG
            (Retrieval-Augmented Generation).
          </p>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto p-4 space-y-4 flex-grow chatbot-scroll">
      <h3 className="font-bold text-lg mb-2 text-[#F5F5F5]">Contact Information</h3>
      <div className="space-y-4">
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444] flex items-center space-x-4">
          <Phone size={24} className="text-[#00FFFF]" />
          <div>
            <h4 className="font-semibold text-[#F5F5F5]">Whatsapp Support</h4>
            <p className="text-sm text-[#D8BFD8]">+92 347 5177267</p>
            <p className="text-xs text-[#D8BFD8]/70">
              Monday - Friday, 9am - 4pm EST
            </p>
          </div>
        </div>
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444] flex items-center space-x-4">
          <MessageCircle size={24} className="text-[#00FFFF]" />
          <div>
            <h4 className="font-semibold text-[#F5F5F5]">Email Support</h4>
            <p className="text-sm text-[#D8BFD8]">dev.zaheer.ahmad@gmail.com</p>
            <p className="text-xs text-[#D8BFD8]/70">
              24/7 support, response within 24 hours
            </p>
          </div>
        </div>
        <div className="bg-[#222222] p-4 rounded-lg border border-[#444444] flex items-center space-x-4">
          <Clock size={24} className="text-[#00FFFF]" />
          <div>
            <h4 className="font-semibold text-[#F5F5F5]">Business Hours</h4>
            <p className="text-sm text-[#D8BFD8]">
              Monday - Friday: 9am - 5pm EST
            </p>
            <p className="text-sm text-[#D8BFD8]">Saturday: 11am - 3pm EST</p>
            <p className="text-sm text-[#D8BFD8]">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-[#00CED1] to-[#00FFFF] text-black p-4 rounded-full shadow-lg hover:shadow-[#00FFFF]/20 hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="bg-black border border-[#444444] rounded-xl shadow-2xl w-[95vw] md:w-[500px] lg:w-[550px] overflow-hidden max-h-[85vh] flex flex-col">
          <div className="bg-gradient-to-r from-[#30193D] to-black p-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-[#F5F5F5]">Portfolio Assistant</h2>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#222222] rounded-full transition-colors"
              >
                <Minimize2 size={18} className="text-[#00FFFF]" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#222222] rounded-full transition-colors"
              >
                <X size={18} className="text-[#00FFFF]" />
              </button>
            </div>
          </div>

          <div className="bg-black border-b border-[#444444]">
            <div className="flex items-center">
              <button
                onClick={() => setActiveSection("chat")}
                className={`p-3 transition-colors flex-1 text-center ${
                  activeSection === "chat"
                    ? "border-b-2 border-[#00FFFF] text-[#00FFFF]"
                    : "text-[#D8BFD8] hover:text-[#F5F5F5]"
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveSection("faq")}
                className={`p-3 transition-colors flex-1 text-center ${
                  activeSection === "faq"
                    ? "border-b-2 border-[#00FFFF] text-[#00FFFF]"
                    : "text-[#D8BFD8] hover:text-[#F5F5F5]"
                }`}
              >
                FAQ
              </button>
              <button
                onClick={() => setActiveSection("contact")}
                className={`p-3 transition-colors flex-1 text-center ${
                  activeSection === "contact"
                    ? "border-b-2 border-[#00FFFF] text-[#00FFFF]"
                    : "text-[#D8BFD8] hover:text-[#F5F5F5]"
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {activeSection === "chat" && renderChatSection()}
          {activeSection === "faq" && renderFAQSection()}
          {activeSection === "contact" && renderContactSection()}

          <div className="p-3 bg-[#222222]/50 border-t border-[#444444] flex justify-between items-center text-xs text-[#D8BFD8]">
            <div className="flex items-center">
              <span>Rate your experience:</span>
              <button
                onClick={handleLike}
                className={`ml-2 p-1 rounded-full ${
                  isLiked ? "text-[#00FFFF] bg-[#30193D]/50" : "text-[#D8BFD8] hover:text-[#F5F5F5]"
                }`}
              >
                <ThumbsUp size={14} />
              </button>
              <button
                onClick={handleDislike}
                className={`ml-1 p-1 rounded-full ${
                  isDisliked ? "text-[#00FFFF] bg-[#30193D]/50" : "text-[#D8BFD8] hover:text-[#F5F5F5]"
                }`}
              >
                <ThumbsDown size={14} />
              </button>
            </div>
            <div className="cursor-pointer hover:text-[#F5F5F5]">
              <a
                href="https://www.linkedin.com/in/zaheerahmedabbasi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8BFD8] hover:text-[#00FFFF]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
