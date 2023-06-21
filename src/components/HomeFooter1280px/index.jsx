import React from "react";

import { Button, Img ,Text} from "components";

import "../../styles/font.css"

function handleClick() {
  window.open('https://www.instagram.com/terceiriza_sp/', '_blank');
}

function handlewpp() {
  window.open('https://api.whatsapp.com/send?phone=5511932001414', '_blank');
}


const HomeFooter1280px = (props) => {
  return (
    <>
      <div className={props.className}>
      <div className="flex flex-row justify-start w-auto" >
  <Img
    src="images/img_logoprincipallaranja.svg"
    className="h-8 w-[197px]"
    alt="logoprincipalla_One"
    style={{ position: 'absolute'}}
  />
</div>

        <div className="flex h-6 flex-row justify-center w-auto sm:hidden md:hidden">
        <Text
        style={{ fontSize:"14px",position:"absolute"}}
        className="font-arboria  text-white_A700 tracking-[3.00px]"
        >
          Alameda Rio Negro, 503 23o andar - CJ. 2301 – Alphaville. <br></br>contato@terceirizasp.com.br

        </Text> 
         

        </div>
        <div className="flex flex-row gap-4 items-start justify-end w-auto">
          <Button
            className="flex h-6 items-center justify-center rounded-[50%] w-6"
            size="smIcn"
            variant="icbOutlineWhiteA700"
          >
            <Img src="images/img_facebook.svg" className="h-3" alt="facebook" />
          </Button>
          <Button
            onClick={handleClick}
            className="flex h-6 items-center justify-center rounded-[50%] w-6"
            size="smIcn"
            variant="icbOutlineWhiteA700"
          >
            <Img
              src="images/img_instagram.svg"
              className="h-3"
              alt="instagram"
            />
          </Button>
          <Button
            className="flex h-6 items-center justify-center rounded-[50%] w-6"
            size="smIcn"
            variant="icbOutlineWhiteA700"
          >
            <Img src="images/img_linkedin.svg" className="h-3" alt="linkedin" />
          </Button>
          <div className="flex flex-col items-start justify-start w-6">
            <Button
            onClick={handlewpp}
              className="flex h-6 items-center justify-center rounded-[50%] w-6"
              size="smIcn"
              variant="icbOutlineWhiteA700"
            >
              <Img src="images/wpp-icon.svg" className="h-3" alt="twitter" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeFooter1280px.defaultProps = {};

export default HomeFooter1280px;
