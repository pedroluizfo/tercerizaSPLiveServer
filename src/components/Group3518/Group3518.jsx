import React from 'react';
import Ellipse2Image from '../../assets/images/Group3518_Ellipse_2.png';
import VectorImage from '../../assets/images/Group3518_Vector.png';
import { styled } from '@mui/material/styles';

const Property1Default = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `24px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Ellipse2 = styled('img')({
  height: `24px`,
  width: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Linkedin = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `12px`,
  height: `12px`,
  left: `6px`,
  top: `6px`,
  overflow: `hidden`,
});

const Vector = styled('img')({
  height: `9px`,
  width: `9px`,
  position: `absolute`,
  left: `2px`,
  top: `2px`,
});

function Group3518(props) {
  return (
    <Property1Default className={props.className}>
      <Ellipse2 src={Ellipse2Image} loading="lazy" alt={'Ellipse 2'} />
      <Linkedin>
        <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
      </Linkedin>
    </Property1Default>
  );
}

export default Group3518;
