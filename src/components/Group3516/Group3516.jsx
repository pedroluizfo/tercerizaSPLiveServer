import React from 'react';
import Ellipse2Image from '../../assets/images/Group3516_Ellipse_2.png';
import VectorImage from '../../assets/images/Group3516_Vector.png';
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

const Facebook = styled('div')({
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
  height: `9.96px`,
  width: `10px`,
  position: `absolute`,
  left: `1px`,
  top: `1px`,
});

function Group3516(props) {
  return (
    <Property1Default className={props.className}>
      <Ellipse2 src={Ellipse2Image} loading="lazy" alt={'Ellipse 2'} />
      <Facebook>
        <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
      </Facebook>
    </Property1Default>
  );
}

export default Group3516;
