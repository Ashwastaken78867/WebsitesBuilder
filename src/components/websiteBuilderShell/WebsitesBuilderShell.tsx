import { useState, useEffect } from "react";
import Topbar from "./Topbar";
import ElementsPanel from "./ElementPanel/ElementsPanel";
import Canvas from "./Canvas/Canvas";
import PropertiesPanel from "./PropertiesPanel/PropertiesPanel";

export default function WebsiteBuilderShell() {
  const [canvasColor, setCanvasColor] = useState("#ffffff");
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(0);

  // --- Load from localStorage on mount ---
  useEffect(() => {
    const saved = localStorage.getItem("builderUI");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCanvasColor(parsed.canvasColor ?? "#ffffff");
      setPagesCount(parsed.pagesCount ?? 1);
      setCurrentPage(parsed.currentPage ?? 0);
    }
  }, []);

  // --- Save to localStorage when values change ---
  useEffect(() => {
    localStorage.setItem(
      "builderUI",
      JSON.stringify({ canvasColor, pagesCount, currentPage })
    );
  }, [canvasColor, pagesCount, currentPage]);

  const addPage = () => {
    setPagesCount((prev) => prev + 1);
    setCurrentPage(pagesCount); // switch to the new page
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <Topbar />
      <main className="flex flex-1 overflow-hidden">
        <ElementsPanel currentPage={currentPage} />
        <Canvas canvasColor={canvasColor} pagesCount={pagesCount} />
        <PropertiesPanel
          canvasColor={canvasColor}
          setCanvasColor={setCanvasColor}
          addPage={addPage}
          pagesCount={pagesCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </main>
    </div>
  );
}
