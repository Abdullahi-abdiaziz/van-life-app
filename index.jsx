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
import HostVanDetailLayout from "./component/HostVanDetailLayout.jsx";

import Dashboard from "./pages/hosts/Dashboard.jsx";
import Reviews from "./pages/hosts/Reviews.jsx";
import Income from "./pages/hosts/Income.jsx";
import HostVans from "./pages/hosts/HostVans.jsx";
import HostVanDetails from "./pages/hosts/HostVanDetails.jsx";
import Details from "./pages/hosts/Details.jsx";
import Pricing from "./pages/hosts/Pricing.jsx";
import Photos from "./pages/hosts/Photos.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="hosts" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<Details />} />
              <Route path="details" element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
