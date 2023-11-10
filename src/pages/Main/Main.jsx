import { Outlet } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import TabBar from "components/TabBar/TabBar";
import "./Main.css";

function Main() {
  return (
    <div className="Main">
      <NavBar />

      <div className="content">
        <Outlet />
      </div>

      <TabBar />
    </div>
  );
}

export default Main;
