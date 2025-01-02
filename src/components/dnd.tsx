"use client";

import {
  DragDropContext as DndContext,
  Draggable as DndDraggable,
  Droppable as DndDroppable,
  DropResult,
} from "@hello-pangea/dnd";
import { GripVerticalIcon } from "lucide-react";
import * as React from "react";
import { cn } from "../lib/utils";

// Root Context
interface DndContextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDragEnd"> {
  children: React.ReactNode;
  onDragEnd: (result: DropResult) => void;
}

// DragHandle Component
interface DragHandleProps {
  dragHandleProps: any;
}

const DragHandle = React.forwardRef<HTMLDivElement, DragHandleProps>(
  ({ dragHandleProps }, ref) => {
    return (
      <button
        ref={ref}
        className="cursor-grab p-2 hover:bg-muted-foreground/20 border rounded-lg"
        {...dragHandleProps}>
        <GripVerticalIcon className="size-5" />
      </button>
    );
  }
);
DragHandle.displayName = "DragHandle";

const DndRoot = React.forwardRef<HTMLDivElement, DndContextProps>(
  ({ children, onDragEnd, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        <DndContext onDragEnd={onDragEnd}>{children}</DndContext>
      </div>
    );
  }
);
DndRoot.displayName = "DndRoot";

// Container Component
interface DndContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id: string;
}

const DndContainer = React.forwardRef<HTMLDivElement, DndContainerProps>(
  ({ children, id, className, ...props }) => {
    return (
      <DndDroppable droppableId={id}>
        {(provided) => (
          <div {...provided.droppableProps} {...props}>
            <div ref={provided.innerRef} className="space-y-2">
              {children}
              {provided.placeholder}
            </div>
          </div>
        )}
      </DndDroppable>
    );
  }
);
DndContainer.displayName = "DndContainer";

// Item Component
interface DndItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  id: string;
  index: number;
  children: (dragHandleProps: any) => React.ReactNode;
}

const DndItem = React.forwardRef<HTMLDivElement, DndItemProps>(
  ({ children, id, index, className, ...props }) => {
    return (
      <DndDraggable draggableId={id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...props}
            className={cn("", className)}>
            {children(provided.dragHandleProps)}
          </div>
        )}
      </DndDraggable>
    );
  }
);
DndItem.displayName = "DndItem";

export { DndContainer, DndItem, DndRoot, DragHandle };

