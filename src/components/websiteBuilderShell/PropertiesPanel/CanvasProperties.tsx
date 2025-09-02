interface CanvasPropertiesProps {
  canvasColor: string;
  setCanvasColor: (color: string) => void;
  addPage: () => void;
  deletePage: () => void;
  pagesCount: number;
}

export default function CanvasProperties({
  canvasColor,
  setCanvasColor,
  addPage,
  deletePage,
  pagesCount,
}: CanvasPropertiesProps) {
  return (
    <aside className="w-80 sm:w-80 xs:w-full p-5 border-l bg-white overflow-y-auto min-w-0 shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Canvas Properties</h3>

      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={addPage}
            className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            Add Page
          </button>
          <button
            onClick={deletePage}
            disabled={pagesCount <= 1}
            className={`flex-1 px-4 py-2 rounded text-white transition ${
              pagesCount <= 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700"
            }`}
          >
            Delete Page
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Canvas Color
          </label>
          <input
            type="color"
            className="w-full h-10 p-0 border rounded cursor-pointer"
            value={canvasColor}
            onChange={(e) => setCanvasColor(e.target.value)}
          />
        </div>

        <div className="text-sm text-gray-500 mt-4">
          Total Pages: <span className="font-medium">{pagesCount}</span>
        </div>
      </div>
    </aside>
  );
}
