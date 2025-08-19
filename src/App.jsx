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
import {
  useCallback,
  useMemo,
  useState,
  useTransition,
  startTransition,
} from "react";
import PrintTable from "./Components/PrintTable";
function App() {
  const [input, setInput] = useState("");
  const [pending, startTransition] = useTransition();
  const [list, setList] = useState([]);

  const List_size = 20000;
  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < List_size; i++) {
        l.push(input);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {pending
        ? "Loading..."
        : list.map((li, index) => <div key={index}>{li}</div>)}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/prodetails/:id" element={<ProDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
      {/* router=> route, react router dom */}
    </div>
  );
}
function expensiveCalculation(num) {
  console.log("loop started");
  for (let i = 0; i < 1000000000; i++) {}
  return num;
}
export default App;
