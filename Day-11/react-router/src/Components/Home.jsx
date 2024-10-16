import useTitle from "../Custom Components/useTitle"
import Child1 from "./Child Components/Child1";
import Child2 from "./Child Components/Child2";
import Parent from "./Parent Components/Parent";

function Home(){
  useTitle("Home Page")
  return <>

    <h3>This is Home Page</h3>
    <Parent />
  </>
}

export default Home;