import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import Logo from "components/Logo/Logo";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";

function NavBar() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({
      type: "logout",
    });
    navigate("/login");
  };

  return (
    <div className="NavBar">
      <Logo size="small" action={() => navigate("/")} />
      <IconButton
        size="md"
        icon={<ExitIcon />}
        onClick={() => handleLogOut()}
      />
    </div>
  );
}

export default NavBar;
