import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./Component/Common/Header";
import Footer from "./Component/Common/Footer";
import Home from "./Pages/Home";
import MySwiper from "./Component/MySwiper";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />

      <MySwiper />
    </>
  );
}

export default App;
