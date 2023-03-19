/* eslint-disable import/no-unresolved */
import { ICON } from "@src/constants/constants";
import { IconCategory } from "@src/types/types";

import Calendar from "/public/static/icons/calendar.svg";
import Rating from "/public/static/icons/rating.svg";
import Search from "/public/static/icons/search.svg";
import FullStar from "/public/static/icons/full-star.svg";
import EmptyStar from "/public/static/icons/empty-star.svg";
import HalfStar from "/public/static/icons/half-star.svg";
import EmptyHeart from "/public/static/icons/empty-heart.svg";
import FillHeart from "/public/static/icons/fill-heart.svg";
import Back from "/public/static/icons/back.svg";
import Close from "/public/static/icons/close.svg";

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
    case ICON.SEARCH: {
      return (
        <Search
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.FULL_STAR: {
      return (
        <FullStar
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.HALF_STAR: {
      return (
        <HalfStar
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.EMPTY_STAR: {
      return (
        <EmptyStar
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.EMPTY_HEART: {
      return (
        <EmptyHeart
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.FILL_HEART: {
      return (
        <FillHeart
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.BACK: {
      return (
        <Back
          fill={color}
          stroke={color}
          width={size || "24px"}
          height={size || "24px"}
        />
      );
    }
    case ICON.CLOSE: {
      return (
        <Close
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
