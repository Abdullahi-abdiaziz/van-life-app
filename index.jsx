import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail.jsx";
import "./server.js";
import { Layout } from "./component/Layout.jsx";
import HostLayout from "./component/HostLayout.jsx";
import Dashboard from "./pages/hosts/Dashboard.jsx";
import Reviews from "./pages/hosts/Reviews.jsx";
import Income from "./pages/hosts/Income.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="hosts" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>

          <Route path="about" element={<About />} />

          <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
