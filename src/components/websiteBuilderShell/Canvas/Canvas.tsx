import React from "react";
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from "react-redux";
import { selectComponent, clearSelection } from "@/redux/uiSlice";
import { updateBlock, type Block } from "@/redux/elementsSlice";
import type { RootState } from "@/redux/store";
import type { DraggableEvent, DraggableData } from "react-draggable";

import Card from "@/DynamicComponents/Card";
import Header from "@/DynamicComponents/Header";
import Footer from "@/DynamicComponents/Footer";

interface CanvasProps {
  canvasColor: string;
  pagesCount: number;
}

export default function Canvas({ canvasColor, pagesCount }: CanvasProps) {
  const dispatch = useDispatch();
  const blocks = useSelector((s: RootState) => s.elements.blocks);
  const selectedId = useSelector((s: RootState) => s.ui.selectedId);

  const pageHeight = 1000;

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as Element).classList.contains("canvas-page")) {
      dispatch(clearSelection());
    }
  };

  return (
    <section className="flex-1 p-4 overflow-auto bg-gray-200 min-w-0">
      <div className="w-full max-w-6xl mx-auto space-y-6">
        {Array.from({ length: pagesCount }).map((_, pageIndex) => (
          <div
            key={`page-${pageIndex}`}
            className="canvas-page relative rounded-lg shadow-xl mx-auto"
            style={{ height: pageHeight, backgroundColor: canvasColor }}
            onClick={handleCanvasClick}
          >
            <span className="absolute bottom-2 right-4 text-gray-400 text-sm">
              Page {pageIndex + 1}
            </span>

            {blocks
              .filter((b) => b.pageId === pageIndex)
              .map((b: Block) => {
                const selected = selectedId === b.id;

                const textStyle: React.CSSProperties = {
                  fontSize: b.fontSize ? `${b.fontSize}px` : undefined,
                  color: b.color || undefined,
                };

                const rndStyle: React.CSSProperties = {
                  backgroundColor: b.backgroundColor || "transparent",
                };

                return (
                  <Rnd
                    key={b.id}
                    size={{
                      width: Math.min(b.width ?? 300, window.innerWidth - 200),
                      height: b.height ?? 100,
                    }}
                    position={{ x: b.x ?? 40, y: b.y ?? 40 }}
                    bounds="parent"
                    style={rndStyle}
                    onDragStop={(_e: DraggableEvent, d: DraggableData) => {
                      dispatch(updateBlock({ id: b.id, x: d.x, y: d.y }));
                    }}
                    onResizeStop={(_e, _dir, ref: HTMLElement, _delta, position) => {
                      dispatch(
                        updateBlock({
                          id: b.id,
                          width: ref.offsetWidth,
                          height: ref.offsetHeight,
                          x: position.x,
                          y: position.y,
                        })
                      );
                    }}
                    className={`absolute p-2 rounded-md border shadow-md transition-all ${
                      selected
                        ? "ring-2 ring-indigo-500 scale-[1.02]"
                        : "hover:ring-1 hover:ring-indigo-300"
                    } cursor-move`}
                    onClick={(e: { stopPropagation: () => void; }) => {
                      e.stopPropagation();
                      dispatch(selectComponent(b.id));
                    }}
                  >
                    {/* ✅ Card block */}
                    {b.type === "card" && (
                      <Card
                        content={b.content}
                        backgroundColor={b.backgroundColor}
                        style={{ color: b.color, fontSize: b.fontSize }}
                      />
                    )}

                    {b.type === "header" && (
                      <Header
                        content={b.content || "Header"}
                        style={textStyle}
                        backgroundColor={b.backgroundColor}
                      />
                    )}

                    {b.type === "footer" && (
                      <Footer
                        content={b.content || "Footer"}
                        style={textStyle}
                        backgroundColor={b.backgroundColor}
                      />
                    )}

                    {b.type === "text" && (
                      <div style={textStyle}>{b.content || "Text"}</div>
                    )}

                    {b.type === "image" && (
                      <img
                        src={b.content}
                        alt="user-content"
                        className="w-full h-full object-cover rounded"
                      />
                    )}

                    {b.type === "button" && (
                      <button
                        className="px-4 py-2 rounded"
                        style={{
                          ...textStyle,
                          backgroundColor: b.backgroundColor || undefined,
                        }}
                      >
                        {b.content || "Button"}
                      </button>
                    )}
                  </Rnd>
                );
              })}
          </div>
        ))}
      </div>
    </section>
  );
}
