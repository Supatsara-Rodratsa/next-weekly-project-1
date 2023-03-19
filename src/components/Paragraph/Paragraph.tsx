import clsx from "clsx";
import { ReactNode } from "react";

import { Align, FontWeight, TextTransform } from "@src/types/types";

type ParagraphProps = {
  fontSize?: number;
  color?: string;
  width?: string;
  textAlign?: Align;
  textTransform?: TextTransform;
  fontWeight?: FontWeight;
  children: ReactNode;
  customStyle?: string;
};

const Paragraph = ({
  fontSize,
  color,
  textAlign,
  width,
  textTransform,
  fontWeight,
  children,
  customStyle,
}: ParagraphProps) => {
  return (
    <p
      className={clsx(
        customStyle,
        fontSize && `text-[${fontSize}px]`,
        color && `text-[${color}]`,
        textAlign && `text-${textAlign}`,
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
