import React, {useState} from 'react'
import "./Input.css"

interface IInput {
    id: string ;
    className : string;
    label: string;
    // validators: any[];
    errors: string[];
    onInputValidation: any;
    setErrors: any
    display?:boolean
}

 const Input = ({setErrors, errors, onInputValidation, ...props }: IInput) => {
  const [inputValue, setInputValue] = useState("");
  
  const inputChanges = ({target:{value}}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
    console.log(inputValue);
  };

  const inputValidation = () => {
      onInputValidation(inputValue, setErrors);
  };

  console.log("err2", errors)
    
  return (
    <>
    <label className={`${props.className + "Label"} ${props.display ? "block" : ""}`} htmlFor = {props.id}>
        {props.label}
        <input value = {inputValue} className = "inputText" onBlur={inputValidation} onFocus = {inputValidation} onChange={inputChanges} type="text" id={props.id} />
    </label>
    {errors.length !== 0 && errors.map((item) => <p className="errorMsg" key={item}>{item}</p>)}
    </>
  )
}
export default React.memo(Input)