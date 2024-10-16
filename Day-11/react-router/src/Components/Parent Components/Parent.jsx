import { createContext } from "react";
import Child3 from "../Child Components/Child3";

// Define the context
const userName = createContext();

function Parent() {
  const contextValue = {
    yourName: "Ujjwal",
    yourAddress: "Kathmandu"
  };

  return (
    <>
      <userName.Provider value={contextValue}>
        <Child3 />
      </userName.Provider>
    </>
  );
}

export default Parent;
export { userName };
