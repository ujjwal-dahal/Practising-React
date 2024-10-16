import React from "react";
import { useFetch } from "../Custom Components/useFetch";


function FetchingData(){

  const { data, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      {error && <h3>Error: {error}</h3>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, ["title","body"], 2)}</pre>  
        </div>
      )}
    </>
  );
}

export default FetchingData;