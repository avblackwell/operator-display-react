import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { Item } from "@/components/Item.tsx";
import "../styles.css";
import { GridContainer } from "@/components/GridContainer";
import Component from "@/components/TabsContainer";

export const Route = createFileRoute("/drag")({
  component: App,
});

function App() {
  const [items, setItems] = useState({
    Test: ["A0", "A1", "A2"],
    Test1: ["B0", "B1"],
    Test2: [],
  });
  const previousItems = useRef(items);
  const [columnOrder, setColumnOrder] = useState(() => Object.keys(items));

  return (
    <DragDropProvider
      onDragStart={() => {
        previousItems.current = items;
      }}
      onDragOver={(event) => {
        const { source, target } = event.operation;

        if (source?.type === "column") return;

        setItems((items) => move(items, event));
      }}
      onDragEnd={(event) => {
        const { source, target } = event.operation;

        if (event.canceled) {
          if (source.type === "item") {
            setItems(previousItems.current);
          }

          return;
        }

        if (source.type === "column") {
          setColumnOrder((columns) => move(columns, event));
        }
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        {columnOrder.map((column, columnIndex) => (
          <GridContainer
            key={column}
            id={column}
            index={columnIndex}
            columns={2}
          >
            {items[column].map((id, index) => (
              <Item key={id} id={id} index={index} column={column} />
            ))}
          </GridContainer>
          //   <Column key={column} id={column} index={columnIndex}>
          //   {items[column].map((id, index) => (
          //     <Item key={id} id={id} index={index} column={column} />
          //   ))}
          // </Column>
        ))}
      </div>
    </DragDropProvider>
  );
}
