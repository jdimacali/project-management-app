import { Outlet } from "react-router-dom";
import Header from "../components/header";
const Nav = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default Nav;
