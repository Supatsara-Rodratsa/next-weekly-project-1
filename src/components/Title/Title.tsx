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
  customStyle?: string;
};

const Title = ({
  fontSize,
  color,
  textAlign,
  width,
  textTransform,
  fontWeight,
  children,
  customStyle,
}: TitleProps) => {
  return (
    <h1
      className={clsx(
        customStyle,
        fontSize
          ? `text-[${fontSize}px]`
          : "text-5xl tablet:text-4xl mobile:text-2xl",
        color ? `text-[${color}]` : "text-white",
        textAlign ? `text-${textAlign}` : "text-start",
        width ? `w-[${width}]` : "w-fit",
        textTransform,
        fontWeight ? `font-${fontWeight}` : "font-bold",
        "font-sans"
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
