import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Careers from "./Component/pages/carrers";
import Feed from "./Component/pages/feed";
import Home from "./Component/pages/Home";
import Login from "./Component/pages/Login";
import Post from "./Component/pages/Post";
import RequireAuth from "./Component/privateRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route
          path="feeds"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />
        <Route
          path="careers"
          element={
            <RequireAuth>
              <Careers />
            </RequireAuth>
          }
        />
        <Route
          path="posts"
          element={
            <RequireAuth>
              <Post />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
