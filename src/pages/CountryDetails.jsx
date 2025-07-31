import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Loader from "../component/Loader";

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { dark } = useSelector((state) => state.toggleDark);

  const param = useParams();
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${param.code}?fullText=true`
      );

      const data = await response.json();

      if (!data[0]) {
        throw new Error("Data not found");
      } else {
        setLoading(false);
        setCountryDetails(data[0]);
      }
    } catch (error) {
      navigate("/error");
      console.log("error at country details page");
    }
  };
  return (
    <div className={`${dark ? "bg-slate-900 text-gray-200" : ""}`}>
      {loading && <Loader />}
      <div className="py-4 md:py-10 px-3 md:px-10 h-screen lg:h-[91vh] ">
        <div className="w-32">
          <Link
            to={"/"}
            className="py-2 px-5 overflow-hidden bg-transparent rounded-lg border border-slate-200 flex items-center gap-2 shadow-lg font-semibold"
          >
            <FaArrowLeft />
            <span>Back</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-28 mt-5 md:mt-20 ">
          <img
            src={countryDetails?.flags?.svg}
            alt="value"
            className="w-full h-full"
          />
          <div className="">
            <h1 className="font-bold text-lg mb-7">
              {countryDetails?.name?.common}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <p>
                  <span className="font-semibold">Population : </span>{" "}
                  {new Intl.NumberFormat("en-IN").format(
                    countryDetails?.population
                  )}
                </p>
                <p>
                  <span className="font-semibold">Region :</span>{" "}
                  {countryDetails?.region}
                </p>
                <p>
                  <span className="font-semibold">Native Name :</span>
                  {countryDetails?.name?.official}
                </p>
                <p>
                  <span className="font-semibold">Sub Region : </span>{" "}
                  {countryDetails?.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital : </span>
                  {countryDetails?.capital}
                </p>
              </div>
              <div>
                <p>
                  <span className="font-semibold">Top Level Domain : </span>
                  {countryDetails?.tld &&
                    Object.values(countryDetails?.tld)?.map(
                      (tl) => tl + "  ,  "
                    )}
                </p>
                <p>
                  <span className="font-semibold">Currencies : </span>Euro
                </p>
                <p>
                  <span className="font-semibold">Languages :</span>{" "}
                  {countryDetails?.languages &&
                    Object.values(countryDetails?.languages)?.map(
                      (lan) => lan + " ,"
                    )}
                </p>
              </div>
            </div>
            <div className="mt-4 md:mt-20 md:mb-10 lg:mb-0 flex">
              <h1 className="font-semibold">Border Countries:</h1>
              <div className="flex items-center gap-2 px-5 lg:w-[30vw] overflow-x-scroll ">
                {!countryDetails?.borders
                  ? "No border countries known"
                  : countryDetails?.borders?.map((bdr) => {
                      return (
                        <p
                          key={bdr + "temple"}
                          className={`border ${
                            dark ? "text-black" : ""
                          } border-slate-200 rounded-sm px-5 bg-slate-100 w-fit`}
                        >
                          {bdr}
                        </p>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
