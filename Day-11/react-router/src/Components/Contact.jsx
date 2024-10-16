import { useParams } from "react-router-dom";
import useTitle from "../Custom Components/useTitle";

function Contact() {
  useTitle("Contact Us Page")

  // let parms = useParams()

  let {id , username} = useParams()
  return (
    
    <>
      <h2>This is Contact Page</h2>
      {/* <h3> Id is {parms.id} </h3> */}
      <h3> Id : {id} Name : {username} </h3>

    </>
  );
}

export default Contact;
