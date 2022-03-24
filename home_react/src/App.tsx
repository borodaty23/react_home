import  React from "react";
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import { themes } from "./components/styledComponents/themes";
import  {Button} from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import {ButtonSt} from "./components/styledComponents/Button/ButtonSt";
import {Context} from "./components/Context/Context"

function App() {
  
  const z = (e:React.MouseEvent<HTMLButtonElement| HTMLAnchorElement>)=>{
    e.preventDefault()
    console.log("{f")
  }

  return (
    <>
    <ThemeProvider theme = {themes}>
    <ButtonGroup vertical className="wrapperButtonGroup">
      <Button className="btn"/>
      <Button  className="btn"/>
    </ButtonGroup>
    <Button  active children = "Default button" className="btn" href = "#" type="submit"/>
    <Button  active onClick={z} children = "Default button" className="btn" href = "#"  />

    <ButtonSt className="la" children = "Button SC"/>

    <Context/>

    {/* <ButtonClass disabled onClick={z} active children = "Default button" className="btn" type="submit"/> */}
    </ThemeProvider>
    </>
  );
}

export default App;
