import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/home";
import Header from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Heroes from "./Components/Heroes/heroes";
import Forum from "./Components/Forum/forum";
import About from "./Components/About/about";
import HeroesId from "./Components/Heroes/HeroesId";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPageLayout />}>
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/about" element={<About />} />
            <Route path="/heroes/:heroesid" element={<HeroesId />} />
            <Route path="" element={<Home />} />
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
