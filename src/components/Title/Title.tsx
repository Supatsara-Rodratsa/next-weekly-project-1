import { Align, FontWeight, TextTransform } from "@src/types/types";
import clsx from "clsx";
import { ReactNode } from "react";

type TitleProps = {
  fontSize?: number;
  color?: string;
  width?: string;
  textAlign?: Align;
  textTransform?: TextTransform;
  fontWeight?: FontWeight;
  children: ReactNode;
};

const Title = ({
  fontSize,
  color,
  textAlign,
  width,
  textTransform,
  fontWeight,
  children,
}: TitleProps) => {
  return (
    <h1
      className={clsx(
        fontSize ? `text-[${fontSize}px]` : "text-5xl",
        color ? `text-[${color}]` : "text-black",
        textAlign ? `text-${textAlign}` : "text-start",
        width ? `w-[${width}]` : "w-fit",
        textTransform,
        fontWeight ? `font-${fontWeight}` : "font-bold",
        "font-maven"
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
