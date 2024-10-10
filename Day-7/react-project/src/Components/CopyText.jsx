import { useState, useRef } from "react";
import styles from "../Styles/CopyText.module.css"

function CopyText() {
  let [text, setText] = useState("");

  let refText = useRef(null);

  function copyText() {
    refText.current.select(); //Input ko Text lai Select Garcha
    //Since hamile Input Box lai refText sanga reference jodeko chau

    navigator.clipboard
      .writeText(refText.current.value)
      .then((response) => {
        window.alert("Text is Copied");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
    <h1>Copy Text</h1>
      <input
        type="text"
        ref={refText}
        value={text}
        className={styles["text-box"]} 
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles["box"]} onClick={copyText}>Copy Text</button>
    </>
  );
}

export default CopyText;

/*
  useRef use garnu ko karan
  1. DOM lai manipulate garna sakincha
  2. kunai pani variable ko value lai component re-render huda pani change nahoss bhannalai ni garincha
  
  */
