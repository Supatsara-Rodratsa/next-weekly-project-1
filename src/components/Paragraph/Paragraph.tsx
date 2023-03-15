import { Align, FontWeight, TextTransform } from "@src/types/types";
import clsx from "clsx";
import { ReactNode } from "react";

type ParagraphProps = {
  fontSize?: number;
  color?: string;
  width?: string;
  textAlign?: Align;
  textTransform?: TextTransform;
  fontWeight?: FontWeight;
  children: ReactNode;
};

const Paragraph = ({
  fontSize,
  color,
  textAlign,
  width,
  textTransform,
  fontWeight,
  children,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        fontSize ? `text-[${fontSize}px]` : "text-base",
        color ? `text-[${color}]` : "text-white",
        textAlign ? `text-${textAlign}` : "text-start",
        width ? `w-[${width}]` : "w-fit",
        textTransform,
        fontWeight ? `font-${fontWeight}` : "font-normal"
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
