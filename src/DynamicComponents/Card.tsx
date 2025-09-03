import React from "react";

interface CardProps {
  content?: string;
  backgroundColor?: string;
  style?: React.CSSProperties;
}

export default function Card({ content, backgroundColor, style }: CardProps) {
  return (
    <div
      className="p-4 rounded-xl shadow-md"
      style={{
        backgroundColor: backgroundColor || "#f9f9f9",
        ...style,
      }}
    >
      <h3 className="text-lg font-semibold mb-2">Card Title</h3>
      <p className="text-sm text-gray-700">{content || "Card description here..."}</p>
    </div>
  );
}
