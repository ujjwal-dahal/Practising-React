import { useEffect, useState } from "react";
import styles from "./CountryListCss/CountryList.module.css";
import axios from "axios";
import CountryListShimmerEffect from "./CountryListShimmerEffect";

let CountryList = ({
  isDark,
  isAscending,
  setIsAscending,
  isClickedOrder,
  setIsClickedOrder,
}) => {
  let url = "https://restcountries.com/v3.1/all"; //url to fetch data

  let [searchValue, setSearchValue] = useState(""); //user le search gareko value

  let [countryData, setCountryData] = useState([]); //api bata fetch bhako data

  let [searchFilter, setSearchFilter] = useState([]); //filter gareko array country name
  let [sortedArray, setSortedArray] = useState([]);

  


  let countryApi = async () => {
    try {
      let response = await axios.get(url);
      setCountryData(response.data);
      setSearchFilter(response.data);
      console.log("Data Got Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    countryApi();
  }, []); //jaba component mount huncha taba data fetch huncha


  let handleSearch = (event) => {
    setSearchValue(event.target.value);
  }; //user le search gareko data

  useEffect(() => {
    if (searchValue === "") {
      setSearchFilter(countryData); 
      setSortedArray(countryData); 
    } else {
      const filteredCountries = countryData.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchFilter(filteredCountries);
      setSortedArray(filteredCountries); 
    }
  }, [searchValue, countryData]);

  let handleSorting = () => {
    if (isClickedOrder) {
      if (isAscending) {
        setSortedArray(
          [...searchFilter].sort((a, b) =>
            a.name.common
              .toLowerCase()
              .localeCompare(b.name.common.toLowerCase())
          )
        );
      } else if (isAscending == false) {
        setSortedArray(
          [...searchFilter].sort((a, b) =>
            b.name.common
              .toLowerCase()
              .localeCompare(a.name.common.toLowerCase())
          )
        );
      }
    } else {
    }
  };

  useEffect(() => {
    handleSorting();
  }, [isAscending, isClickedOrder, searchFilter]);

  //For Pagination
  let [currentPage , setCurrentPage] = useState(1)
  let [isInPageOne , setIsPageOne] = useState(false)
  let [isInPageLast , setIsPageLast] = useState(false)

  let dataPerPage = 6;
  let indexOfLastItem = currentPage * dataPerPage;
  let indexOfFirstItem = indexOfLastItem - dataPerPage;


  let totalPages = Math.ceil(sortedArray.length / dataPerPage) 
  let currentItems = sortedArray.slice(indexOfFirstItem , indexOfLastItem)
  console.log(currentPage);

  let myCreatedArray = new Array(totalPages).fill(null);

  let handlePrevious = ()=>{
    setCurrentPage ((prev)=> Math.max(prev - 1 , 1))
  }

  let handleNext = ()=>{
    setCurrentPage((prev)=> (
        Math.min(prev + 1 , totalPages)
    ))
  }

  let pageClick = (pageNumber)=>{
    setCurrentPage(pageNumber)
    
    if(pageNumber===1){
        setIsPageOne(true)
        setIsPageLast(false)
      }
    else if(pageNumber === totalPages){
      setIsPageLast(true)
      setIsPageOne(false)
    }
      else{
        setIsPageOne(false)
        setIsPageLast(false)
      }
  }

  return (
    <>
      {countryData.length ? (
        <div
          className={
            isDark
              ? styles["main-container-dark-mode"]
              : styles["main-container"]
          }
        >
          <input
            type="search"
            name=""
            id=""
            value={searchValue}
            onChange={handleSearch}
            className={
              isDark ? styles["dark-mode-search-bar"] : styles["search-bar"]
            }
            placeholder=" 🔍 Search for a country..."
          />
          <div
            className={
              isDark ? styles["dark-mode-semi"] : styles["semi-container"]
            }
          >
            {currentItems.map((country, index) => {
              return (
                <div
                  className={
                    isDark
                      ? styles["dark-mode-country"]
                      : styles["country-container"]
                  }
                  key={country.name.common}
                >
                  <img
                    src={country.flags.png}
                    alt=""
                    srcSet=""
                    className={
                      isDark ? styles["dark-mode-flag"] : styles["country-flag"]
                    }
                  />
                  <p
                    className={
                      isDark ? styles["dark-mode-name"] : styles["country-name"]
                    }
                  >
                    {country.name.common}
                  </p>
                  <p
                    className={
                      isDark
                        ? styles["dark-mode-capital"]
                        : styles["country-capital"]
                    }
                  >
                    <b>Capital :</b> {country.capital}
                  </p>
                  <p
                    className={
                      isDark
                        ? styles["dark-mode-population"]
                        : styles["country-population"]
                    }
                  >
                    <b>Population :</b> {country.population}
                  </p>
                  <p
                    className={
                      isDark
                        ? styles["dark-mode-region"]
                        : styles["country-region"]
                    }
                  >
                    <b>Region :</b> {country.region}
                  </p>
                </div>
              );
            })}
           
          </div>
        </div>
        
      ) : (
        <CountryListShimmerEffect isDark={isDark} />
      )}
       
      <div className={styles["pagination"]}>
      {
        !isInPageOne && <button onClick={handlePrevious} className={styles["pag-btn"]}  >◀️</button>
      }
          
          {
            myCreatedArray.map((item , index)=>(
                <button key={index} className={currentPage=== index + 1 ? styles["selected__page__btn"] : styles["pag-btn"]} onClick={()=> pageClick(index + 1)} >{index + 1}</button>
            ))

          }
          {
            !isInPageLast && <button className={styles["pag-btn"]} onClick={handleNext} >▶️</button>
          }
          
        </div>
    </>
  );
};

export default CountryList;
