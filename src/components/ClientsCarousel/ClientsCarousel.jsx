import React, { useEffect, useRef, useState } from "react";
import { Img, PagerIndicator, Slider, Text } from "components";
import parceiro1 from "../../assets/images/parceiro1.png";
import parceiro2 from "../../assets/images/parceiro2.png";
import parceiro3 from "../../assets/images/parceiro3.png";
import parceiro4 from "../../assets/images/parceiro4.png";
import parceiro5 from "../../assets/images/parceiro5.png";
import parceiro6 from "../../assets/images/parceiro6.png";
import parceiro7 from "../../assets/images/parceiro7.png";
import parceiro8 from "../../assets/images/parceiro8.png";
import parceiro9 from "../../assets/images/parceiro9.png";
import parceiro10 from "../../assets/images/parceiro10.png";
import parceiro11 from "../../assets/images/parceiro11.png";
import parceiro12 from "../../assets/images/parceiro12.png";
import parceiro13 from "../../assets/images/parceiro13.png";
import parceiro14 from "../../assets/images/parceiro14.png";
import parceiro15 from "../../assets/images/parceiro15.png";
import parceiro16 from "../../assets/images/parceiro16.png";

const ClientsCarousel = () => {
  const clientList = [
    [parceiro1, parceiro2, parceiro3, parceiro4],
    [parceiro5, parceiro6, parceiro7, parceiro8],
    [parceiro9, parceiro10, parceiro11, parceiro12],
    [parceiro13, parceiro14, parceiro15, parceiro16],
  ];

  const sliderRef = useRef(null);
  const [sliderState, setSliderState] = useState(0);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      const nextIndex = (sliderState + 1) % clientList.length;
      setSliderState(nextIndex);
    }, 2000); // Change the duration of autoplay here (in milliseconds)

    return () => {
      clearInterval(autoplayInterval);
    };
  }, [sliderState, clientList.length]);

  return (
    <>
      <div className="flex flex-col md:gap-10 gap-20 items-center justify-center max-w-[1271px] mx-auto md:px-5 py-12 w-full">
        <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
          <Text
            className="font-arboria font-normal text-center text-yellow_700 tracking-[4.00px] w-auto"
            as="h3"
            variant="h3"
          >
            Nossos Clientes
          </Text>
          <Text
            className="font-arboria text-center text-white_A700 w-auto"
            variant="body3"
          >
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit
            amet consectetur.
          </Text>
        </div>

        <Slider
          activeIndex={sliderState}
          onSlideChanged={(e) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          className="inset-0 justify-center sm:justify-end sm:left-[] m-auto sm:right-[] w-full"
          items={clientList.map((group, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-center">
                {group.map((src, subIndex) => (
                  <div key={subIndex} className="mx-2">
                    <Img
                      src={src}
                      className="h-full w-full object-cover"
                      alt={`pote-${subIndex}`}
                    />
                  </div>
                ))}
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
      </div>
        
      <PagerIndicator
        className="flex gap-2 h-4 items-start justify-start w-28"
        count={clientList.length}
        activeCss="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid bg-yellow_700 w-4"
        activeIndex={sliderState}
        inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid w-4"
        sliderRef={sliderRef}
        selectedWrapperCss="inline-block"
        unselectedWrapperCss="inline-block"
      />
      
    </>
  );
};

export default ClientsCarousel;
