import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Card({
  officialName,
  flag,
  countryName,
  population,
  region,
  capital,
}) {
  const { dark } = useSelector((state) => state?.toggleDark);

  return (
    <Link
      to={`country-details/${officialName}`}
      className={`md:w-[230px]  rounded-lg shadow-2xl  overflow-hidden cursor-pointer hover:scale-[1.02] transition-all  ${
        dark ? " bg-slate-900 " : "shadow-blue-200"
      }`}
    >
      <img className="object-scale-down w-full h-[200px] md:h-[170px]" src={flag} alt="" />
      <div className="country-detail pl-5 pt-7 text-sm mb-5">
        <h2 className="font-bold mb-5 text-lg">{countryName}</h2>
        <p className="my-1">
          <span className="font-semibold ">Population : </span>
          {new Intl.NumberFormat("en-IN").format(population)}
        </p>
        <p className="my-1">
          <span className="font-semibold ">Region : </span>
          {region}
        </p>
        <p className="my-1">
          <span className="font-semibold ">Capital : </span>
          {capital}
        </p>
      </div>
    </Link>
  );
}

export default Card;
