import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: (e?: any) => void;
  variant?: string; //default = blue, primary = green
  size?: string; //sm, md, lg
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`btn ${size} ${variant}` + (disabled ? ` disabled` : ``)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
