import { useEffect, useState } from "react";
import Card from "../component/Card";
import InputBox from "../component/InputBox";
import { useSelector } from "react-redux";

function Home() {
  const [countryData, setCountryData] = useState([]);

  const { dark, regionValue } = useSelector((state) => state?.toggleDark);

  useEffect(() => {
    fetchCountryData();
  }, [regionValue]);

  const fetchCountryData = async () => {
    const val = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,population,flags,area,capital,region"
    )
      .then((res) => res.json())
      .then((data) => data);

    if (regionValue !== "All") {
      setCountryData(val.filter(({ region }) => region === regionValue));
    } else {
      setCountryData(val);
    }
  };
  return (
    <div
      className={`max-w-[80vw] m-auto py-8 ${
        dark ? "bg-slate-900 text-white" : ""
      }`}
    >
      <InputBox />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 ">
        {Array.isArray(countryData) &&
          countryData?.map((country) => {
            return (
              <Card
                key={`${country?.name?.official} + desh`}
                flag={country?.flags?.svg}
                officialName={country?.name?.official}
                countryName={country?.name?.common}
                population={country?.population}
                capital={country?.capital}
                region={country?.region}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
