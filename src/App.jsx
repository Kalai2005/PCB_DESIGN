import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollManager from "./components/ScrollManager";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
