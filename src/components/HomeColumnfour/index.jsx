import React from "react";

import { Img, Text } from "components";

import "../../styles/font.css"


const HomeColumnfour = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start max-w-[1170px] w-full">
          <div className="bg-blue_gray_900 flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
            <Text
              className="font-arboria text-yellow_700 w-auto"
              as="h6"
              variant="h6"
            >
              {props?.comopossomecert}
            </Text>
            <Img
              src="images/img_chevronright.svg"
              className="h-12 w-12"
              alt="chevronright"
            />
          </div>
          <div className="bg-blue_gray_900 flex flex-col gap-4 items-start justify-start max-w-[1080px] sm:px-5 px-8 py-4 w-full">
            <Text
              className="font-arboria leading-[33.00px] max-w-[1016px] md:max-w-full text-white_A700"
              variant="body2"
            >
              {props?.description}
            </Text>
            <Text
              className="font-arboria leading-[33.00px] max-w-[1016px] md:max-w-full text-white_A700"
              variant="body2"
            >
              {props?.description_One}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnfour.defaultProps = {
  comopossomecert: "Quem faz o regulatório dos produtos?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna.",
  description_One:
    "Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna.",
};

export default HomeColumnfour;
