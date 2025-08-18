import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact with user with id</h1>
      <Outlet />
    </div>
  );
}
