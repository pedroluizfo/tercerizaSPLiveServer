import React from "react";

import { Img, List, Text } from "components";

const SobrePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-arboria gap-[34px] items-center justify-start mx-auto pb-20 w-full">
        <div className="bg-blue_gray_900 flex flex-col items-center justify-start p-[21px] sm:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1167px] mb-[25px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-[39px] items-center justify-between pl-4 w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div className="md:relative md:bottom-[-40px] flex flex-col gap-6 h-[388px] md:h-auto items-start justify-start md:left-10 sm:left-[-38px] md:pr-10 sm:pr-50 pr-[47px] py-6 md:right-[] md:top-[15%] md:w-[480px] w-[544px] sm:w-full">
                  <Img
                    src="images/img_logoprincipallaranja.svg"
                    className="h-[38px] w-[272px]"
                    alt="logoprincipalla"
                  />
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="font-medium text-white_A700_02"
                      as="h2"
                      variant="h2"
                    >
                      A expertise da industria.
                    </Text>
                    <div className="font-inter h-[60px] relative w-full">
                    <div className="absolute bg-deep_orange_A400 h-[60px] inset-y-[0] my-auto left-14 right-auto w-[100%]"></div>
                      <Text
                        className="absolute font-normal h-max inset-y-[0] justify-center left-[0] m-auto right-[20%] sm:right-[] text-white_A700_02 w-max"
                        as="h2"
                        variant="h2"
                      >
                        <span className="md:text-[38px] sm:text-4xl text-white_A700_02 text-[40px] font-arboria text-left font-medium">
                          Na{" "}
                        </span>
                        <span className="md:text-[38px] sm:text-4xl text-white_A700_02 text-[40px] font-arboria text-left font-medium">
                          agilidade de uma startup.
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="leading-[33.00px] text-gray_100"
                    as="h4"
                    variant="h4"
                  >
                    <span className="md:text-xl sm:text-lg text-gray_100 text-[22px] font-arboria text-left font-normal">
                      A Terceiriza tem vasto conhecimento do ecossistema da
                      indústria em todos os seus segmentos e{" "}
                    </span>
                    <span className="md:text-xl sm:text-lg text-gray_100 text-[22px] font-arboria text-left font-bold">
                      conta com um time exemplar
                    </span>
                    <span className="md:text-xl sm:text-lg text-gray_100 text-[22px] font-arboria text-left font-normal">
                      <>
                        {" "}
                        para auxiliar a sua empresa desde a concepção até <br />
                        a entrega do produto final.
                      </>
                    </span>
                  </Text>
                </div>
              </div>
              <div className="md:flex md:left-[30%] overflow-x-auto md:relative md:right-[] w-1/2">
                <div className="h-[535px] sm:hidden md:left-[] relative md:right-[] w-full">
                  <div className="absolute h-[535px] sm:hidden inset-y-[0] my-auto right-[0] w-[81%] sm:w-full">
                    <div className="absolute bg-yellow_700 h-[385px] sm:hidden inset-y-[0] my-auto right-[0] w-[84%]"></div>
                    <Img
                      src="images/img_png11.png"
                      className="absolute h-[535px] sm:hidden inset-y-[0] left-[0] my-auto object-cover w-[89%]"
                      alt="pngEleven"
                    />
                  </div>
                  <Img
                    src="images/img_frame628103.svg"
                    className="absolute bottom-[8%] h-[81px] sm:hidden right-[0]"
                    alt="frame628103"
                  />
                  <Img
                    src="images/img_frame628103.svg"
                    className="absolute h-[81px] sm:hidden left-[0] top-[13%]"
                    alt="frame628104"
                  />
                  <div className="absolute bg-cyan_A400 bottom-[1%] h-[26px] sm:hidden left-[11%] rotate-[-180deg] w-[9%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[964px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-start justify-start max-w-[964px] w-full">
            <div className="gap-8 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-auto">
              <div className="bg-blue_gray_900 border-[3px] border-solid border-white_A700 flex flex-col gap-4 sm:h-40 h-[241px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-[10px] w-full">
                <Text
                  className="text-center text-cyan_A400 tracking-[4.00px] w-full"
                  as="h3"
                  variant="h3"
                  style={{ fontSize: '36px' }}
                >
                  Propósito
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[252px] md:max-w-full text-center text-white_A700"
                  as="h5"
                  variant="h5"
                  style={{ fontSize: '20px' }}
                >
                  Levar inovação e sustentabilidade à indústria de saúde e
                  bem-estar brasileira.
                </Text>
              </div>
              <div className="bg-blue_gray_900 border-[3px] border-solid border-white_A700 flex flex-col gap-4 md:h-40 h-[241px] items-center justify-start p-6 sm:px-5 rounded-[10px] w-full">
                <Text
                  className="text-center text-cyan_A400 tracking-[4.00px] w-full"
                  as="h3"
                  variant="h3"
                  style={{ fontSize: '36px' }}

                >
                  Visão
                </Text>
                <Text
                  className="leading-[27.00px] sm:m-[] md:m-[] max-w-[252px] md:max-w-full md:mb-[] md:mt-[-10px] text-center text-white_A700 mt-[-10px]"
                  as="h5"
                  variant="h5"
                  style={{ fontSize: '20px' }}
                >
                  Ser líder no desenvolvimento de soluções em saúde e bem-estar,
                  integrado a ciência e a tecnologia às tendências do mercado.
                </Text>
              </div>
              <div className="bg-blue_gray_900 border-[3px] border-solid border-white_A700 flex flex-col gap-4 sm:h-40 h-[241px] md:h-auto items-center justify-start p-6 sm:px-5 rounded-[10px] w-full">
                <Text
                  className="text-center text-cyan_A400 tracking-[4.00px] w-full"
                  as="h3"
                  variant="h3"
                  style={{ fontSize: '36px' }}

                >
                  Missão
                </Text>
                <Text
                  className="leading-[27.00px] max-w-[252px] md:max-w-full text-center text-white_A700"
                  as="h5"
                  variant="h5"
                  style={{ fontSize: '20px' }}
                >
                  Apoiar o desenvolvimento de produtos de saúde e bem-estar, com
                  foco em inovação e sustentabilidade.
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="sm:h-[785px] h-[788px] md:h-[957px] md:px-5 relative w-full">
            <div className="flex flex-col gap-8 h-full justify-start ml-auto mr-8 mt-[22px] w-[87%]">
              <Text
                className="md:ml-[0] ml-[434px] text-deep_orange_A400"
                as="h1"
                variant="h1"
              >
                Valores
              </Text>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="md:absolute flex flex-col items-center justify-start md:left-[10%] md:right-[]">
                  <div className="bg-white_A700 flex flex-col items-center justify-start p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-deep_orange_A400 w-full"
                          as="h3"
                          variant="h3"
                        >
                          Sustentabilidade:
                        </Text>
                      </div>
                      <Text
                        className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900"
                        as="h5"
                        variant="h5"
                      >
                        Nossas soluções buscam preservar os recursos naturais e
                        reduzir impactos ambientais. Com responsabilidade social
                        e olhar para o futuro, a sustentabilidade é o valor
                        central da Terceriza.
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex-col sm:gap-5 grid items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start my-0 p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-deep_orange_A400 w-full"
                            as="h3"
                            variant="h3"
                          >
                            Agilidade:
                          </Text>
                        </div>
                        <Text
                          className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900"
                          as="h5"
                          variant="h5"
                        >
                          Na Terceriza, a agilidade é parte integrante de nossa
                          essência. Compreendemos a velocidade das mudanças no
                          mercado e nos emprenhamos em simplificar o caminho
                          para que você possa alcançar seus objetivos com mais
                          rapidez.
                        </Text>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start my-0 p-6 sm:px-5 rounded shadow-bs w-[530px] sm:w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-deep_orange_A400 w-full"
                            as="h3"
                            variant="h3"
                          >
                            Transformação:
                          </Text>
                        </div>
                        <Text
                          className="leading-[27.00px] max-w-[482px] md:max-w-full text-blue_gray_900"
                          as="h5"
                          variant="h5"
                        >
                          A Terceriza se compromete a inspirar e motivar
                          mudanças de alto impacto através de soluções
                          inovadoras e eficazes. Queremos promover a
                          transformação no segmento de saudabilidade e wellness.
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <Img
                  src="images/img_vector.svg"
                  className="h-[594px] md:hidden"
                  alt="vector"
                />
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[50px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group7.svg')" }}
            >
              <Img
                src="images/img_capsulagel1.png"
                className="md:absolute md:bottom-[] h-[589px] md:h-auto sm:hidden my-12 object-cover md:right-0.5 md:top-[1%] w-[38%]"
                alt="capsulagelOne"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SobrePage;
