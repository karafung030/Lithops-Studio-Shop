import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import Checkout from './Checkout';
import React, { useState } from 'react';
import {cartContext} from './CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faPrint, faHouse, faGem} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faXTwitter, faInstagram, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import './css/stytle1.css';



function App() {

  const [cartItems, setCartItems] =useState([])

  return (
    <BrowserRouter>
      <cartContext.Provider value={{ cartItems, setCartItems }}>
      <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 fixed-top bg-opacity-75">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src='/image/logo.svg' alt="Logo" className="logo-image logo-small mt-3" />
    </Link>
    <Link className="navbar-brand" to="/checkout">
    <img src='/image/cart-shopping-solid.svg' alt="Logo" className="logo-image logo-small1 " />
    </Link>
  </div>
</nav>
        </header>

        <div className="container">
          
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/product" element={<ProductDetail />}>
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="/*" element={<p>找不到頁面</p>} />
          </Routes>
          </div>
          <footer className="text-center text-lg-start bg-white text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>網上聯絡方法:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
      <a href="" className="me-4 link-secondary">
      <FontAwesomeIcon icon={faFacebook}/>
      </a>
      <a href="" className="me-4 link-secondary">
      <FontAwesomeIcon icon={faXTwitter} />
      </a>
      <a href="" className="me-4 link-secondary">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="" className="me-4 link-secondary">
      <FontAwesomeIcon icon={faGoogle} />
      </a>
      <a href="" className="me-4 link-secondary">
      <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
          <FontAwesomeIcon icon={faGem} />公司名稱
          </h6>
          <p>多肉植物</p>
          <p>我們是一家專注於培育和銷售多肉植物的企業。</p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            產品推介
          </h6>
          <p>
            <a href="#!" className="text-reset">花盤</a>
          </p>
          <p>
            <a href="#!" className="text-reset">肥料</a>
          </p>
          <p>
            <a href="#!" className="text-reset">書籍</a>
          </p>
          <p>
            <a href="#!" className="text-reset">多肉植物</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            聊天群組連結
          </h6>
          <p>
            <a href="#!" className="text-reset">facebook</a>
          </p>
          <p>
            <a href="#!" className="text-reset">discord</a>
          </p>
          <p>
            <a href="#!" className="text-reset">whatapps</a>
          </p>
          <p>
            <a href="#!" className="text-reset">ig</a>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">聯絡方法</h6>
          <p><FontAwesomeIcon icon={faHouse} />大圍大圍道33號</p>
          <p>
          <FontAwesomeIcon icon={faEnvelope} />
            danleung828@gmail.com
          </p>
          <p><FontAwesomeIcon icon={faPhone} /> + 852 557 987 63</p>
          <p><FontAwesomeIcon icon={faPrint} /> + 852 557 987 63</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links */}

  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    Copyright ® 2023 多肉植物 All Rights Reserved：
    <a className="text-reset fw-bold" href="index.html">多肉植物.com</a>
  </div>
  {/* Copyright */}
</footer>
      </cartContext.Provider>
    </BrowserRouter>
  );
}

export default App;