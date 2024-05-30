// import logo from './logo.svg';
import './App.css';


import '../src/page/CSS/main.css';
import '../src/page/CSS/base.css';
import '../src/page/CSS/login.css';
import '../src/page/CSS/signUp.css';

import { useState, useEffect } from 'react';
import NavBar from './components/navBar/NavBar.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';
import Layout from './layouts/Layout.jsx';
import Homepage from './page/Homepage/index.jsx';
import Container from './components/container/Container.jsx';

const DEFAULT__PRODUCTS = [
  {
    name: "HP 245 G10 R5-7520U",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem1.webp",
    backgroundUrl: "/img/backGround.webp",

    config: [
      "14 inch",
      "Intel UHD graphic",
      "Ổ cứng 8GB",
      "Dung lượng 256GB",
      "Cân nặng 1.36kg",
    ],
  },
  {
    name: "DELL 200 G10 Gaming",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem2.webp",
    backgroundUrl: "/img/backGround.webp",
    config: [
      "16 inch",
      "Intel SSH graphic",
      "Ổ cứng 16GB",
      "Dung lượng 128GB",
      "Cân nặng 1.5kg",
    ],
  },
  {
    name: "ASUS 200 G10 Gaming",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem3.webp",
    backgroundUrl: "/img/backGround.webp",
    config: [
      "16 inch",
      "Intel SSH graphic",
      "Ổ cứng 16GB",
      "Dung lượng 128GB",
      "Cân nặng 1.5kg",
    ],
  },
  {
    name: "MACBOOK 200 G10 Gaming",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem4.webp",
    backgroundUrl: "/img/backGround.webp",
    config: [
      "16 inch",
      "Intel SSH graphic",
      "Ổ cứng 16GB",
      "Dung lượng 128GB",
      "Cân nặng 1.5kg",
    ],
  },
  {
    name: "LG 200 G10 Gaming",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem1.webp",
    backgroundUrl: "/img/backGround.webp",
    config: [
      "16 inch",
      "Intel SSH graphic",
      "Ổ cứng 16GB",
      "Dung lượng 128GB",
      "Cân nặng 1.5kg",
    ],
  },
  {
    name: "RAZER 200 G10 Gaming",
    currentPrice: "10.790.000đ",
    oldPrice: "13.000.000đ",
    imageUrl: "/img/productItem6.webp",
    backgroundUrl: "/img/backGround.webp",
    config: [
      "16 inch",
      "Intel SSH graphic",
      "Ổ cứng 16GB",
      "Dung lượng 128GB",
      "Cân nặng 1.5kg",
    ],
  },

]
function App() {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : DEFAULT__PRODUCTS;
  })


  return (
    <Router >
      <div className='App'>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Homepage />}></Route>
            {/* < Route path="/" element={<Container />} /> */}
          </Route >

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
