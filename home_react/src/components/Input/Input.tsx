import React, {useState} from 'react'

interface IInput {
    id: string ;
    className : string;
    label: string;
    // validators: any[];
    errors: string[];
    onInputValidation: any;
}

export const Input = ({ errors, onInputValidation, ...props }: IInput) => {
  const [inputValue, setInputValue] = useState("");
  
  const inputChanges = ({target:{value}}: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
    console.log(inputValue);
  };

  const inputValidation = () => {
      onInputValidation(inputValue);
  };

  console.log("err2", errors)
    
  return (
    <>
    <label className={props.className + "label"} htmlFor = {props.id}>
        {props.label}
        <input className = {props.className} onBlur={inputValidation} onFocus = {inputValidation} onChange={inputChanges} type="text" id={props.id} />
    </label>
    {errors.length !== 0 && errors.map((item) => <p key={item}>{item}</p>)}
    </>
  )
}
