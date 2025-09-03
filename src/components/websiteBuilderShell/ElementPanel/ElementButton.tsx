import type { Block } from "@/redux/elementsSlice";

interface ElementButtonProps {
  type: Block["type"];
  handleAdd: (type: Block["type"]) => void;
}

export default function ElementButton({ type, handleAdd }: ElementButtonProps) {
  const labelMap: Record<Block["type"], string> = {
    text: "T",
    image: "🖼️",
    button: "●",
    header: "H",
    footer: "F",
    card: ""
  };

  return (
    <button
      onClick={() => handleAdd(type)}
      className="w-full flex items-center gap-3 px-4 py-2 rounded-lg border bg-white hover:bg-gray-50 text-sm"
    >
      <div className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-md">{labelMap[type]}</div>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
}
