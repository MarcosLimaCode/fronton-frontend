import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNews from "./pages/PageNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allnews" element={<PageNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
