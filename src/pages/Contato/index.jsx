import React, { useEffect, useState } from "react";

import { Img } from "components";
import ContatoForm from "components/ContatoForm";
import Footer1280Px from "components/Footer1280Px/Footer1280Px";
import "../../styles/font.css"
import HomeFooter1280px from "components/HomeFooter1280px";



const ContatoPage = () => {
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
    {!mobile ? <>
  
          <div className="bg-white_A700 flex flex-col font-arboria items-center justify-end mx-auto pt-[76px] w-full">
            <div className="md:h-[674px] h-[754px] pl-[55px] md:px-5 relative md:right-[100px] w-[1280px] md:w-[39%] sm:w-full">
              <ContatoForm
                className="absolute bg-white_A700 flex flex-col gap-4 items-center justify-start md:left-[200px] left-[4%] sm:p-6 sm:px-0 md:relative sm:right-[] md:right-[] top-[2%] sm:top-[] md:top-[] w-[500px] sm:w-full"
                sejaparceiro="Seja parceiro!"
                nome="Nome:"
                email="E-mail:"
                telefone="Telefone:"
                mensagem="Mensagem:"
                aceitoostermos="Aceito os termos de uso"
                entre_em_contato="Entre em contato!"
              />
              <div className="absolute md:h-[590px] h-[754px] sm:hidden inset-y-[0] my-auto right-[0] md:right-[150px] w-[58%] md:w-full">
                <div className="flex md:flex-col flex-row gap-2 inset-x-[0] items-center justify-start mx-auto md:px-10 sm:px-5 px-[55px] py-6 top-[0] w-auto">
                  <Img
                    src="images/img_logoprincipallaranja_blue_gray_900.svg"
                    className="h-[63px] w-[419px]"
                    alt="logoprincipalla"
                  />
                  <Img
                    src="images/img_frame628103.svg"
                    className="h-[81px] w-[201px]"
                    alt="frame628102"
                  />
                </div>
                <div className="absolute bottom-[0]  md:h-[590px] h-[642px] right-[0] w-[93%] md:w-full">
                  <div className="md:h-[590px] h-[642px] m-auto w-full">
                    <div className="md:h-[562px] h-[642px] m-auto w-full">
                      <div className="absolute bg-deep_orange_A400 bottom-[0] md:flex h-[562px] inset-x-[0] mx-auto w-full"></div>
                      <Img
                        src="images/img_vector_white_a700.png"
                        className="absolute h-[506px] object-cover right-[0] top-[0]"
                        alt="vector"
                      />
                    </div>
                    <div className="absolute h-[590px] left-[3%] top-[1%] w-[76%] sm:w-full">
                      <Img
                        src="images/img_shutterstock1288136518.png"
                        className="h-[590px] m-auto object-cover w-full"
                        alt="shutterstock128"
                      />
                      <div className="absolute flex flex-row items-start justify-start left-[2%] top-[37%] w-[33%]">
                        <div className="bg-yellow_700 h-10 mt-10 w-[72%]"></div>
                        <div className="bg-cyan_A400 h-10 mb-10 w-[29%]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[11%] flex flex-row items-start justify-center right-[5%] w-[34%]">
                    <div className="bg-yellow_700 h-10 mt-10 w-[79%]"></div>
                    <div className="bg-cyan_A400 h-10 mb-10 w-[22%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10"><Footer1280Px/></div>
          

        </>
        
         :
          <>
            <div style={{
              left:'-10px',
              marginTop: '10px',
              marginLeft: '4%',
              padding: '6px',
              paddingRight: '0',
              position: 'relative',
              top: '2%',
              width: '538px',
              maxWidth: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ContatoForm
                sejaparceiro="Seja parceiro!"
                nome="Nome:"
                email="E-mail:"
                telefone="Telefone:"
                mensagem="Mensagem:"
                aceitoostermos="Aceito os termos de uso"
                entre_em_contato="Entre em contato!"
              />
              
            </div>
            <HomeFooter1280px className="bg-blue_gray_900 flex-row flex-wrap items-start justify-between max-w-[1279px] sm:px-5 px-6 py-4 w-full" />
          </>
        }
  

  
      </>
    );

  
};

export default ContatoPage;
