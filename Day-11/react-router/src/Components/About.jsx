import { useParams } from "react-router-dom";
import useTitle from "../Custom Components/useTitle.js"

function About() {
  
  useTitle("About Us Page")
  

  let parms = useParams()
  console.log(`Your name is ${parms.username}`);
  
  return (
    <>
      <h3>This is About Us Page</h3>
    </>
  );
}

export default About;
