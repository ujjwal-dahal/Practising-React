import { memo } from "react";


let MyComp = () => {
  console.log("This is Child Component");

  return <></>;
};

export default memo(MyComp);
