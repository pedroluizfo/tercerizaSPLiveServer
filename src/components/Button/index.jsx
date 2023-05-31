import React from "react";
import PropTypes from "prop-types";
import "../../styles/font.css"


const shapes = {
  CircleBorder28: "rounded-[28px]",
  CircleBorder20: "rounded-[20px]",
  icbCircleBorder12: "rounded-[12px]",
  icbCircleBorder28: "rounded-[28px]",
};
const variants = {
  OutlineCyanA400: "border-4 border-cyan_A400 border-solid text-cyan_A400",
  FillGray400: "bg-gray_400 text-gray_100",
  FillYellow700: "bg-yellow_700 text-blue_gray_900",
  OutlineDeeporangeA400: "border-4 border-deep_orange_A400 border-solid",
  icbOutlineWhiteA700: "border border-solid border-white_A700",
  icbOutlineYellow70087: "border-[3px] border-solid border-yellow_700_87",
  icbOutlineYellow700: "border-[3px] border-solid border-yellow_700",
  icbOutlineDeeporangeA40087:
    "border-[3px] border-deep_orange_A400_87 border-solid",
  icbOutlineDeeporangeA400: "border-[3px] border-deep_orange_A400 border-solid",
};
const sizes = {
  sm: "",
  md: "p-2.5",
  lg: "p-[15px]",
  smIcn: "p-1.5",
  mdIcn: "p-3.5",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  type,
  handlePosition,
  size,
  ...restProps
}) => {
  return (
    <button
      type={type}
      onClick={handlePosition}
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder28",
    "CircleBorder20",
    "icbCircleBorder12",
    "icbCircleBorder28",
  ]),
  variant: PropTypes.oneOf([
    "OutlineCyanA400",
    "FillGray400",
    "FillYellow700",
    "OutlineDeeporangeA400",
    "icbOutlineWhiteA700",
    "icbOutlineYellow70087",
    "icbOutlineYellow700",
    "icbOutlineDeeporangeA40087",
    "icbOutlineDeeporangeA400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
