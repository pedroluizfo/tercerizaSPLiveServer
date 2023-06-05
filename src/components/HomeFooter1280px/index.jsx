import React from "react";

import { Button, Img } from "components";

import "../../styles/font.css"

function handleClick() {
  window.open('https://www.instagram.com/terceiriza_sp/', '_blank');
}


const HomeFooter1280px = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          src="images/img_logoprincipallaranja.svg"
          className="h-6 w-[157px]"
          alt="logoprincipalla_One"
        />
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
              className="flex h-6 items-center justify-center rounded-[50%] w-6"
              size="smIcn"
              variant="icbOutlineWhiteA700"
            >
              <Img src="images/img_twitter.svg" className="h-3" alt="twitter" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

HomeFooter1280px.defaultProps = {};

export default HomeFooter1280px;
