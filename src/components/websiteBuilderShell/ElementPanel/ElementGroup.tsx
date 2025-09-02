import ElementButton from "./ElementButton";
import { ChevronDown } from "lucide-react";
import type { Block } from "@/redux/elementsSlice";

interface ElementGroupProps {
  title: string;
  items: Block["type"][];
  openDropdown: "elements" | "components" | null;
  toggleDropdown: (menu: "elements" | "components") => void;
  typeKey: "elements" | "components";
  handleAdd: (type: Block["type"]) => void;
}

export default function ElementGroup({
  title,
  items,
  openDropdown,
  toggleDropdown,
  typeKey,
  handleAdd,
}: ElementGroupProps) {
  return (
    <div className="mb-4">
      <button
        onClick={() => toggleDropdown(typeKey)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg border bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <span className="font-medium">{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === typeKey ? "rotate-180" : ""}`} />
      </button>

      {openDropdown === typeKey && (
        <div className="mt-2 space-y-2">
          {items.map((type) => (
            <ElementButton key={type} type={type} handleAdd={handleAdd} />
          ))}
        </div>
      )}
    </div>
  );
}
