import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ImageIcon from "@rsuite/icons/Image";
import SearchIcon from "@rsuite/icons/Search";
import UserInfoIcon from "@rsuite/icons/UserInfo";

function TabBar() {
  const navigate = useNavigate();

  const handleTabBarClick = (e, tab) => {
    e.preventDefault();
    navigate("/" + tab);
  };

  return (
    <div className="TabBar">
      <IconButton
        size="lg"
        icon={<ImageIcon />}
        onClick={(e) => handleTabBarClick(e, "")}
      />
      <IconButton
        size="lg"
        icon={<SearchIcon />}
        onClick={(e) => handleTabBarClick(e, "search")}
      />
      <IconButton
        size="lg"
        icon={<UserInfoIcon />}
        onClick={(e) => handleTabBarClick(e, "profile")}
      />
    </div>
  );
}

export default TabBar;
