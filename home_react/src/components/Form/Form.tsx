import React from 'react'
import {Input} from "../Input/Input"

interface IForm {
    errors: string[];
    onInputValidation: any;
}

export const Form = ({errors, onInputValidation}:IForm) => {

  return (
    <form>
        <Input  onInputValidation={onInputValidation} errors={errors} className={"inputTextForm"} id = {"inputTextForm"} label={"Name"} ></Input>
    </form>
  )
}
