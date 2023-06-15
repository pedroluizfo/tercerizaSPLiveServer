import React, { useEffect, useState } from "react";
import { Img, List, Text } from "components";
import HomeFooter1280px from "components/HomeFooter1280px";
import "../../styles/font.css"


const SobrePage = () => {
  const [mobile, setMobile] = useState(false)
  const handleResize = () => {
    setMobile(window.innerWidth < 800);
    
  };
  

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>

      <div className="bg-white_A700 flex flex-col font-arboria gap-8 items-center justify-end mx-auto pt-[71px] w-full">
        <div className="sm:absolute h-[535px]  md:px-5  relative sm:top-[0px] sm:w-[] w-full">
          <div className="absolute bg-blue_gray_900 bottom-[0] h-[535px]  inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex flex-col h-full  inset-[0] items-center justify-center m-auto w-[82%]">
            <div className="h-[535px] sm:top-[20px] relative w-[1046px] md:w-full">
              <div className="absolute flex flex-col gap-6 h-max inset-y-[0] items-start justify-start left-[0] my-auto py-6 w-auto">
                <Img
                  src="images/img_logoprincipallaranja.svg"
                  className="h-[38px]  w-[272px]"
                  alt="logoprincipalla"
                />
                <div className="flex flex-col items-start justify-start w-[93%] md:w-full">
                  <Text
                    className="font-medium  text-white_A700_02"
                    as="h4"
                    variant="h4"
                  >
                    A expertise da industria.
                  </Text>
                  <div className="font-inter h-[60px] sm:justify-start relative right-[60px] sm:ml-9 w-full">
                    <div className="absolute bg-deep_orange_A400 h-[60px] sm:mt-[1px] inset-y-[0] sm:left-[6%] my-auto right-[0] sm:w-[100%] sm:h-[140%] w-[90%]">
                    <span className="md:text-[35px] sm:text-[35px] text-white_A700_02 text-[35px] font-arboria text-left">
                        Na agilidade de uma startup.
                      </span>
                    </div>
                    <Text
                      className="absolute bottom-[0] h-max justify-center left-[0] sm:left-[22%] m-auto md:right-[20%] right-[30%] sm:right-[] text-white_A700_02 w-max "
                      as="h4"
                      variant="h4"
                    >
                      
                     
                    </Text>
                  </div>
                </div>
                <Text
                   className="leading-[33.00px] text-gray_100 relative z-10" 
                   variant="body1"
                >
                  <span className="md:text-xl sm:text-lg text-gray_100 text-[22px] font-arboria text-left font-normal">
                    A Terceiriza tem vasto conhecimento do ecossistema <br /> 
                    da indústria em todos os seus segmentos e conta com um <br />
                    time exemplar para auxiliar a sua empresa desde a <br />
                    concepção até a entrega do produto final.
                  </span>
                </Text>
              </div>
              <div className="absolute sm:flex h-[535px] inset-y-[0] my-auto right-[0] w-[56%] sm:w-full">
                <div className="absolute h-[535px]  inset-y-[0] my-auto right-[2%] w-[79%] sm:w-full">
                  <div className="absolute bg-yellow_700 sm:hidden h-[385px] md:hidden inset-y-[0] my-auto right-[0] w-[84%]"></div>
                  <Img
                    src="images/img_png11.png"
                    className="absolute h-[535px] sm:hidden md:hidden md:hidden inset-y-[0] left-[0] my-auto object-cover w-[89%]"
                    alt="pngeleven"
                  />
                </div>
                <Img
                  src="images/img_frame628103.svg"
                  className="absolute bottom-[11%] sm:hidden md:hidden h-[81px] right-[0]"
                  alt="frame628103"
                />
                <Img
                  src="images/img_frame628103.svg"
                  className="absolute sm:flex h-[81px] sm:hidden md:hidden left-[0] top-[20%]"
                  alt="frame628104"
                />
                <div className="absolute bg-cyan_A400 bottom-[5%] h-[26px] sm:hidden left-[18%] rotate-[-180deg] w-[9%]"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex md:h-[1053px] h-[1152px] sm:h-[] sm:p-[] sm:pt-[] md:px-5 relative sm:top-[630px] w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-auto">
            <div className="flex flex-col items-start justify-start max-w-[964px] w-full">
              <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto">
                <div className="sm:absolute bg-blue_gray_900 border-[3px] sm:h-[145px] md:h-[170px] border-solid border-white_A700 sm:bottom-[] flex flex-col gap-4 sm:h-[120px] h-[241px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="font-bold text-center text-cyan_A400 sm:text-xl tracking-[4.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    Propósito
                  </Text>
                  <Text
                    className="leading-[27.00px] max-w-[252px] md:max-w-full text-center text-white_A700 sm:text-xs"
                    variant="body3"
                  >
                    Levar inovação e sustentabilidade à indústria de saúde e
                    bem-estar brasileira.
                  </Text>
                </div>
                <div className="sm:absolute bg-blue_gray_900 border-[3px] sm:h-[145px] md:h-[200px] border-solid border-white_A700 sm:bottom-px flex flex-col sm:font-fontfamily gap-4 items-center justify-start p-6 sm:px-5 rounded-[10px] sm:text-[] sm:top-[] w-full">
                  <Text
                    className="font-bold text-center text-cyan_A400 sm:text-xl tracking-[4.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    Visão
                  </Text>
                  <Text
                    className="leading-[27.00px] max-w-[252px] md:max-w-full text-center text-white_A700 sm:text-xs"
                    variant="body3"
                  >
                    Ser líder no desenvolvimento de soluções em saúde e
                    bem-estar, integrado a ciência e a tecnologia às tendências
                    do mercado.
                  </Text>
                </div>
                <div className="sm:absolute bg-blue_gray_900 border-[3px] sm:h-[145px] md:top-[0px] md:h-[170px] border-solid border-white_A700 md:bottom-[45px] flex flex-col gap-2 sm:h-[110px] h-[241px] md:h-auto items-center justify-start p-6 sm:px-5 md:relative rounded-[10px] sm:top-[146px] md:top-[] w-full">
                  <Text
                    className="font-bold text-center text-cyan_A400 sm:text-xl tracking-[4.00px] w-full"
                    as="h5"
                    variant="h5"
                  >
                    Missão
                  </Text>
                  <Text
                    className="leading-[27.00px] max-w-[252px] md:max-w-full text-center text-white_A700 sm:text-xs"
                    variant="body3"
                  >
                    Apoiar o desenvolvimento de produtos de saúde e bem-estar,
                    com foco em inovação e sustentabilidade.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[8%] sm:bottom-[] sm:flex md:h-[785px] md:top-[265px] h-[788px] inset-x-[0] mx-auto sm:top-[120px] sm:w-3/5 w-full">
            <Img
              src="images/img_vector.png"
              className="absolute bottom-[9%] h-[594px] md:hidden object-cover right-[0]"
              alt="vector"
            />
            <div className="flex flex-col gap-[31px] h-full justify-start sm:m-[] md:z-10 ml-[125px] sm:ml-px mt-[22px] md:relative w-[47%]">
             
              <div  style={{zIndex:1}} className="absolute md:bottom-px flex flex-col items-center sm:top-[150px] justify-start md:left-[-20px] mr-[69px] md:top-[65px] w-[89%] md:w-full">
                
                <List
                  className="absolute md:bottom-px flex-col sm:gap-5 grid items-center md:-ml-8 md:top-[65px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-col ml-6 md:ml-5 gap-4 items-start justify-start w-full">
                  <div className="flex flex-col items-start  justify-start w-full">
                        <Text
                          className="font-bold text-deep_orange_A400 w-full"
                          as="h5"
                          variant="h5"
                        >
                          <div className="mb-10 md:mb-0 md:mt-8 ">
                             Valores:
                          </div>
                        </Text>
                      </div>
                  </div>
                  
                  <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start my-0 p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                  
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="font-bold text-deep_orange_A400 w-full"
                          as="h5"
                          variant="h5"
                        >
                        Sustentabilidade:
                        </Text>
                      </div>
                      <Text
                        className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900"
                        variant="body3"
                      >
                        Nossas soluções buscam preservar os recursos naturais e
                      reduzir impactos ambientais. Com responsabilidade social e
                      olhar para o futuro, a sustentabilidade é o valor central
                      da Terceriza.
                      </Text>
                    </div>
                  </div>

                  <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start my-0 p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="font-bold text-deep_orange_A400 w-full"
                          as="h5"
                          variant="h5"
                        >
                          Agilidade:
                        </Text>
                      </div>
                      <Text
                        className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900"
                        variant="body3"
                      >
                        Na Terceriza, a agilidade é parte integrante de nossa
                        essência. Compreendemos a velocidade das mudanças no
                        mercado e nos emprenhamos em simplificar o caminho para
                        que você possa alcançar seus objetivos com mais rapidez.
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start my-0 p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="font-bold text-deep_orange_A400 w-full"
                          as="h5"
                          variant="h5"
                        >
                          Transformação:
                        </Text>
                      </div>
                      <Text
                        className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900 sm:w-[180%]"
                        variant="body3"
                      >
                        A Terceriza se compromete a inspirar e motivar mudanças
                        de alto impacto através de soluções inovadoras e
                        eficazes. Queremos promover a transformação no segmento
                        de saudabilidade e wellness.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full  sm:hidden inset-[0] items-end justify-center m-auto p-[98px] md:px-10 sm:px-5 w-full"
              style={{backgroundImage: "url('images/img_group71.png')" }}
            >
              <Img
                src="images/img_capsulagel1.png"
                className="h-[589px] md:h-auto md:hidden mr-[25px] object-cover w-[41%]"
                alt="capsulagelone"
              />

            </div>

          </div>

        </div>
        <HomeFooter1280px className="bg-blue_gray_900 flex-row flex-wrap items-start md:mt-20 justify-between max-w-[3079px] sm:px-5 px-6 py-4 w-full sm:hidden" />

      </div>

    </>
    
  );
};

export default SobrePage;
