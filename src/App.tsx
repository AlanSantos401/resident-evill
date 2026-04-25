import { useState } from "react";
import Loader from "./components/loader";

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Home from "./pages/home";
import LinhaDoTempo from "./pages/linhaDoTempo";
import Personagens from "./pages/personagens";
import Mapas from "./pages/mapas";
import Organizacao from "./pages/organizacao";
import Arquivos from "./pages/arquivos";

import { BlockZoom } from "./components/blockZoom";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "#000",
          zIndex: 0,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          style={{
            position: "relative",
            zIndex: 1,
            minHeight: "100vh",
            overflow: "hidden",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.50 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/linha-do-tempo" element={<LinhaDoTempo />} />
            <Route path="/personagens" element={<Personagens />} />
            <Route path="/mapas" element={<Mapas />} />
            <Route path="/organizacao" element={<Organizacao />} />
            <Route path="/arquivos" element={<Arquivos />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <BlockZoom />
          <AnimatedRoutes />
        </>
      )}
    </>
  );
}