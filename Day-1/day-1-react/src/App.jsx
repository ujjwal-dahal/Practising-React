import MyButton from "./components/MyButton";
import Navbar from "./components/Navbar";

//Importing Multiple Component
import {Title,Title2} from "./components/Title";
// This is Parent Component
function App(){
  return(<>
    <Navbar/>
    <Navbar/>
    <Title name="Ujjwal" address="KTM" /> 
    <Title2/>
    <MyButton changeName="Click me" returnName="Click To Reverse" />
  </>)
}

export default App;

