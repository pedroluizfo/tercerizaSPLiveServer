import React from "react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  style,
  ...restProps
}) => {
  return (
    <img
      style={style}
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
