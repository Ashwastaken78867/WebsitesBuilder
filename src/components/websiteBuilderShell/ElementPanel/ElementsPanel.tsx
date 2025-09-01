import { useDispatch } from "react-redux";
import { addBlock } from "@/redux/elementsSlice";
import { selectComponent } from "@/redux/uiSlice";
import type { Block } from "@/redux/elementsSlice";

interface ElementsPanelProps {
  currentPage: number;
}

export default function ElementsPanel({ currentPage }: ElementsPanelProps) {
  const dispatch = useDispatch();

  const makeId = () => Date.now().toString();

  const handleAdd = (type: Block["type"]) => {
    const id = makeId();

    // Default content and size for each block type
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
      pageId: currentPage, // ✅ assign to active page
      content,
      x: 20,
      y: 20,
      width: 300,
      height,
    };

    dispatch(addBlock(payload));
    dispatch(selectComponent(id));
  };

  return (
    <aside className="w-64 p-5 border-r bg-white overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Elements</h3>

      {/* Basic Elements */}
      <div className="space-y-3">
        <button
          onClick={() => handleAdd("text")}
          className="w-full flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100"
        >
          <div className="w-9 h-9 rounded-md bg-white border flex items-center justify-center text-gray-700">
            T
          </div>
          <div className="text-sm font-medium">Text</div>
        </button>

        <button
          onClick={() => handleAdd("image")}
          className="w-full flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100"
        >
          <div className="w-9 h-9 rounded-md bg-white border flex items-center justify-center text-gray-700">
            🖼️
          </div>
          <div className="text-sm font-medium">Image</div>
        </button>

        <button
          onClick={() => handleAdd("button")}
          className="w-full flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100"
        >
          <div className="w-9 h-9 rounded-md bg-white border flex items-center justify-center text-gray-700">
            ●
          </div>
          <div className="text-sm font-medium">Button</div>
        </button>
      </div>

      {/* Prebuilt Components */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Components</h3>
      <div className="space-y-3">
        <button
          onClick={() => handleAdd("header")}
          className="w-full flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100"
        >
          <div className="w-9 h-9 rounded-md bg-white border flex items-center justify-center text-gray-700">
            H
          </div>
          <div className="text-sm font-medium">Header</div>
        </button>

        <button
          onClick={() => handleAdd("footer")}
          className="w-full flex items-center gap-3 p-3 rounded-lg border bg-gray-50 hover:bg-gray-100"
        >
          <div className="w-9 h-9 rounded-md bg-white border flex items-center justify-center text-gray-700">
            F
          </div>
          <div className="text-sm font-medium">Footer</div>
        </button>
      </div>
    </aside>
  );
}
