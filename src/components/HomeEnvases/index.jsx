import React from "react";
import { Button, Img, PagerIndicator, Slider, Text } from "components";
import "../../styles/font.css";
import pote1 from "../../assets/images/pote1.png";
import pote2 from "../../assets/images/pote2.png";
import pote3 from "../../assets/images/pote3.png";
import pote4 from "../../assets/images/pote4.png";
import pote5 from "../../assets/images/pote5.png";
import pote6 from "../../assets/images/pote6.png";
import pote7 from "../../assets/images/pote7.png";

const HomeEnvases = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setSliderState] = React.useState(0);

  const handleSliderStateFoward = () => {
    let position = sliderState + 1;
    if (position > 6) {
      position = 0;
    }

    setSliderState(position);
    sliderRef.current.slideTo(position);
  }


  const handleSliderStateBackward = () => {
    let position = sliderState - 1;
    if (position < 0) {
      position = 6;
    }

    setSliderState(position);
    sliderRef.current.slideTo(position);
  }

  const imageSources = [
    pote1,
    pote2,
    pote3,
    pote4,
    pote5,
    pote6,
    pote7
  ];

  return (
    <>
      <div className={props.className}>
        <Text
          className="font-arboria text-deep_orange_A400 tracking-[4.00px] w-auto"
          as="h3"
          variant="h3"
        >
          Envases
        </Text>
        <Text
          className="font-arboria -my-8  text-center text-blue_gray_900 w-auto"
          variant="body3"
        >
          Nossas embalagens são inovadoras e possuímos diversos tipos de finalização.

        </Text>

        <Slider
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          className="w-full mt-12"
          items={imageSources.map((src, index) => (
            <React.Fragment key={src}>

              <div className="flex flex-col items-center justify-start">
                <div

                >
                  <Img
                    src={src}
                    className="h-full w-full object-cover"
                    alt={`pote-${index}`}
                  />


                </div>


              </div>
            </React.Fragment>
          ))}
          renderDotsItem={({ isActive }) => {
            if (isActive) {
              return (
                <div className="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid bg-yellow_700 w-4" />
              );
            }
            return (
              <div
                className="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid w-4"
                role="button"
                tabIndex={0}
              />
            );
          }}
        />

        <div className="flex space-x-5">
          <Button
            handlePosition={handleSliderStateBackward}
            className="flex h-14 items-center justify-center rotate-[180deg] rounded-[50%] w-14"
            size="mdIcn"
            variant="icbOutlineDeeporangeA400"
          >
            <Img
              src="images/img_arrowright_deep_orange_a400.svg"
              className="h-7"
              alt="arrowrighttwo"
            />
          </Button>
          <PagerIndicator
            className="mt-5 flex gap-2 h-4 items-start justify-start sm:relative sm:top-[] w-40"
            count={7}
            activeCss="inline-block cursor-pointer rounded-[50%] h-4 bg-deep_orange_A400 w-4"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 border-deep_orange_A400 border border-solid bg-gray_100 w-4"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block"
            unselectedWrapperCss="inline-block"
          />
          <Button
            handlePosition={handleSliderStateFoward}
            className="flex h-14 items-center justify-center rounded-[50%] w-14"
            size="mdIcn"
            variant="icbOutlineDeeporangeA400"
          >
            <Img
              src="images/img_arrowright_deep_orange_a400.svg"
              className="h-7"
              alt="arrowrighttwo"
            />
          </Button>
        </div>
      </div>


    </>
  );
};

HomeEnvases.defaultProps = {
  envases: "Envases",
  utilizamosingre_One:
    "Utilizamos ingredientes nacionais e importados, com embalagens inovadoras e diversos tipos de finalização.",
};

export default HomeEnvases;
