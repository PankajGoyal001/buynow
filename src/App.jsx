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
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import RegesterOTP from "./Pages/RegesterOTP";
import Regester from "./Pages/Regester";
import Login from "./Pages/Login";
import ForgetPassword from "./Pages/ForgetPassword";
import NewPassword from "./Pages/NewPassword";
import DeliveryAddress from "./Pages/DeliveryAddress";
import SaveAddress from "./Pages/SaveAddress";
import NewAddress from "./Pages/NewAddress";
import Order from "./Pages/Order";
import Payment from "./Pages/Payment";
import OrderDetails from "./Pages/OrderDetails";
import ScrollToTop from "./Component/Common/ScrollToTop";
import OrderComplete from "./Pages/OrderComplete";
import Wishlist from "./Pages/Wishlist";
import UserAccount from "./Pages/UserAccount";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/topdeals" element={<TopDeal />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/productdetails" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/regester" element={<Regester/>} />
          <Route path="/regestered" element={<RegesterOTP/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forget" element={<ForgetPassword/>} />
          <Route path="/NewPassword" element={<NewPassword/>} />
          <Route path="/address" element={<DeliveryAddress/>} />
          <Route path="/selectdeleviry" element={<SaveAddress/>} />
          <Route path="/AddNewAddress" element={<NewAddress/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/Orderdeatial" element={<OrderDetails/>} />
          <Route path="/Ordercomplete" element={<OrderComplete/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/useraccount" element={<UserAccount/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
