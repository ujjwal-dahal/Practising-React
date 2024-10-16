import { useNavigate } from "react-router-dom"


export default function Contact(){

  let indexPageNagivate = useNavigate()

  return <>
    <h2>Contact Page</h2>
    <button onClick={()=>indexPageNagivate("/")}>Navigate to Index Page</button>
  </>
}