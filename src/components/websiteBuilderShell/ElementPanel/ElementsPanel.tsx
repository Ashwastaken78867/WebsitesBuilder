import { useState } from "react";
import ElementGroup from "./ElementGroup";
import type { Block } from "@/redux/elementsSlice";

interface ElementsPanelProps {
  currentPage: number;
  addBlock: (payload: Block) => void;
  selectComponent: (id: string) => void;
}

export default function ElementsPanel({
  currentPage,
  addBlock,
  selectComponent,
}: ElementsPanelProps) {
  const [openDropdown, setOpenDropdown] = useState<"elements" | "components" | null>(null);

  // ✅ Truly unique ID
  const makeId = () => `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleAdd = (type: Block["type"]) => {
    const id = makeId();
    let content: string;
    let height = 150;

    switch (type) {
      case "text":
        content = "Edit me";
        height = 60;
        break;
      case "image":
        content = "https://via.placeholder.com/800x300?text=Image+Placeholder";
        break;
      case "button":
        content = "Click me";
        break;
      case "header":
        content = "Logo";
        height = 80;
        break;
      case "footer":
        content = "© 2025 My Company";
        height = 60;
        break;
      default:
        content = "";
    }

    const payload: Block = {
      id,
      type,
      pageId: currentPage,
      content,
      x: 20,
      y: 20,
      width: 300,
      height,
    };

    addBlock(payload);
    selectComponent(id);
  };

  const toggleDropdown = (menu: "elements" | "components") => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <aside className="w-64 sm:w-64 xs:w-full p-5 border-r bg-white flex flex-col min-h-0">
      <div className="flex-1 overflow-y-auto space-y-4">
        <h3 className="text-lg font-semibold mb-2">Canvas Tools</h3>

        <ElementGroup
          title="Elements"
          items={["text", "image", "button"]}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          typeKey="elements"
          handleAdd={handleAdd}
        />

        <ElementGroup
          title="Components"
          items={["header", "footer"]}
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          typeKey="components"
          handleAdd={handleAdd}
        />
      </div>

    
    </aside>
  );
}
