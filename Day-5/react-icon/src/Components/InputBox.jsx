

function InputBox(props){
  return <>

<input type={props.type} placeholder={props.placeholder} onChange={props.onChange} className={props.className} />

  </>
}

export default InputBox;

