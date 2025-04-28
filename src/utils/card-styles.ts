import { IconType } from "react-icons";
import { CiStethoscope } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { SlSocialDropbox } from "react-icons/sl";
import { LuCalendarClock } from "react-icons/lu";
import { GoClock } from "react-icons/go";

export const cardStyles = {
  surgeries: {
    icon: CiStethoscope as IconType,
    cardBgColor: "#f0f9ff",
    iconBgColor: "#bae6fd",
    iconColor: "#0284c7",
  },
  arsenal: {
    icon: BsBoxSeam as IconType,
    cardBgColor: "#faf5ff",
    iconBgColor: "#ead6fd",
    iconColor: "#b975f8",
  },
  kitsInSurgery: {
    icon: SlSocialDropbox as IconType,
    cardBgColor: "#eff6ff",
    iconBgColor: "#d0e1fd",
    iconColor: "#38529b",
  },
  kitsInCleaning: {
    icon: BsBoxSeam as IconType,
    cardBgColor: "#fef2f2",
    iconBgColor: "#feddc7",
    iconColor: "#fa8d42",
  },
  avgSurgeryTime: {
    icon: LuCalendarClock as IconType,
    cardBgColor: "#fff7ed",
    iconBgColor: "#feddc7",
    iconColor: "#f97d27",
  },
  avgSterilizationTime: {
    icon: GoClock as IconType,
    cardBgColor: "#eef2ff",
    iconBgColor: "#d0e1fd",
    iconColor: "#4a63a6",
  },
} as const;
