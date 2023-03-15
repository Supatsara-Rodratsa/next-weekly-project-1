import { IconCategory } from "@src/types/types";
import Calendar from "/public/static/icons/calendar.svg";
import Rating from "/public/static/icons/rating.svg";
import { ICON } from "@src/constants/constants";

type IconProps = {
  color?: string;
  size?: string;
  type: IconCategory;
};

const Icon = ({ color, size, type }: IconProps) => {
  switch (type) {
    case ICON.CALENDAR: {
      return (
        <Calendar
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.RATING: {
      return (
        <Rating
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    default: {
      return <div></div>;
    }
  }
};

export default Icon;
