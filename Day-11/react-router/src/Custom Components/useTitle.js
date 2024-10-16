import { useEffect } from "react";

function useTitle(titleName) {
  useEffect(() => {
    document.title = titleName;
  }, []);

  return null;
}

export default useTitle;
