import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Login from "./pages/Login";
import Logout from "./Components/Logout";
import Home from "./pages/Home";

// import { UserContextProvider } from "./context/UserContext";

import Products from "./pages/Products";

import {
  useCallback,
  useMemo,
  useState,
  useTransition,
  startTransition,
} from "react";
import PrintTable from "./Components/PrintTable";
import ProductsDetail from "./pages/ProductsDetail";
import DisplayEmoji from "./Components/DisplayEmoji";
import Emoji from "./pages/Emoji";
import Form from "./Components/Form";
import Display from "./Components/Display";
function App() {
  return (
    <div>
      <Login />
      {/* <UserContextProvider>
        <Form />
        <Display />
      </UserContextProvider> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductsDetail />} />
          <Route path="/emoji" element={<Emoji />} />
        </Routes>
      </BrowserRouter> */}
      {/* <BrowserRouter>
        <Routes>
        products=> products details
          <Route path="/" element={<Product />} />
          <Route path="/prodetails/:id" element={<ProDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      {/* router=> route, react router dom */}
    </div>
  );
}
// function expensiveCalculation(num) {
//   console.log("loop started");
//   for (let i = 0; i < 1000000000; i++) {}
//   return num;
// }
export default App;
