import NavBar from "components/NavBar/NavBar";
import TabBar from "components/TabBar/TabBar";
import "./Main.css";
import { useContext } from "react";
import { UserContext } from "contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

function Main() {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!user) {
    return <Navigate to="/login" />;
  }

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
