import { Outlet, Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import Profile from "./Profile";

export default function Home() {
  return (
    <div>
      <Navbar />

      <h1>Home Page</h1>
      {/* <Profile />
      dynamic routes
      */}
      <Link to="/profile">Click me to go to profile page</Link>
      <Outlet />
    </div>
  );
}
