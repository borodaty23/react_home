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
import Input from "./components/Input/Input"
import {Form} from "./components/Form/Form"
import {CheckBox} from "./components/CheckBox/CheckBox"
import { ButtonStyle } from "./components/styledComponents/Button/ButtonSt";
import {Select} from "./components/Select/Select"
import {SelectCustom} from "./components/Select/Select"
import {Counter} from "./components/Counter/Counter"
// import Countdown from "./components/Counter/Counter"

function App() {
  
  // const z = (e:React.MouseEvent<HTMLButtonElement| HTMLAnchorElement>)=>{
  //   e.preventDefault()
  //   console.log("{f")
  // }

  return (
    <>
    <ThemeProvider theme = {themes}>
    {/* <ButtonGroup vertical className="wrapperButtonGroup">
      <Button className="btn"/>
      <Button  className="btn"/>
    </ButtonGroup>
    <Button  active children = "Default button" className="btn" href = "#" type="submit"/>
    <Button  active onClick={z} children = "Default button" className="btn" href = "#"  />

    <ButtonSt className="la" children = "Button SC"/>

    <Context/>
    
    <News/> */}

    {/* <ButtonStyle>Button</ButtonStyle> */}

    {/* <ButtonClass disabled onClick={z} active children = "Default button" className="btn" type="submit"/> */}


      {/* <Icon name = "cat" size={65}></Icon>

<Img alt = "jopa" circle/> */}

    {/* <Input setErrors={setErrors} className="inputText" label = "text" id = "inputId" 
    errors={errors}
  onInputValidation={onInputValidation}></Input>  */}

    
    {/* <Form ></Form>  */}


    {/* <CheckBox></CheckBox> */}

    {/* <Select></Select> */}

    {/* <SelectCustom></SelectCustom> */}

  <Counter></Counter>



  </ThemeProvider> 
    </>
  );
}

export default App;
