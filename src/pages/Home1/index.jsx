import React from "react";

import {
  Button,
  Img,
  Line,
  Text,
} from "components";
import HomeColumnfour from "components/HomeColumnfour";
import HomeEnvases from "components/HomeEnvases";
import HomeFooter1280px from "components/HomeFooter1280px";
import HomeSolues from "components/HomeSolues";
import "../../styles/font.css"
import HomeCarousel from "components/HomeCarousel/HomeCarousel";
import ClientsCarousel from "components/ClientsCarousel/ClientsCarousel";
import faq from "react-faq-component"


const Home1Page = () => {


  return (
    <>
      <div className="bg-blue_gray_900 flex flex-col font-arboria items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-start mt-8 w-auto md:w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 h-[784px] md:h-auto items-end justify-start max-w-[1279px] md:pl-10 sm:pl-5 pl-[55px] py-12 w-full">
            <div className="flex md:flex-1 flex-col gap-[52px] justify-start w-[46%] md:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col md:gap-10 gap-20 items-start justify-start w-auto sm:w-full">
                  <Img
                    src="images/img_logoprincipallaranja.svg"
                    className="h-10 w-[262px]"
                    alt="logoprincipalla"
                  />
                  <Text
                    className="font-arboria leading-[90.00px] text-white_A700 tracking-[4.00px]"
                    as="h1"
                    variant="h1"
                  >
                    <>
                      Transforme <br />
                      sua ideia em <br />
                      realidade.
                    </>
                  </Text>
                </div>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[308px]"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      className="mb-px ml-2"
                      alt="arrow_right"
                    />
                  }
                  shape="CircleBorder28"
                  size="lg"
                  variant="OutlineCyanA400"
                >
                  <div className="font-normal text-cyan_A400 text-left text-xl tracking-[4.00px]">
                    Seja um parceiro
                  </div>
                </Button>
              </div>
              <Img
                src="images/img_group1.svg"
                className="h-[120px] md:ml-[0] ml-[132px]"
                alt="groupone"
              />
            </div>
            <div className="flex flex-col relative w-1/2 md:w-full">
              <div className="md:h-[623px] h-[647px] mx-auto w-full">
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-4 w-[99%]"
                  style={{ backgroundImage: "url('images/img_vector.png')" }}
                >
                  <div className="bg-yellow_700 h-10 mb-[551px] mr-[31px] w-[32%]"></div>
                </div>
                <Img
                  src="images/img_rectangle2.png"
                  className="absolute h-10 object-cover right-[0] top-[0] w-[8%]"
                  alt="rectangletwo"
                />
                <Img
                  src="images/img_capsuladurapote.png"
                  className="absolute bottom-[1%] h-[551px] left-[0] object-cover w-3/4"
                  alt="capsuladurapote"
                />
              </div>
              <Img
                src="images/img_group1_deep_orange_a400.png"
                className="h-14 ml-auto mt-[-14.43px] object-cover z-[1]"
                alt="grouponeone"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[55px] py-12 w-auto md:w-full">
            <div className="bg-blue_gray_900 flex md:flex-col flex-row md:gap-5 h-[357px] md:h-auto items-start justify-start max-w-[1170px] mx-auto md:px-5 rounded-[10px] w-full">
              <div className="h-[357px] relative w-[49%] md:w-full">
                <Img
                  src="images/img_rectangle3560.png"
                  className="h-[357px] m-auto object-cover rounded-[10px] w-full"
                  alt="rectangle3560"
                />
                <div className="absolute bottom-[13%] flex flex-col md:gap-10 gap-[146px] justify-start right-[11%] w-[19%]">
                  <Img
                    src="images/img_logoreduzida.svg"
                    className="h-[50px]"
                    alt="logoreduzida"
                  />
                  <div className="bg-deep_orange_A400 h-8 md:ml-[0] ml-[21px] mr-[52px] w-8"></div>
                </div>
                <div className="absolute bg-yellow_700 bottom-[4%] h-[34px] right-[0] w-[21%]"></div>
                <Img
                  src="images/img_group627393.svg"
                  className="absolute h-[69px] left-[0] top-[4%]"
                  alt="group627393"
                />
              </div>
              <div className="bg-blue_gray_900 flex md:flex-1 mt-5 flex-col gap-6 h-[357px] md:h-auto items-start justify-start sm:px-5 px-8 py-12 rounded-br-[10px] rounded-tr-[10px] w-auto md:w-full">
                <div className="h-[167px] md:h-[99px] relative w-[542px]  sm:w-full">
                
                  <div className="absolute bg-blue_gray_900 flex flex-col font-arboria h-max inset-[0] items-center justify-end m-auto w-auto">
                    
                    <Text
                      className="md:absolute  leading-[33.00px] max-w-[542px] md:max-w-full text-white_A700 md:top-[1%] sm:top-px tracking-[4.00px]"
                      variant="body1"
                    >
                      Somos especialistas em tirar projetos de saudabilidade e suplementação do papel.
                    </Text>
                  </div>
                  <Text
                    style={{ fontSize: '40px' }}
                    className="absolute font-arboria font-normal -mt-10 left-[0] text-deep_orange_A400  tracking-[4.00px]"
                    as="h3"
                    variant="h3"
                  >
                    Sobre nós
                  </Text>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-3 sm:relative sm:top-[15px] w-auto">
                  <a href="/sobre">
                    <Button
                      className="text-cyan_A400 tracking-[4.00px] w-auto"
                      variant="body2"
                    >
                      Saiba mais
                    </Button>
                  </a>
                  <Img
                    src="images/img_arrowright.svg"
                    className="h-6 w-6"
                    alt="arrowright"
                  />
                </div>
              </div>

            </div>
          </div>




          <HomeCarousel />



          <HomeSolues
            className="bg-white_A700 flex flex-col gap-12 items-center justify-start max-w-[1279px] md:px-10 sm:px-5 px-[55px] py-12 w-full"
            nossassolues="Nossas Soluções"
            capsulas="Capsulas"
            pó="Pó"
            tabletes="Tabletes"
            líQuidos="Líquidos"
            softgel="Softgel"
            barras="Barras"
            gomas="Gomas"
          />
          <HomeEnvases
            className="bg-gray_100 flex flex-col gap-12 sm:h-[900px] items-center justify-center max-w-[1279px] md:px-10 sm:px-5 px-[55px] py-12 w-full"
            envases="Envases"
            utilizamosingre_One="Utilizamos ingredientes nacionais e importados, com embalagens inovadoras e diversos tipos de finalização."
            buttonoutlineve="Eusou um botão"
          />
          

          <ClientsCarousel/>    

          <div className="flex flex-col gap-12 items-center justify-start max-w-[1279px] pb-24 pt-12 md:px-10 sm:px-5 px-[55px] w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="font-normal text-yellow_700 tracking-[4.00px] w-auto"
                as="h3"
                variant="h3"
              >
                Equipe
              </Text>
            </div>
            <div className="md:gap-10 gap-20 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center max-w-[1170px] min-h-[auto] mx-auto w-full">
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[6%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body5"
                  >
                    Bruno Ladeira
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[6%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body5"
                  >
                    Luiz Henrique
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[6%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body5"
                  >
                    Erik Andrade
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[4%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[3.16px] w-auto"
                    variant="body5"
                  >
                    Luiz Paulo Parente
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[6%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body5"
                  >
                    Amanda Gomes
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
              <div className="md:h-[259px] h-[300px] relative w-full">
                <div className="md:h-[259px] h-[299px] m-auto w-full">
                  <div className="md:h-[165px] h-[299px] m-auto w-full">
                    <div className="absolute bg-deep_orange_A400 bottom-[0] h-[164px] left-[0] rounded-[5px] w-[69%]"></div>
                    <div className="absolute bg-yellow_700 h-[165px] right-[0] rounded-[5px] top-[0] w-[69%]"></div>
                  </div>
                  <Img
                    src="images/img_rectangle7_259x221.png"
                    className="absolute h-[259px] inset-[0] justify-center m-auto object-cover rounded-[5px] w-[85%]"
                    alt="rectangleseven"
                  />
                </div>
                <div className="absolute bg-blue_gray_900_99 bottom-[6%] flex flex-col gap-[3.29px] inset-x-[0] items-start justify-center mx-auto p-[19.71px] rounded-bl-[5px] rounded-br-[5px] w-[221px]">
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body5"
                  >
                    Gabriel Naves
                  </Text>
                  <Text
                    className="font-arboria text-white_A700_02 tracking-[2.59px] w-auto"
                    variant="body6"
                  >
                    Lorem ipsum
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_100 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[55px] py-12 w-auto md:w-full">
            <div className="flex flex-col items-center justify-start max-w-[1170px] mx-auto w-full">
              <div className="md:h-[366px] h-[367px] md:pl-10 sm:pl-5 pl-[55px] relative w-[1170px] md:w-full">
                <div className="absolute bg-black_900 flex flex-col md:h-auto h-full inset-[0] items-center justify-center m-auto max-w-[1170px] md:pl-10 sm:pl-5 pl-[55px] rounded-[10px] w-full">
                  <div className="flex flex-col gap-8 items-start justify-start w-[378px] sm:w-full">
                    <Text
                      style={{ fontSize: '42px' }}
                      className="absolute flex font-arboria sm:hidden leading-[70.00px] md:left-[1%] left-[15%] max-w-[378px] md:max-w-full text-white_A700 top-[10%] tracking-[4.00px]"
                      as="h2"
                      variant="h2"
                    >
                      Venha fazer parte disso!
                    </Text>
                    <Button
                      className="absolute cursor-pointer flex sm:hidden items-center justify-center left-[15%] min-w-[308px]"
                      rightIcon={
                        <Img
                          src="images/img_arrowright.svg"
                          className="mb-px ml-2"
                          alt="arrow_right"
                        />
                      }
                      shape="CircleBorder28"
                      size="lg"
                      variant="OutlineCyanA400"
                    >
                      <div className="font-arboria font-normal sm:hidden text-cyan_A400 text-left text-xl tracking-[4.00px]">
                        Seja um parceiro
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="absolute md:h-[366px] h-[367px] inset-y-[0] my-auto right-[0] w-2/5 sm:w-full">
                  <div className="absolute md:h-[366px] h-[367px] inset-y-[0] my-auto right-[0] w-[93%] sm:w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[26px] sm:px-5 w-[78%]"
                      style={{
                        backgroundImage: "url('images/img_group9.svg')",
                      }}
                    >
                      <Img
                        src="images/img_bookmark.svg"
                        className="h-10 my-[137px]"
                        alt="bookmark"
                      />
                    </div>
                    <Img
                      src="images/img_group1.svg"
                      className="absolute bottom-[3%] h-[60px] right-[0]"
                      alt="grouponetwo"
                    />
                    <Img
                      src="images/img_group2_deep_orange_a400.svg"
                      className="absolute h-10 left-[0] top-[0]"
                      alt="grouptwo"
                    />
                  </div>
                  <Img
                    src="images/img_shutterstock2128064999.png"
                    className="absolute bottom-[0] h-[350px] left-[0] object-cover w-[53%]"
                    alt="shutterstock212"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray_900 flex flex-col gap-12 items-center justify-start md:px-10 sm:px-5 px-[55px] py-12 w-auto md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="font-normal text-yellow_700 tracking-[4.00px] w-auto"
                as="h3"
                variant="h3"
              >
                FAQ
              </Text>
            </div>
            <faq></faq>
            <div className="flex flex-col font-arboria gap-4 items-center justify-start max-w-[1170px] mx-auto w-full">
              <HomeColumnfour
                className="bg-blue_gray_900 flex flex-col gap-4 items-start justify-start max-w-[1170px] w-full"
                comopossomecert="Quem faz o regulatório dos produtos?"
                description="Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna."
                description_One="Lorem ipsum dolor sit amet consectetur. Adipiscing justo nunc mattis mus turpis urna purus. Eu eget lectus aenean tincidunt vulputate et montes blandit. Proin turpis adipiscing mollis elementum. Sed enim et commodo feugiat magna."
              />
              <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
              <div className="bg-blue_gray_900 flex sm:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
                <Text className="text-white_A700 w-auto" as="h6" variant="h6">
                  Preciso me preocupar com marca ou patente?
                </Text>
                <Img
                  src="images/img_chevronright_white_a700.svg"
                  className="h-12 w-12"
                  alt="chevronrightone"
                />
              </div>
              <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
              <div className="bg-blue_gray_900 flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
                <Text className="text-white_A700 w-auto" as="h6" variant="h6">
                  Como posso me certificar que meu produto tem os melhores
                  ingredientes?
                </Text>
                <Img
                  src="images/img_chevronright_white_a700.svg"
                  className="h-12 w-12"
                  alt="chevronrighttwo"
                />
              </div>
              <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
              <div className="bg-blue_gray_900 flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
                <Text className="text-white_A700 w-auto" as="h6" variant="h6">
                  Qual é a empresa que fornecerá os ingredientes e fará a
                  formulação dos meus produtos?
                </Text>
                <Img
                  src="images/img_chevronright_white_a700.svg"
                  className="h-12 w-12"
                  alt="chevronrightthr"
                />
              </div>
              <Line className="bg-yellow_700_3f h-0.5 rotate-[-180deg] w-[52%]" />
              <div className="bg-blue_gray_900 flex md:flex-col flex-row gap-4 items-start justify-start max-w-[1170px] sm:px-5 px-8 py-4 w-full">
                <Text className="text-white_A700 w-auto" as="h6" variant="h6">
                  A terceiriza faz a logística de entrega do produto?
                </Text>
                <Img
                  src="images/img_chevronright_white_a700.svg"
                  className="h-12 w-12"
                  alt="chevronrightfou"
                />
              </div>
            </div>
          </div>
          <HomeFooter1280px className="bg-blue_gray_900 flex-row flex-wrap hidden items-start justify-between max-w-[1279px] sm:px-5 px-6 py-4 w-full" />
        </div>
      </div>
    </>
  );
};

export default Home1Page;
