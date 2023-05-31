import React from "react";

import { Text } from "components";

import "../../styles/font.css"


const HomeColumnconcepo = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="font-arboria text-center text-yellow_700 tracking-[4.00px]"
            as="h3"
            variant="h3"
          >
            {props?.one}
          </Text>
        </div>
        <Text
          className="font-arboria text-center text-yellow_700 tracking-[4.00px] w-full"
          as="h5"
          variant="h5"
        >
          {props?.concepo}
        </Text>
        <div className="flex flex-col gap-4 items-center justify-start">
          <Text
            className="font-arboria leading-[27.00px] text-center text-white_A700 w-full"
            variant="body3"
          >
            {props?.loremipsumdolor_One}
          </Text>
          <Text
            className="font-arboria leading-[27.00px] text-center text-white_A700 w-full"
            variant="body3"
          >
            {props?.loremipsumdolor_Three}
          </Text>
        </div>
      </div>
    </>
  );
};

HomeColumnconcepo.defaultProps = {
  one: "1",
  concepo: "Concepção",
  loremipsumdolor_One:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  loremipsumdolor_Three:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

export default HomeColumnconcepo;
