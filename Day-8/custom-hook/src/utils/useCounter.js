
import { useState } from "react";

function useCounter(startValue = 0 , stepValue =1){
    let [increaseValue , setIncreaseValue] = useState(startValue)
    

    function increaseCounter(){
      setIncreaseValue(increaseValue + stepValue)
      
    }

    return [increaseValue , increaseCounter]

}

export default useCounter;