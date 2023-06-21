import React, { useEffect, useRef, useState } from "react";
import { Img, PagerIndicator, Slider, Text } from "components";
import parceiro1 from "../../assets/images/parceiro1.svg";
import parceiro2 from "../../assets/images/parceiro2.svg";
import parceiro3 from "../../assets/images/parceiro3.svg";
import parceiro4 from "../../assets/images/parceiro4.svg";
import parceiro5 from "../../assets/images/parceiro5.svg";
import parceiro6 from "../../assets/images/parceiro6.svg";


const ClientsCarousel = () => {
  const clientList = [
    [parceiro1, parceiro6, parceiro3],
    [parceiro4, parceiro5, parceiro2],
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
        
      
      
    </>
  );
};

export default ClientsCarousel;
