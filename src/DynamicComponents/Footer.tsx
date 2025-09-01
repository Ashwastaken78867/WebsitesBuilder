import React from "react";

interface FooterProps {
  content: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
}

export default function Footer({ content, style, backgroundColor }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: backgroundColor || "transparent",
        color: style?.color,
        fontSize: style?.fontSize,
      }}
      className="text-sm w-full text-center p-2"
    >
      {content}
    </footer>
  );
}
