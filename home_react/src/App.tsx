import  React from "react";
import  {Button, ButtonClass} from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

function App() {
  
  const z = (e:React.MouseEvent<HTMLButtonElement| HTMLAnchorElement>)=>{
    e.preventDefault()
  }

  return (
    <>
    <ButtonGroup vertical className="wrapperButtonGroup">
      <Button className="btn"/>
      <Button type="link" className="btn"/>
    </ButtonGroup>
    <Button  active children = "Default button" className="btn" href = "#" type="submit"/>
    <Button  active onClick={z} children = "Default button" className="btn" href = "#"  type="link"/>

    <ButtonClass disabled onClick={z} active children = "Default button" className="btn" type="submit"/>
    </>
  );
}

export default App;
