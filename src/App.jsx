import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNews from "./pages/PageNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<PageNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
