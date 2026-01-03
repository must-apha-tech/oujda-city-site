
import Header from "./components/Header"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './styles/main.css'

export default function App() {
  return <>
    <Navbar />
    <Header />
    <Home />
    <div>Oujda city</div>
    <Footer />
    </>
}