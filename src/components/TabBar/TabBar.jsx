import "./TabBar.css";
import { useNavigate } from "react-router-dom";
import { IconButton } from "rsuite";
import ImageIcon from "@rsuite/icons/Image";
import SearchIcon from "@rsuite/icons/Search";
import UserInfoIcon from "@rsuite/icons/UserInfo";

function TabBar() {
  const navigate = useNavigate();

  const handleTabBarClick = (tab) => {
    navigate("/" + tab);
  };

  return (
    <div className="TabBar">
      <IconButton
        size="lg"
        icon={<ImageIcon />}
        onClick={() => handleTabBarClick("")}
      />
      <IconButton
        size="lg"
        icon={<SearchIcon />}
        onClick={() => handleTabBarClick("search")}
      />
      <IconButton
        size="lg"
        icon={<UserInfoIcon />}
        onClick={() => handleTabBarClick("profile")}
      />
    </div>
  );
}

export default TabBar;
