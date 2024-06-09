import React from "react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router-dom";
import Container from "../components/homepage/Container";
import Footer from "../components/footer/Footer";
export default function Layout({ setFilter, products }) {
  return (
    <div>
      <NavBar setFilter={setFilter} products={products} />
      <Outlet />
      <Footer />
    </div>
  );
}
