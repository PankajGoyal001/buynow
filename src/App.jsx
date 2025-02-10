import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import TopDeal from "./Pages/TopDeal";
import Contact from "./Pages/Contact";
import HelpCenter from "./Component/Help/HelpCenter";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/topdeals" element={<TopDeal />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/productdetails" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
