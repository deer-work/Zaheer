interface SkillBarProps {
  skill: string;
  percentage: number;
  color: "cyan" | "purple" | "gradient";
}

const SkillBar = ({ skill, percentage, color }: SkillBarProps) => {
  const getGradientClass = () => {
    switch (color) {
      case "cyan":
        return "bg-gradient-to-r from-[#00FFFF] to-[#00CED1]";
      case "purple":
        return "bg-gradient-to-r from-[#30193D] to-[#D8BFD8]";
      case "gradient":
        return "bg-gradient-to-r from-[#00FFFF] to-[#30193D]";
      default:
        return "bg-gradient-to-r from-[#00FFFF] to-[#00CED1]";
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="font-medium text-[#F5F5F5]">{skill}</span>
        <span className="text-[#D8BFD8]">{percentage}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-[#222222] overflow-hidden">
        <div
          className={`h-full rounded-full ${getGradientClass()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar; 