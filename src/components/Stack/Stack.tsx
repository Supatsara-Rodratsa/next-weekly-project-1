import { Align, Direction, JustifyContent } from "@src/types/types";
import clsx from "clsx";
import { ReactNode } from "react";

type StackProp = {
  direction?: Direction;
  justifyContent?: JustifyContent;
  alignItem?: Align;
  gap?: number;
  children?: ReactNode;
};

const Stack = ({
  direction,
  justifyContent,
  alignItem,
  gap,
  children,
}: StackProp) => {
  return (
    <div
      className={clsx(
        "flex",
        direction ? `flex-${direction}` : "flex-row",
        justifyContent ? `justify-${justifyContent}` : "justify-start",
        alignItem ? `items-${alignItem}` : "items-start",
        gap ? `gap-[${gap}px]` : "gap-2"
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
