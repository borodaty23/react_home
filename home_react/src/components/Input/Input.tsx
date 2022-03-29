import React, {useState} from 'react'

interface IInput {
    id: string ;
    className : string;
    label: string;
    validators: any[];
    errors: string[];
    onInputValidation: any;
}

export const Input = ({ errors, onInputValidation, validators ,...props }: IInput) => {
    const [inputValue, setInputValue] = useState("");

  const inputChanges = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue((e.target as HTMLInputElement).value);
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
        <input className = {props.className} onBlur={inputValidation} onFocus = {onInputValidation} onChange={inputChanges} type="text" id={props.id} />
    </label>
    {errors.length !== 0 && errors.map((item) => <p key={item}>{item}</p>)}
    </>
  )
}
