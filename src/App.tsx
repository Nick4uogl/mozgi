import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";

const App: React.FC = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    isFirstLoad.current = false;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition disableTransition={isFirstLoad.current}>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition disableTransition={isFirstLoad.current}>
              <About />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
