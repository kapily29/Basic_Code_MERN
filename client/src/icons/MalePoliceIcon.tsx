interface MalePoliceIconProps {
  className?: string;
  size?: number;
}

const MalePoliceIcon = ({ className = "", size = 120 }: MalePoliceIconProps) => {
  return (
    <img
      src="/icons/Policemale.jpg"
      alt="Male Police Officer"
      width={size}
      height={size}
      className={`rounded-full object-cover border-4 border-blue-600 shadow-lg ${className}`}
    />
  );
};

export default MalePoliceIcon;
