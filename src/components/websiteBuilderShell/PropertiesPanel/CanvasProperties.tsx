
interface CanvasPropertiesProps {
  canvasColor: string;
  setCanvasColor: (color: string) => void;
  addPage: () => void;
  pagesCount: number;
}

export default function CanvasProperties({
  canvasColor,
  setCanvasColor,
  addPage,
  pagesCount,
}: CanvasPropertiesProps) {
  return (
    <aside className="w-80 p-5 border-l bg-white overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4">Canvas Properties</h3>
      <div className="space-y-4">
        <button
          onClick={addPage}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full"
        >
          Add Page
        </button>

        <div>
          <label className="block text-sm font-medium mt-2">Canvas Color</label>
          <input
            type="color"
            className="w-full h-10 p-0 border rounded"
            value={canvasColor}
            onChange={(e) => setCanvasColor(e.target.value)}
          />
        </div>

        <div className="text-sm text-gray-500 mt-2">Pages: {pagesCount}</div>
      </div>
    </aside>
  );
}
