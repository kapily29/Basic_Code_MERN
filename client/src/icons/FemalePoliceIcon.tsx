interface FemalePoliceIconProps {
  className?: string;
  size?: number;
}

const FemalePoliceIcon = ({ className = "", size = 120 }: FemalePoliceIconProps) => {
  return (
    <img
      src="/icons/PoliceFemale.jpg"
      alt="Female Police Officer"
      width={size}
      height={size}
      className={`rounded-full object-cover border-4 border-blue-600 shadow-lg ${className}`}
    />
  );
};

export default FemalePoliceIcon;
