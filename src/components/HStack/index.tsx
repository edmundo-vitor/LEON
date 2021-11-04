import { FC, HTMLAttributes, ReactNode } from "react";

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  spacing?: string;
}

export function HStack({
  spacing = "2",
  children,
  style,
  ...rest
}: StackProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: `${spacing}rem`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
