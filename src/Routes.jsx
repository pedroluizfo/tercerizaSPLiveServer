import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Termosdeuso = React.lazy(() => import("pages/Termosdeuso"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Contato = React.lazy(() => import("pages/Contato"));
const Sobre = React.lazy(() => import("pages/Sobre"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
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
