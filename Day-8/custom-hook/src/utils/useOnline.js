import { useEffect, useState } from "react";

function useOnline() {
  let [checkOnline, setCheckOnline] = useState(true);

  let handleOnline = ()=> setCheckOnline(true)
  let handleOffline = ()=> setCheckOnline(false)

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  }, []);

  return checkOnline;
}

export default useOnline;
