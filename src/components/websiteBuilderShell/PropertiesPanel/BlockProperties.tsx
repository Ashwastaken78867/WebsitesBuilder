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
    // <aside className="w-80 p-5 border-l bg-white overflow-y-auto">
    <aside className="w-80 sm:w-80 xs:w-full p-5 border-l bg-white overflow-y-auto min-w-0">

      <h3 className="text-lg font-semibold mb-4">Block Properties</h3>
      <div className="space-y-4">
        {(block.type === "text" ||
          block.type === "header" ||
          block.type === "footer") && (
          <>
            <label className="block text-sm font-medium">Content</label>
            {block.type === "text" ? (
              <textarea
                className="w-full rounded border p-2"
                value={block.content || ""}
                onChange={(e) => handleContentChange(e.target.value)}
                rows={4}
              />
            ) : (
              <input
                className="w-full rounded border p-2"
                value={block.content || ""}
                onChange={(e) => handleContentChange(e.target.value)}
              />
            )}

            <label className="block text-sm font-medium mt-2">Font Size</label>
            <input
              type="number"
              className="w-full rounded border p-2"
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

            <label className="block text-sm font-medium mt-2">Font Color</label>
            <input
              type="color"
              className="w-full h-10 p-0 border rounded"
              value={block.color ?? "#000000"}
              onChange={(e) =>
                dispatch(updateBlock({ id: block.id, color: e.target.value }))
              }
            />

            <label className="block text-sm font-medium mt-2">
              Background Color
            </label>
            <input
              type="color"
              className="w-full h-10 p-0 border rounded"
              value={block.backgroundColor ?? "#ffffff"}
              onChange={(e) =>
                dispatch(
                  updateBlock({
                    id: block.id,
                    backgroundColor: e.target.value,
                  })
                )
              }
            />
          </>
        )}

        {block.type === "image" && (
          <>
            <label className="block text-sm font-medium">Image URL</label>
            <input
              className="w-full rounded border p-2"
              value={block.content || ""}
              onChange={(e) =>
                dispatch(updateBlock({ id: block.id, content: e.target.value }))
              }
              placeholder="Image URL"
            />
            <div className="text-xs text-gray-500 mt-1">
              Tip: use a publicly accessible image URL
            </div>
          </>
        )}

        {block.type === "button" && (
          <>
            <label className="block text-sm font-medium">Button Text</label>
            <input
              className="w-full rounded border p-2"
              value={block.content || ""}
              onChange={(e) => handleContentChange(e.target.value)}
            />
            <label className="block text-sm font-medium mt-2">
              Background Color
            </label>
            <input
              type="color"
              className="w-full h-10 p-0 border rounded"
              value={block.backgroundColor ?? "#4f46e5"}
              onChange={(e) =>
                dispatch(
                  updateBlock({
                    id: block.id,
                    backgroundColor: e.target.value,
                  })
                )
              }
            />
            <label className="block text-sm font-medium mt-2">Font Color</label>
            <input
              type="color"
              className="w-full h-10 p-0 border rounded"
              value={block.color ?? "#ffffff"}
              onChange={(e) =>
                dispatch(updateBlock({ id: block.id, color: e.target.value }))
              }
            />
          </>
        )}

        <div className="flex gap-2 mt-2">
          <button
            onClick={() => {
              dispatch(deleteBlock(block.id));
              dispatch(clearSelection());
            }}
            className="px-3 py-2 rounded border text-sm text-red-600"
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(clearSelection())}
            className="px-3 py-2 rounded border text-sm"
          >
            Deselect
          </button>
        </div>
      </div>
    </aside>
  );
}
