import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import Hero from "./components/sections/Hero";
import QuickLinks from "./components/sections/QuickLinks";
import About from "./components/sections/About";
import Progress from "./components/sections/Progress";
import Skills from "./components/sections/Skills";
import Motorcycle from "./components/sections/Motorcycle";
import Drawings from "./components/sections/Drawings";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Impressum from "./components/sections/Impressum";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <QuickLinks />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Progress />
                <Skills />
              </>
            }
          />
          <Route path="/motorcycle" element={<Motorcycle />} />
          <Route path="/drawings" element={<Drawings />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
