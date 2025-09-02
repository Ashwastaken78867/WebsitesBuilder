import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Topbar from "./Topbar";
import ElementsPanel from "./ElementPanel/ElementsPanel";
import Canvas from "./Canvas/Canvas";
import PropertiesPanel from "./PropertiesPanel/PropertiesPanel";
import type { Block } from "@/redux/elementsSlice";
import { addBlock as addBlockAction } from "@/redux/elementsSlice";

export default function WebsiteBuilderShell() {
  const dispatch = useDispatch();

  const [canvasColor, setCanvasColor] = useState("#ffffff");
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  // Load saved state
  useEffect(() => {
    const saved = localStorage.getItem("builderUI");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCanvasColor(parsed.canvasColor ?? "#ffffff");
      setPagesCount(parsed.pagesCount ?? 1);
      setCurrentPage(parsed.currentPage ?? 0);
    }
  }, []);

  // Save state
  useEffect(() => {
    localStorage.setItem(
      "builderUI",
      JSON.stringify({ canvasColor, pagesCount, currentPage })
    );
  }, [canvasColor, pagesCount, currentPage]);

  // Add page
  const addPage = () => {
    setPagesCount((prev) => prev + 1);
    setCurrentPage(pagesCount);
  };

  // Delete page
  const deletePage = () => {
    if (pagesCount <= 1) return;
    const newCount = pagesCount - 1;
    setPagesCount(newCount);
    if (currentPage >= newCount) {
      setCurrentPage(newCount - 1);
    }
  };

  const selectComponent = (id: string) => {
    console.log("Selected block ID:", id);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Topbar />
      <main className="flex flex-1 overflow-auto flex-col sm:flex-row min-w-0">
        <ElementsPanel
          currentPage={currentPage}
          addBlock={(payload: Block) => dispatch(addBlockAction(payload))}
          selectComponent={selectComponent}
        />
        <Canvas canvasColor={canvasColor} pagesCount={pagesCount} />
        <PropertiesPanel
          canvasColor={canvasColor}
          setCanvasColor={setCanvasColor}
          addPage={addPage}
          deletePage={deletePage}
          pagesCount={pagesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
}
