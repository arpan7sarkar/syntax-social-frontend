import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Any children route will render here in the outlet */}
      <Footer/>
    </div>
  );
};

export default Body;
