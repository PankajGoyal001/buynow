import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import TopDeal from "./Pages/TopDeal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topdeals" element={<TopDeal />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
