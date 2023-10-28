import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ExitIcon from "@rsuite/icons/Exit";

function NavBar() {
  const navigate = useNavigate();

  const handleNavBarClick = (e, tab) => {
    tab ? navigate("/" + tab) : navigate("/");
  };

  return (
    <div className="NavBar">
      <div className="logo" onClick={handleNavBarClick}>
        <img
          src="https://sysmanagement.it/careers/assets/img/logo.svg"
          alt="Logo System"
        />
        Systagram
      </div>
      <IconButton
        size="md"
        icon={<ExitIcon />}
        onClick={(e) => handleNavBarClick(e, "login")}
      />
    </div>
  );
}

export default NavBar;
