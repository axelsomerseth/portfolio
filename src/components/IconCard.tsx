import React from "react";

interface IconCardProps {
  className?: string;
  children: React.ReactElement;
}
const IconCard: React.FC<IconCardProps> = ({ className, children }) => {
  return <div className={className + " IconCard"}>{children}</div>;
};

export default IconCard;
