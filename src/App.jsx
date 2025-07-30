import React, { useReducer } from "react";
import Home from "./pages/Home";
import Heading from "./component/Heading";
import Footer from "./component/Footer";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

function App() {
  const { dark } = useSelector((state) => state?.toggleDark);
  return (
    <div className={`relative top-0 bottom-0 left-0 right-0 ${dark?'bg-slate-900 text-white':''}`}>
      <Heading darkMode={dark}/>
      <Outlet />
      {/* <Footer darkMode={dark}/> */}
    </div>
  );
}

export default App;
