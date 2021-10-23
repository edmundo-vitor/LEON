import { FC, ReactNode } from "react";

interface StackProps {
  spacing?: string;
  children: ReactNode;
}

export function Stack({ spacing = "2", children }: StackProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: `${spacing}rem`,
      }}
    >
      {children}
    </div>
  );
}
