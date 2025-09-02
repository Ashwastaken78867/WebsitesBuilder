import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import CanvasProperties from "./CanvasProperties";
import BlockProperties from "./BlockProperties";

interface PropertiesPanelProps {
  canvasColor: string;
  setCanvasColor: (color: string) => void;
  addPage: () => void;
  deletePage: () => void; // ✅ include deletePage here
  pagesCount: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PropertiesPanel(props: PropertiesPanelProps) {
  const { canvasColor, setCanvasColor, addPage, deletePage, pagesCount } = props;

  const blocks = useSelector((s: RootState) => s.elements.blocks);
  const selectedId = useSelector((s: RootState) => s.ui.selectedId);

  if (!selectedId) {
    return (
      <CanvasProperties
        canvasColor={canvasColor}
        setCanvasColor={setCanvasColor}
        addPage={addPage}
        deletePage={deletePage} // ✅ pass real function
        pagesCount={pagesCount}
      />
    );
  }

  const block = blocks.find((x) => x.id === selectedId);
  if (!block) {
    return (
      <aside className="w-80 sm:w-80 xs:w-full p-5 border-l bg-white overflow-y-auto min-w-0">
        <h3 className="text-lg font-semibold mb-4">Properties</h3>
        <div className="text-sm text-gray-500">Selected element not found</div>
      </aside>
    );
  }

  return <BlockProperties block={block} />;
}
