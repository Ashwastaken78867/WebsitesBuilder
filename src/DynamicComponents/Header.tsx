import React from "react";

interface HeaderProps {
  content?: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
}

export default function Header({ content, style, backgroundColor }: HeaderProps) {
  return (
    <div
      className="w-full h-full flex items-center justify-between px-6"
      style={{ backgroundColor: backgroundColor || "#f3f4f6" }}
    >
      <span
        className="font-bold text-lg"
        style={{ color: style?.color, fontSize: style?.fontSize }}
      >
        {content}
      </span>
      <nav>
        <a href="#" className="mr-4 text-sm hover:underline">
          Home
        </a>
        <a href="#" className="mr-4 text-sm hover:underline">
          About
        </a>
        <a href="#" className="text-sm hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
}
