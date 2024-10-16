import { useEffect, useState } from "react";



export function useFetch(url){

  let [error , setError] = useState("")
  let [data , setData] = useState("")

  useEffect(()=>{
    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        setData(data)
    })
    .catch((err)=>[
        setError(err)
    ])
  },[url])

  return {data , error}

}


