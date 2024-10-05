
import React from "react";
function FoodList() {
  let otherCountry = ["South Africa","United Kingdom"]
  // let countryNames = ["Nepal","India","China","Bhutan","Italy","Australia","Japan",...otherCountry]
  let countryNames = []

  // let message = countryNames.length==0 ? <li class="list-group-item" > No Any Country Name in Our List </li> : null
  
  return (
    
    <>
      {  countryNames.length == 0 && <li class="list-group-item" > No Any Country Name in Our List </li> }

      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Country List
        </li>
        {
          countryNames.map((country , index)=>{return <li class="list-group-item" key={index}>{country}</li>})
        }   
      </ul>
      </>
  );
}

export default FoodList;

