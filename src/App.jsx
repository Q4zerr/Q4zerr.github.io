import "./assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Scroll from "./components/common/SmoothScroll/SmoothScroll";
import AnimatedRoutes from "./components/common/AnimatedRoutes/AnimatedRoutes";
import AnimatedBackground from "./components/common/AnimatedBackground/AnimatedBackground";
import Loader from "./components/common/Loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <Loader />
      <AnimatedBackground />
      <Navbar />
      <Scroll />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
