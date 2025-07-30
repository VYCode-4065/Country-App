import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enableRegionMode } from "../ContextApi/DataShare";

const SelectBox = () => {
  const { dark } = useSelector((state) => state?.toggleDark);

  const dispatch = useDispatch()

  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const options = ["All","Americas", "Asia", "Europe", "Africa", "Oceania"];
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    dispatch(enableRegionMode(value))
    setSelected(value);
    setOpen(false);
  };

  return (
    <div
      className={`relative md:w-48 ${dark ? "bg-slate-900 text-white " : "bg-white"}`}
      ref={dropdownRef}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full bg-inherit  ${dark?'shadow-lg shadow-slate-800':'border shadow-sm border-slate-200'} rounded-lg px-4 py-2 text-left  hover:border-slate-400 transition cursor-pointer`}
      >
        {selected || "Filter by Region"}
      </button>

      {open && (
        <div className="absolute transition-all scale-100 z-10 mt-1 w-full bg-inherit border border-gray-300 rounded-lg shadow-lg">
          {options?.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 hover:text-black cursor-pointer rounded-lg transition-all"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
