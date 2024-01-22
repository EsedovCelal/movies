import React from "react";
import Home from "./Components/Home/Home.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="main_page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
