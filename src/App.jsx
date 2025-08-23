// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Checkout from "./Components/Checkout";
// import Login from "./pages/Login";
// import Logout from "./Components/Logout";
// import Home from "./pages/Home";

import { createContext, useMemo, useState } from "react";
import DisplayPetsName from "./Components/DisplayPetsName";
import PetForm from "./Components/PetForm";
// import { PetContext } from "./context/PetContext";
import { NameContext } from "./context/NameContext";

// import { createContext, useState } from "react";
// import DisplayName from "./Components/DisplayName";

// import { UserContextProvider } from "./context/UserContext";

// import Products from "./pages/Products";
// import { useState } from "react";
// import ContextUser from "./Components/ContextUser";
// import DisplayLastName from "./Components/DisplayLastName";
// import DisplaySureName from "./Components/DiplaySureName";
// import Input from "./Components/Input";
// import {
//   useCallback,
//   useMemo,
//   useState,
//   useTransition,
//   startTransition,
// } from "react";
// import PrintTable from "./Components/PrintTable";
// import ProductsDetail from "./pages/ProductsDetail";
// import DisplayEmoji from "./Components/DisplayEmoji";
// import Emoji from "./pages/Emoji";
// import Form from "./Components/Form";
// import Display from "./Components/Display";
// provider
// consumer
// update

function App() {
  const [value, setValue] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const number = useMemo(() => {
    return expensiveLoading(value);
  }, [value]);
  return (
    <div
      style={
        isDark
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : {
              backgroundColor: "white",
              color: "black",
            }
      }
    >
      {/* hook useMemo memoization */}
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h1>number equals to {number}</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>

      {/* useMemo, useCallback, useTransition */}
      {/* <NameContext>
        <PetForm />
        <DisplayPetsName />
      </NameContext> */}
      {/* context=>provider, consumer, update  */}
    </div>
    // <lastNameContext.Provider value={{ lastname, setLastname }}>
    //   <Input />
    //   <DisplayLastName />
    // </lastNameContext.Provider>
  );
}

function expensiveLoading(value) {
  console.log("function performance started");
  for (let i = 0; i < 2000000000; i++) {}
  return value;
}

// function expensiveCalculation(num) {
//   console.log("loop started");
//   for (let i = 0; i < 1000000000; i++) {}
//   return num;
// }
export default App;
