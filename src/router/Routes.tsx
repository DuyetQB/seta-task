import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import NewPost from "../pages/newpost/NewPost";

const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-new" element={<NewPost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
