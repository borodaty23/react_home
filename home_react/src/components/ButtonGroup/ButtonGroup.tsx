import React from "react";
import "./ButtonGroup.css"

interface IButtonGroup{
    className: string,
    vertical: boolean,
    children: React.ReactNode
}

const ButtonGroup = ({className ,vertical, children}:IButtonGroup) => {
  let doVertical = ""
  if(vertical){
    doVertical = "vertical"
  }

  let classButtonGroup = `${className} ${doVertical} `

  return (
    <div className = {classButtonGroup }>
        {children}
    </div>
  )
}
ButtonGroup.defaultProps = {
    vertical: false,
    children: null,
    className: ""
}

export default ButtonGroup