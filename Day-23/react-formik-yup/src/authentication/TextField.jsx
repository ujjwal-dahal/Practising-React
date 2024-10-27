import { useField } from "formik"


export default function TextField(props){
  let [field , meta] = useField(props.name)
  console.log(field , meta , props);
  
  return <>

          <input {...field} {...props} /> 
          {
            <div style={{ color: "red" }}>{meta.error}</div>
          } 

  </>
}