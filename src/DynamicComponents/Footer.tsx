import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  content: string;
  style?: React.CSSProperties;
  backgroundColor?: string;
}

export default function Footer({
  content,
  style,
  backgroundColor,
}: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: backgroundColor || "#111827", // dark slate default
        color: style?.color || "#F9FAFB", // light text
        fontSize: style?.fontSize || "14px",
      }}
      className="w-full text-center p-4 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6 shadow-inner"
    >
      {/* Left - Text */}
      <p className="text-sm">{content}</p>

      {/* Right - Social Icons */}
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Facebook"
          className="text-gray-400 hover:text-blue-500 transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-gray-400 hover:text-sky-400 transition"
        >
          <Twitter size={20} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-gray-400 hover:text-pink-500 transition"
        >
          <Instagram size={20} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-600 transition"
        >
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
