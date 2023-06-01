import React from "react";

import { Button, Img, Text } from "components";

import "../../styles/font.css"


const HomeSolues = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto sm:w-full">
          <Text
            className="font-arboria text-deep_orange_A400 tracking-[4.00px] w-auto"
            as="h3"
            variant="h3"
          >
            {props?.nossassolues}
          </Text>

          <Text
          className="font-arboria -my-8  text-center text-blue_gray_900 w-auto"
          variant="body3"
        >
          {props?.textinho}
          Utilizamos os melhores ingredientes, dos nacionais aos importados.
        </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-10 items-center justify-start w-auto md:w-full">
          <Button
            className="bg-transparent cursor-pointer font-arboria min-w-[112px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.capsulas}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[30px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.pó}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[108px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.tabletes}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[107px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.líQuidos}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[91px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.softgel}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[83px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.barras}
          </Button>
          <Button
            className="bg-transparent cursor-pointer font-arboria leading-[normal] min-w-[82px] text-blue_gray_900 text-center text-xl tracking-[4.00px]"
            size="sm"
          >
            {props?.gomas}
          </Button>
        </div>
        <div className="gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
          <Img
            src="images/img_rectangle7.png"
            className="h-[400px] md:h-auto object-cover rounded-[10px] w-full"
            alt="rectangleseven"
          />
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Img
              src="images/img_rectangle11.png"
              className="h-[140px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
              alt="rectangleeleven"
            />
            <Img
              src="images/img_rectangle15.png"
              className="h-[244px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[270px] sm:w-full"
              alt="rectanglefiftee"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Img
              src="images/img_rectangle17.png"
              className="h-[244px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
              alt="rectanglesevent"
            />
            <Img
              src="images/img_rectangle12.png"
              className="h-[140px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[270px] sm:w-full"
              alt="rectangletwelve"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Img
              src="images/img_rectangle14.png"
              className="h-[140px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[270px] sm:w-full"
              alt="rectanglefourte"
            />
            <Img
              src="images/img_rectangle13.png"
              className="h-[244px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-[270px] sm:w-full"
              alt="rectanglethirte"
            />
          </div>
        </div>
      </div>
    </>
  );
};

HomeSolues.defaultProps = {
  nossassolues: "Nossas Soluções",
  capsulas: "Capsulas",
  pó: "Pó",
  tabletes: "Tabletes",
  líQuidos: "Líquidos",
  softgel: "Softgel",
  barras: "Barras",
  gomas: "Gomas",
};

export default HomeSolues;
