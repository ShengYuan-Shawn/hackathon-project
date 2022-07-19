import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetHero from "./components/GetHero";
import Header from "./components/Header";
import ListHero from "./components/ListHero";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<ListHero />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
