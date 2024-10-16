import { useState } from "react";
import useLocalStorage from "../Custom Components/useLocalStorage"

function LocalStorage(){
  let [addData, deleteData, getData] = useLocalStorage();
  let [key, setKey] = useState("");
  let [value, setValue] = useState("");

  function addDataClick() {
    if(key!=null && value!=null){
      addData(key , value)
      setKey("");
      setValue("");
    }
}

  function deleteDataClick(){
    deleteData(key)
    setKey("")
    setValue("")
  }

  function getDataClick(){
    getData(key)
    setKey("")
    setValue("")
  }
  return <>

<input
        type="text"
        placeholder="Enter Key to Add"
        value={key}
        onChange={(e) => setKey(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Value to Add"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={addDataClick}>Add Data</button>
      <button onClick={deleteDataClick}>Delete Data</button>
      <button onClick={getDataClick}>Get Data</button>

  </>
}


export default LocalStorage;