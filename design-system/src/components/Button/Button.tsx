// src/components/Button/Button.tsx
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${className || ""}`}
      {...props}
    >
      hellobutton{children}
    </button>
  );
};
