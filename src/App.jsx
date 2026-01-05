
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Culture from "./pages/Culture";
import Climate from "./pages/Climate";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/main.css";

export default function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/climate" element={<Climate />} />
      </Routes>


      <Footer />
    </HashRouter>
  );

}