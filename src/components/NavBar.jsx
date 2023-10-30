import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";
import Logo from "./Logo";

function NavBar() {
  const navigate = useNavigate();

  const handleNavBarClick = (e, tab) => {
    tab ? navigate("/" + tab) : navigate("/");
  };

  return (
    <div className="NavBar">
      <Logo size="small" action={(e) => handleNavBarClick(e)} />
      <IconButton
        size="md"
        icon={<ExitIcon />}
        onClick={(e) => handleNavBarClick(e, "login")}
      />
    </div>
  );
}

export default NavBar;
