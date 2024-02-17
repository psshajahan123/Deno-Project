import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Join from "./components/Join";
import Chat from "./components/Chat";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact Component={Join} />
      <Route path="/chat" exact Component={Chat} />
    </Routes>
  </BrowserRouter>
);
export default App;
