import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./components/Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> 
      <Footer/>
    </div>
  );
};

export default Body;
