import "./App.css";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import Search from "./pages/Search/Search";
import Profile from "./pages/Profile/Profile";
import "rsuite/dist/rsuite.min.css";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
