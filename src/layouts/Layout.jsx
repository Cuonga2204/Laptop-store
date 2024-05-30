import React from "react";
import NavBar from "../components/navBar/NavBar";
import { Outlet } from "react-router-dom";
import Container from "../components/container/Container";

export default function Layout() {
  const [filter, setFilter] = useState("TẤT CẢ");

  return (
    <div>
      <NavBar setFilter={setFilter} />
      <Outlet />
    </div>
  );
}
