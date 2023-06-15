import React from "react";

import "../../styles/font.css"

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-[80px]",
  h2: "font-normal sm:text-5xl md:text-5xl text-6xl",
  h3: "text-5xl sm:text-[38px] md:text-[44px]",
  h4: "sm:text-4xl md:text-[38px] text-[40px]",
  h5: "md:text-3xl sm:text-[28px] text-[32px]",
  h6: "font-normal text-2xl md:text-[22px] sm:text-xl",
  body1: "font-normal text-[22px] sm:text-lg md:text-xl",
  body2: "font-normal text-xl",
  body3: "font-normal text-lg",
  body4: "font-normal text-base",
  body5: "font-normal text-sm",
  body6: "font-normal text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
