import React from "react";

const inputValidationLength = (inputValue: string) => {
    return !inputValue.length;
  };

  const inputValidationLengthCount = (inputValue: string) => {
    return inputValue.length < 2;
  };

  const validators = [
    { validator: inputValidationLength, errorMsg: "YOU HAVE TO WRIT SMT" },
    {
      validator: inputValidationLengthCount,
      errorMsg: "YOU HAVE TO WRIT MORE"
    }
  ];

 export const onInputValidation = (inputValue: string, setErrors:any) => {
    const errors = validators
      .map((item) => item.validator(inputValue) && item.errorMsg)
      .filter((item) => item);
    setErrors(errors);
  };