import React, {useState, useCallback} from 'react'
import Input from "../Input/Input"
import {ButtonStyle} from "../styledComponents/Button/ButtonSt"
import  {CheckBox} from "../CheckBox/CheckBox"
import "./Form.css"
import {onInputValidation} from "./utils"

// interface IForm {
//     onInputValidation: any;
// }

export const Form = () => {

  const [errorsInputName, setErrorsName] = useState<any[]>([]);
  const [errorsInputNumber, setErrorsNumber] = useState<any[]>([]);
  const [errorsInputEmail, setErrorsEmail] = useState<any[]>([]);
  const [check, setCheck] = useState(false)

  const checkingForDisabled = (
    errorsInputName: string[],
    errorsInputNumber: string[],
    errorsInputEmail: string[]
  ) => {
    return (
      !!errorsInputName.length ||
      !!errorsInputNumber.length ||
      !!errorsInputEmail.length ||
      !check
    );
  };

  const checkingForDisabledBoolean = checkingForDisabled(errorsInputName, errorsInputNumber, errorsInputEmail)

  return (
    <form className="form">
        <Input display setErrors = {setErrorsName} onInputValidation={onInputValidation} errors={errorsInputName} className={"inputTextForm"} id = {"inputTextForm"} label={"Name: "} ></Input>
        <Input display setErrors = {setErrorsNumber} onInputValidation={onInputValidation} errors={errorsInputNumber} className={"inputTextForm"} id = {"inputTextForm"} label={"Password: "} ></Input>
        <Input display setErrors = {setErrorsEmail} onInputValidation={onInputValidation} errors={errorsInputEmail} className={"inputTextForm"} id = {"inputTextForm"} label={"Email: "} ></Input>
        <ButtonStyle disabled = {checkingForDisabledBoolean}>Enroll</ButtonStyle>
        <ButtonStyle disabled = {checkingForDisabledBoolean}>Get a consultation</ButtonStyle>
        <CheckBox check = {check} setCheck={setCheck}>Terms of policy and user agreement</CheckBox>
    </form>
  )
}
