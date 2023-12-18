import React from "react";
import { BrowserRouter, Form, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets/index.js";
import { Home, CreatePost } from "./pages/index.js";
function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
      </header>
    </BrowserRouter>
  );
}

export default App;
