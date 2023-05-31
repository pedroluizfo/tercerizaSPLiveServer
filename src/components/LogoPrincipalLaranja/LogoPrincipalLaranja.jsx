import React from 'react';
import VectorImage from '../../assets/images/LogoPrincipalLaranja_Vector.png';
import Vector1Image from '../../assets/images/LogoPrincipalLaranja_Vector_1.png';
import Vector2Image from '../../assets/images/LogoPrincipalLaranja_Vector_2.png';
import Vector3Image from '../../assets/images/LogoPrincipalLaranja_Vector_3.png';
import Vector4Image from '../../assets/images/LogoPrincipalLaranja_Vector_4.png';
import Vector5Image from '../../assets/images/LogoPrincipalLaranja_Vector_5.png';
import Vector6Image from '../../assets/images/LogoPrincipalLaranja_Vector_6.png';
import Vector7Image from '../../assets/images/LogoPrincipalLaranja_Vector_7.png';
import Vector8Image from '../../assets/images/LogoPrincipalLaranja_Vector_8.png';
import Vector9Image from '../../assets/images/LogoPrincipalLaranja_Vector_9.png';
import Vector10Image from '../../assets/images/LogoPrincipalLaranja_Vector_10.png';
import Vector11Image from '../../assets/images/LogoPrincipalLaranja_Vector_11.png';
import { styled } from '@mui/material/styles';

const LogoPrincipalLaranja1 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `30px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

const Vector = styled('img')({
  height: `20.74px`,
  width: `18.81px`,
  position: `absolute`,
  left: `42px`,
  top: `9px`,
});

const Vector1 = styled('img')({
  height: `21.34px`,
  width: `21.59px`,
  position: `absolute`,
  left: `61px`,
  top: `9px`,
});

const Vector2 = styled('img')({
  height: `29.4px`,
  width: `6.45px`,
  position: `absolute`,
  left: `105px`,
  top: `0px`,
});

const Vector3 = styled('img')({
  height: `20.74px`,
  width: `18.81px`,
  position: `absolute`,
  left: `113px`,
  top: `9px`,
});

const Vector4 = styled('img')({
  height: `29.4px`,
  width: `6.45px`,
  position: `absolute`,
  left: `133px`,
  top: `0px`,
});

const Vector5 = styled('img')({
  height: `20.13px`,
  width: `17.72px`,
  position: `absolute`,
  left: `141px`,
  top: `9px`,
});

const Vector6 = styled('img')({
  height: `20.14px`,
  width: `22.31px`,
  position: `absolute`,
  left: `161px`,
  top: `9px`,
});

const Vector7 = styled('img')({
  height: `20.13px`,
  width: `19.38px`,
  position: `absolute`,
  left: `84px`,
  top: `9px`,
});

const Vector8 = styled('img')({
  height: `20.13px`,
  width: `19.38px`,
  position: `absolute`,
  left: `20px`,
  top: `9px`,
});

const Vector9 = styled('img')({
  height: `20.13px`,
  width: `17.72px`,
  position: `absolute`,
  left: `0px`,
  top: `9px`,
});

const Vector10 = styled('img')({
  height: `7.02px`,
  width: `6.43px`,
  position: `absolute`,
  left: `183px`,
  top: `9px`,
});

const Vector11 = styled('img')({
  height: `6.62px`,
  width: `6.11px`,
  position: `absolute`,
  left: `191px`,
  top: `9px`,
});

function LogoPrincipalLaranja(props) {
  return (
    <LogoPrincipalLaranja1 className={props.className}>
      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
      <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
      <Vector2 src={Vector2Image} loading="lazy" alt={'Vector'} />
      <Vector3 src={Vector3Image} loading="lazy" alt={'Vector'} />
      <Vector4 src={Vector4Image} loading="lazy" alt={'Vector'} />
      <Vector5 src={Vector5Image} loading="lazy" alt={'Vector'} />
      <Vector6 src={Vector6Image} loading="lazy" alt={'Vector'} />
      <Vector7 src={Vector7Image} loading="lazy" alt={'Vector'} />
      <Vector8 src={Vector8Image} loading="lazy" alt={'Vector'} />
      <Vector9 src={Vector9Image} loading="lazy" alt={'Vector'} />
      <Vector10 src={Vector10Image} loading="lazy" alt={'Vector'} />
      <Vector11 src={Vector11Image} loading="lazy" alt={'Vector'} />
    </LogoPrincipalLaranja1>
  );
}

export default LogoPrincipalLaranja;
