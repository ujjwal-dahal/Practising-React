function useLocalStorage() {
  function addDataToLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value)); // Store as JSON
      console.log(`Data ${value} is added to Local Storage`);
  }

  function deleteDataFromLocalStorage(key) {
      if (localStorage.getItem(key) != null) {
          localStorage.removeItem(key);
          console.log(`${key} is Deleted from Local Storage`);
      } else {
          console.log("No key found to delete");
      }
  }

  function getDataFromLocalStorage(key) {
      const data = localStorage.getItem(key);
      if (data != null) {
          const parsedData = JSON.parse(data);
          console.log(`Retrieved Data: ${parsedData}`);
          return parsedData; // Return parsed data
      } else {
          console.log("Data is not in Local Storage");
          return null; // Return null if not found
      }
  }

  return [addDataToLocalStorage, deleteDataFromLocalStorage, getDataFromLocalStorage];
}

export default useLocalStorage;
