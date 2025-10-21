import { Outlet } from "react-router";
import NavBar from "./NavBar";

const Body = () => {
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Any children route will render here in the outlet */}
    </div>
  );
};

export default Body;
