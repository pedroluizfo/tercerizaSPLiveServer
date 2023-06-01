import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import Navbar from "components/Navbar/Navbar";
import rotas from "rotas";
const Termosdeuso = React.lazy(() => import("pages/Termosdeuso"));
const Home = React.lazy(() => import("pages/Home"));
const Contato = React.lazy(() => import("pages/Contato"));
const Sobre = React.lazy(() => import("pages/Sobre"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
     
      <Router>
      <Navbar routes={rotas} markIconColor={"black"}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/termosdeuso" element={<Termosdeuso />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
