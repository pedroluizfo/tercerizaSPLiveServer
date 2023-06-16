import React from "react";
import {
    Button,
    Img,
    PagerIndicator,
    Slider,
    Text,
} from "components";
import HomeColumnconcepo from "components/HomeColumnconcepo";
const boards = [
    {
      concepo: "Concepção",
      loremipsumdolor_One:
        "Fazemos uma reunião para entender suas necessidades, discutir ideias e a viabilidade do projeto. ",
      loremipsumdolor_Three: ""
    },
    {
      concepo: "Prototipação",
      loremipsumdolor_One:
        "Realizamos a pesquisa do produto, incluindo análise de ingredientes, testes laboratoriais e garantia de adequação às regulamentações da ANVISA.",
      loremipsumdolor_Three: ""
    },
    {
      concepo: "Contrato",
      loremipsumdolor_One:
        " Estabelecemos um prazo de entrega e alinhamos expectativas, considerando os resultados dos testes realizados.",
      loremipsumdolor_Three: ""
    },
    {
      concepo: "Produção",
      loremipsumdolor_One: "O produto é inserido no processo de produção da planta industrial.",
      loremipsumdolor_Three: ""
    },
    {
        concepo: "Rotulagem",
        loremipsumdolor_One:
          "Nossa equipe de especialistas desenvolvem o rótulo do produto, tudo personalizado.",
        loremipsumdolor_Three: ""
      },
    {
      concepo: "Entrega",
      loremipsumdolor_One:
        "Por fim, entregamos o produto finalizado em qualquer lugar do Brasil.",
      loremipsumdolor_Three: ""
    },
    
  ];

const HomeCarousel = () => {
    const sliderRef = React.useRef(null);
    const [sliderState, setsliderState] = React.useState(0);


    const handleSliderStateFoward = () => {
        let position = sliderState + 1;
        if (position > 6) {
            position = 0;
        }
        setsliderState(position);
        sliderRef.current.slideTo(position);
    }


    const handleSliderStateBackward = () => {
        let position = sliderState - 1;
        if (position < 0) {
            position = 6;
        }
        setsliderState(position);
        sliderRef.current.slideTo(position);
    }

    return (
        <>

            <div className="bg-blue_gray_900 flex flex-col md:gap-10 gap-20 sm:-mt-8 items-center justify-start max-w-[1279px] pb-24 pt-12 sm:px-5 px-[55px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-auto md:w-full">
                    <Text
                        className="font-arboria font-normal text-center text-yellow_700 tracking-[4.00px] w-auto"
                        as="h3"
                        variant="h3"
                    >
                        Etapas
                    </Text>
                </div>

                <div className="flex flex-col gap-6 items-center justify-start max-w-[1140px] mx-auto w-full">
                    <Slider
                        activeIndex={sliderState}
                        responsive={{
                            0: { items: 1 },
                            550: { items: 1 },
                            1050: { items: 1 },
                        }}
                        onSlideChanged={(e) => {
                            setsliderState(e?.item);
                        }}
                        ref={sliderRef}
                        className="w-full"
                        items={boards.map((board,index) => (

                            <React.Fragment key={index}>
                                <div className="flex flex-col items-center justify-start sm:w-10px mx-2.5">
                                    <div className="flex md:flex-col flex-row gap-8 items-center justify-center w-full">
                                        <div className="flex flex-1 flex-col items-start justify-start max-w-[964px] w-full">
                                            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start">
                                                <HomeColumnconcepo
                                                    className="bg-blue_gray_900 border-[3px] border-solid  border-yellow_700 flex flex-col gap-4 items-center justify-center p-6 sm:px-5  rounded-[10px] w-full"
                                                    one={index+1}
                                                    concepo={board.concepo}
                                                    loremipsumdolor_One={board.loremipsumdolor_One}
                                                />
                                            </div>
                                        </div>

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
                </div>


                <div className="flex space-x-5">
                    <Button
                        handlePosition={handleSliderStateBackward}
                        className="flex h-14 items-center justify-center rotate-[180deg] rounded-[50%] w-14"
                        size="mdIcn"
                        variant="icbOutlineYellow700"

                    >
                        <Img
                            src="images/img_arrowright_yellow_700_56x56.svg"
                            className="h-7"
                            alt="arrowrightone"
                        />
                    </Button>
                    <PagerIndicator
                        className="flex mt-5 gap-2 h-4 items-start justify-start w-40"
                        count={7}
                        activeCss="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid bg-yellow_700 w-4"
                        activeIndex={sliderState}
                        inactiveCss="inline-block cursor-pointer rounded-[50%] h-4 border-yellow_700 border border-solid w-4"
                        sliderRef={sliderRef}
                        selectedWrapperCss="inline-block"
                        unselectedWrapperCss="inline-block"
                    />
                    <Button
                        handlePosition={handleSliderStateFoward}
                        className="flex h-14 items-center justify-center rounded-[50%] w-14"
                        size="mdIcn"
                        variant="icbOutlineYellow700"
                    >
                        <Img
                            src="images/img_arrowright_yellow_700_56x56.svg"
                            className="h-7"
                            alt="arrowrightone"
                        />
                    </Button>
                </div>
            </div>

        </>
    )
}



export default HomeCarousel;