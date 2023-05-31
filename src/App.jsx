import React from "react";
import Routes from "./Routes";
import Navbar from "../src/components/Navbar/Navbar"
import rotas from "./rotas"



function App() {

  return(
    <>
  <Navbar routes={rotas} markIconColor={"black"}/>
  <Routes />

  </>)
}

export default App;
