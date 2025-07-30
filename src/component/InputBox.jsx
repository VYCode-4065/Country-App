import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import SelectBox from "./SelectBox";
import { useLocation, useNavigate } from "react-router";
import { useSelector } from "react-redux";

const InputBox = () => {

  const { dark } = useSelector((state) => state?.toggleDark);

  const [searchValue,setSearchValue] = useState('')

  const redirect = useNavigate()

  const redirectDetails = (key)=>{
    if(key === 'Enter'){
      redirect(`country-details/${searchValue}`)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:flex items-center justify-between md:px-8 mb-5 md:mb-20">
      <div className={`flex items-center gap-2 text-large  h-12 px-5 w-full md:w-96 rounded-lg shadow-lg ${dark?'shadow-slate-800':'border border-slate-200'}`}>
        <i className="text-xl">
          <IoSearch />
        </i>
        <input
          className="outline-0 h-full w-full placeholder:text-inherit"
          type="text"
          placeholder="Search for a country....."
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          onKeyDown={(e)=>redirectDetails(e.key)}
        />
      </div>
        <SelectBox />
    </div>
  );
};

export default InputBox;
