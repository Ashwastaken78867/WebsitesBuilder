import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { setBlocks } from "@/redux/elementsSlice";
import {
  Save,
  Upload,
  Plus,
  ChevronDown,
  UserCircle2,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function Topbar() {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.elements.blocks);

  const [pagesDropdown, setPagesDropdown] = useState(false);
  const [pages] = useState(["Page 1", "Page 2", "Page 3"]); // example pages

  const handleSave = () => {
    localStorage.setItem("canvasData", JSON.stringify(blocks));
    alert("Canvas saved!");
  };

  const handleLoad = () => {
    const saved = localStorage.getItem("canvasData");
    if (saved) {
      dispatch(setBlocks(JSON.parse(saved)));
      alert("Canvas loaded!");
    } else {
      alert("No saved canvas found.");
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold tracking-tight text-indigo-600">
          websites.co.in
        </div>
        <span className="text-gray-500">Builder</span>
      </div>

      {/* Center actions */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          <Save size={16} />
          Save
        </button>

        <button
          onClick={handleLoad}
          className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
        >
          <Upload size={16} />
          Load
        </button>

        {/* Pages Dropdown */}
        <div className="relative">
          <button
            onClick={() => setPagesDropdown(!pagesDropdown)}
            className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 transition"
          >
            Pages <ChevronDown size={16} />
          </button>
          {pagesDropdown && (
            <div className="absolute top-full mt-1 w-40 bg-white border rounded shadow-lg z-10">
              {pages.map((p, i) => (
                <div
                  key={i}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {p}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* User / Settings */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-gray-100 transition">
          <UserCircle2 size={24} />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 transition">
          <Settings size={24} />
        </button>
      </div>
    </header>
  );
}
