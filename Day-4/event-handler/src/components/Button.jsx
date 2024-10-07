
function Button (props){
  return <>

<button className="btn btn-info" onClick={props.clickButton}> {props.title} </button>


  </>
}


export default Button;