export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold tracking-tight">websites.co.in</div>
        <div className="text-lg text-gray-600">Drag &amp; Drop Website Builder</div>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded bg-gray-900 text-white text-sm">Preview</button>
        <button className="px-4 py-2 rounded border text-sm">Save</button>
        <button className="px-4 py-2 rounded border bg-white text-sm">Export</button>
      </div>
    </header>
  );
}
