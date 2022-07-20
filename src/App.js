import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Heroes from "./Components/HeroTile/heroes";
import Forum from "./Components/Forum/forum";
import About from "./Components/About/about";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPageLayout />}>
            <Route path="" element={<Home />} />
            <Route path="heroes" element={<Heroes />} />
            <Route path="forum" element={<Forum />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function MainPageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
