import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Home from "./pages/Home";

import { UserProvider } from "./context/UserContext";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/Notfound";
import Profile from "./pages/Profile";
import ContactMe from "./pages/ContactMe";
import Product from "./pages/Product";
import Description from "./pages/Description";
import ProDetails from "./pages/ProdDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/prodetails/:id" element={<ProDetails />} />
        </Routes>
      </BrowserRouter>
      {/* router=> route, react router dom */}
    </div>
  );
}
export default App;
