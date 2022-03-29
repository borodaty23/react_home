import  React, {useState} from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { themes } from "./components/styledComponents/themes";
import  {Button} from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import {ButtonSt} from "./components/styledComponents/Button/ButtonSt";
import {Context} from "./components/Context/Context"
import {News} from "./api/containers/news-container"
import {Icon} from "./components/Icon/Icon"
import {Img} from "./components/Img/Img"
import {Input} from "./components/Input/Input"
// import {Form} from "./components/Form/Form"
import {CheckBox} from "./components/CheckBox/CheckBox"

function App() {
  
  // const z = (e:React.MouseEvent<HTMLButtonElement| HTMLAnchorElement>)=>{
  //   e.preventDefault()
  //   console.log("{f")
  // }

  const [errors, setErrors] = useState<any[]>([]);

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

  const onInputValidation = (inputValue: string) => {
    console.log(inputValue);
    const errors = validators
      .map((item) => item.validator(inputValue) && item.errorMsg)
      .filter((item) => item);
    setErrors(errors);
    console.log("errors", errors)
  };



  return (
    <>
    {/* <ThemeProvider theme = {themes}>
    <ButtonGroup vertical className="wrapperButtonGroup">
      <Button className="btn"/>
      <Button  className="btn"/>
    </ButtonGroup>
    <Button  active children = "Default button" className="btn" href = "#" type="submit"/>
    <Button  active onClick={z} children = "Default button" className="btn" href = "#"  />

    <ButtonSt className="la" children = "Button SC"/>

    <Context/>
    
    <News/>


    {/* <ButtonClass disabled onClick={z} active children = "Default button" className="btn" type="submit"/> */}
    {/* </ThemeProvider> */} 


     {/* <Icon name = "cat" size={65}></Icon>

    <Img alt = "jopa" circle/>

    <Input className="inputText" label = "text" id = "inputId" validators={validators}
    errors={errors}
    onInputValidation={onInputValidation}></Input>  */}

    
    {/* <Form  validators={validators}
    errors={errors}
    onInputValidation={onInputValidation}></Form> */}


    <CheckBox></CheckBox>

    </>
  );
}

export default App;
