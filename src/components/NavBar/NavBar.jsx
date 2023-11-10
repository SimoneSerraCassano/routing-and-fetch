import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import Logo from "components/Logo/Logo";

function NavBar() {
  const navigate = useNavigate();

  const handleNavBarClick = (tab) => {
    tab ? navigate("/" + tab) : navigate("/");
  };

  return (
    <div className="NavBar">
      <Logo size="small" action={() => handleNavBarClick()} />
      <IconButton
        size="md"
        icon={<ExitIcon />}
        onClick={() => handleNavBarClick("login")}
      />
    </div>
  );
}

export default NavBar;
