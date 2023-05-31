import React from 'react';
import Ellipse2Image from '../../assets/images/Frame628079_Ellipse_2.png';
import VectorImage from '../../assets/images/Frame628079_Vector.png';
import { styled } from '@mui/material/styles';

const Property1Default = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Group3519 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
});

const Ellipse2 = styled('img')({
  height: `24px`,
  width: `24px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const Twitter = styled('div')({
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
  height: `8.5px`,
  width: `10.46px`,
  position: `absolute`,
  left: `1px`,
  top: `2px`,
});

function Frame628079(props) {
  return (
    <Property1Default className={props.className}>
      <Group3519>
        <Ellipse2 src={Ellipse2Image} loading="lazy" alt={'Ellipse 2'} />
        <Twitter>
          <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
        </Twitter>
      </Group3519>
    </Property1Default>
  );
}

export default Frame628079;
