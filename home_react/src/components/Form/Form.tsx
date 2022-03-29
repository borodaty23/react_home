import React from 'react'
import {Input} from "../Input/Input"

interface IForm {
    errors: string[];
    onInputValidation: any;
    validators: any[];
}

// export const Form = ({errors,validators, onInputValidation}:IForm) => {

//     const inputValidation = () => {
//         onInputValidation(inputValue);
//     };

//   return (
//     <form>
//         <Input  errors={errors} validators={validators} className={"inputTextForm"} id = {"inputTextForm"} label={"Name"} ></Input>
//     </form>
//   )
// }
