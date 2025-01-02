import { DropResult } from "@hello-pangea/dnd";
import { GithubIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { DndContainer, DndItem, DndRoot, DragHandle } from "./components/dnd";

export default function App() {
  const [list, setList] = useState<any[]>([
    { title: "Item 1", description: "Description for item 1" },
    { title: "Item 2", description: "Description for item 2" },
    { title: "Item 3", description: "Description for item 3" },
    { title: "Item 4", description: "Description for item 4" },
    { title: "Item 5", description: "Description for item 5" },
  ]);

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;

    const items = Array.from(list);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    // Update the list state with the new order
    setList(items);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold max-w-md text-center text-balance">
        React Drag and Drop Component
      </h1>

      <div className="flex items-center justify-center gap-2">
        <a
          href="https://github.com/HoshangDEV/react-dnd-component"
          target="_blank"
          className="bg-black text-white px-4 py-2 rounded-xl">
          <span className="flex items-center gap-2">
            <GithubIcon className="size-5" />
            <span>Source Code</span>
            <StarIcon className="size-5 fill-yellow-500 text-yellow-500" />
          </span>
        </a>
      </div>

      <DndRoot
        onDragEnd={handleDragEnd}
        className="max-w-md border rounded-xl p-4">
        <DndContainer id="category-list" className="space-y-2">
          {list.map((category, index) => (
            <DndItem key={index} id={String(index)} index={index}>
              {(dragHandleProps) => (
                <div className="flex items-center px-4 py-2 h-fit bg-background gap-4 border rounded-lg backdrop-blur">
                  <DragHandle dragHandleProps={dragHandleProps} />
                  <div className="select-none flex-col py-0 gap-0 items-start w-full">
                    <h1 className="font-bold line-clamp-1">{category.title}</h1>
                    <p className="text-xs text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              )}
            </DndItem>
          ))}
        </DndContainer>
      </DndRoot>
    </div>
  );
}
