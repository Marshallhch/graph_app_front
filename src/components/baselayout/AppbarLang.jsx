import React, { useEffect, useState } from "react";
import { COUNTRIES_API_URL } from "../../constants/apiUrl";
import { Icons } from "../../assets/icons";
import axios from "axios";

const AppbarLang = () => {
  const DEFAULT_COUNTRY = "United States";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await axios.get(COUNTRIES_API_URL);

        const sortedCountries = response.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedCountries);

        const defaultCountry = sortedCountries.find(
          (country) => country.name.common === DEFAULT_COUNTRY
        );

        // console.log(defaultCountry);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchCountriesData();
  }, []);

  // console.log(contries);

  const img = "https://flagcdn.com/w320/gs.png";
  return (
    <div className="appbar-dropdown lang-dropdown w-30 h-10">
      <div className="drop-selected w-full h-full px-1 py-3 flex items-center gap-3 cursor-pointer">
        <div className="drop-selected-img w-6 h-6 overflow-hidden rounded-full">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="drop-selected-text flex items-center gap-2">
          <span>English</span>
          <img
            src={Icons.ChevronDownDark}
            alt=""
            className="dark:invert-[1] brightness-[100%]"
          />
        </div>
      </div>

      {/* Drop Down Countries */}
      <div className="drop-list">
        <div className="drop-list-wrapper">
          {countries?.length > 0 ? (
            countries?.map((country) => {
              if (country?.languages && Object.keys(country?.languages)) {
                return (
                  <div key={country.name.common}>{country.name.common}</div>
                );
              } else {
                return null;
              }
            })
          ) : (
            <p>No Data Listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppbarLang;
