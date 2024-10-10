import { useEffect, useRef, useState } from "react";

function InputBox() {
  let refText = useRef(); //Initially Value Null huncha

  useEffect(() => {
    refText.current.focus(); //Every Time Component re-render huda Input Box focus huncha
    console.log("Component is Re-render");
  });

  let [count, setCount] = useState(0);

  function counterFunc() {
    setCount(count + 1);
  }

  function copyText() {
    if (refText.current.value == "") {
      alert("No Any Text to be Copied");
    } else {
      refText.current.select(); //esle Text box ko sabai Text lai select garcha tara Copy gardaina
      refText.current.style.backgroundColor = "lightblue"; //Esle tyo Input box ma bhaeko text lai "red" color banaucha

      navigator.clipboard //Yo API ho so esle Promise return garcha
        .writeText(refText.current.value)
        .then(() => {
          alert("Text is Copied"); //then() function ma Promise Fullfied aaucha
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <>
      <input type="text" ref={refText} />
      <button onClick={copyText}>Copy Text</button>
      <div>
        <h2>{count}</h2>
        <button onClick={counterFunc}>Counter</button>
      </div>
    </>
  );
}

export default InputBox;
