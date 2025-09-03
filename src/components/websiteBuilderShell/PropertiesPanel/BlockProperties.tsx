import { useDispatch } from "react-redux";
import { updateBlock, deleteBlock, type Block } from "@/redux/elementsSlice";
import { clearSelection } from "@/redux/uiSlice";

interface BlockPropertiesProps {
  block: Block;
}

export default function BlockProperties({ block }: BlockPropertiesProps) {
  const dispatch = useDispatch();

  const handleContentChange = (value: string) => {
    dispatch(updateBlock({ id: block.id, content: value }));
  };

  return (
    <aside className="w-80 sm:w-80 xs:w-full p-6 border-l bg-white overflow-y-auto min-w-0 shadow-xl rounded-lg">
      <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">
        Block Properties
      </h3>

      <div className="space-y-6">
        {/* Text / Header / Footer */}
        {(block.type === "text" ||
          block.type === "header" ||
          block.type === "footer") && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              {block.type === "text" ? (
                <textarea
                  className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={block.content || ""}
                  onChange={(e) => handleContentChange(e.target.value)}
                  rows={4}
                />
              ) : (
                <input
                  className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  value={block.content || ""}
                  onChange={(e) => handleContentChange(e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Size
              </label>
              <input
                type="number"
                className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={block.fontSize ?? 16}
                onChange={(e) =>
                  dispatch(
                    updateBlock({
                      id: block.id,
                      fontSize: Number.parseInt(e.target.value, 10),
                    })
                  )
                }
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Color
                </label>
                <input
                  type="color"
                  className="w-full h-10 p-0 border rounded shadow-sm cursor-pointer"
                  value={block.color ?? "#000000"}
                  onChange={(e) =>
                    dispatch(updateBlock({ id: block.id, color: e.target.value }))
                  }
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background
                </label>
                <input
                  type="color"
                  className="w-full h-10 p-0 border rounded shadow-sm cursor-pointer"
                  value={block.backgroundColor ?? "#ffffff"}
                  onChange={(e) =>
                    dispatch(
                      updateBlock({ id: block.id, backgroundColor: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Image */}
        {block.type === "image" && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={block.content || ""}
              onChange={(e) =>
                dispatch(updateBlock({ id: block.id, content: e.target.value }))
              }
              placeholder="Enter image URL"
            />
            <div className="text-xs text-gray-400">
              Tip: use a publicly accessible image URL.
            </div>
          </div>
        )}

        {/* Button */}
        {block.type === "button" && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">Button Text</label>
            <input
              className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={block.content || ""}
              onChange={(e) => handleContentChange(e.target.value)}
            />

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Background Color
                </label>
                <input
                  type="color"
                  className="w-full h-10 p-0 border rounded shadow-sm cursor-pointer"
                  value={block.backgroundColor ?? "#4f46e5"}
                  onChange={(e) =>
                    dispatch(
                      updateBlock({ id: block.id, backgroundColor: e.target.value })
                    )
                  }
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Font Color
                </label>
                <input
                  type="color"
                  className="w-full h-10 p-0 border rounded shadow-sm cursor-pointer"
                  value={block.color ?? "#ffffff"}
                  onChange={(e) =>
                    dispatch(updateBlock({ id: block.id, color: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        )}

        {/* Card */}
        {block.type === "card" && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Card Background
            </label>
            <input
              type="color"
              className="w-full h-10 p-0 border rounded shadow-sm cursor-pointer"
              value={block.backgroundColor ?? "#f9f9f9"}
              onChange={(e) =>
                dispatch(
                  updateBlock({ id: block.id, backgroundColor: e.target.value })
                )
              }
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mt-4 border-t pt-4">
          <button
            onClick={() => {
              dispatch(deleteBlock(block.id));
              dispatch(clearSelection());
            }}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition shadow"
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(clearSelection())}
            className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition shadow"
          >
            Deselect
          </button>
        </div>
      </div>
    </aside>
  );
}
