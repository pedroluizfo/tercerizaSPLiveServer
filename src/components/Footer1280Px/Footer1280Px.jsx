import React from 'react';
import { styled } from '@mui/material/styles';
import LogoPrincipalLaranja from '../LogoPrincipalLaranja/LogoPrincipalLaranja';
import Group3516 from '../Group3516/Group3516';
import Group3517 from '../Group3517/Group3517';
import Group3518 from '../Group3518/Group3518';
import Frame628079 from '../Frame628079/Frame628079';

const Footer1280Px1 = styled('div')({
  backgroundColor: `rgba(41, 51, 53, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  justifyContent: `space-between`,
  alignItems: `flex-start`,
  padding: `16px 24px`,
  boxSizing: `border-box`,
  height: 'auto',
});

const LogoPrincipalLaranja1 = styled(LogoPrincipalLaranja)(({ theme }) => ({
  width: `157.58px`,
  height: `24px`,
  margin: `0px`,
}));

const Frame6280791 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 103px`,
});

const Group35161 = styled(Group3516)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px`,
}));

const Group35171 = styled(Group3517)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 16px`,
}));

const Group35181 = styled(Group3518)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  margin: `0px 0px 0px 16px`,
}));

const Frame6280792 = styled(Frame628079)(({ theme }) => ({
  margin: `0px 0px 0px 16px`,
}));

function Footer1280Px(props) {
  return (
    <Footer1280Px1 className={props.className}>
      <LogoPrincipalLaranja1 />
      <Frame6280791>
        <Group35161 />
        <Group35171 />
        <Group35181 />
        <Frame6280792 />
      </Frame6280791>
    </Footer1280Px1>
  );
}

export default Footer1280Px;
