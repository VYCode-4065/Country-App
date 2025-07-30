import { useReducer, useState } from "react";
import { FaRegMoon } from "react-icons/fa6";
import { FaRegSun } from "react-icons/fa";
import { toggleDarkMode } from "../ContextApi/DataShare";
import { useDispatch } from "react-redux";

const Heading = ({darkMode}) => {

  const dispatch = useDispatch()


  
  return (
    <div className={` h-[4rem] my-auto  sticky top-0 shadow-lg ${darkMode?'bg-slate-900 text-white shadow-slate-800':'bg-white text-black '}  z-20`}>
      <div className="max-w-[80vw] m-auto flex items-center justify-between h-full ">
        <h1 className="text-lg md:text-2xl font-semibold">
          Where in the world?
        </h1>
        <div
          className="flex items-center gap-1 cursor-pointer"
         onClick={()=>dispatch(toggleDarkMode())}
        >
          <i>{darkMode ? <FaRegSun /> : <FaRegMoon />}</i>
          <span>{darkMode ? "Light" : "Dark"} Mode</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
