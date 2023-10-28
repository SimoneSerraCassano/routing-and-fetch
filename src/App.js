import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

import "rsuite/dist/rsuite.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Feed />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
