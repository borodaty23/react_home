import React, {useState} from "react";
import {data} from "./moka/mokData"
import "./select.css"


export const Select = () => {

   const [selectValue, setSelectValue] = useState("")

   const selectChanges = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const {target:{value}} = e
        setSelectValue(value)
   }

  return (
    <select onChange={selectChanges} value = {selectValue}>
        {
            data.map((user) =>{
                return <option key={user.id} value={user.name}> {user.name}</option>
            })
        }
    </select>
  )
}


export const SelectCustom = () => {

    const [isActive, setIsActive] = useState(false)

    const setActiveSelect = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsActive(!isActive)
    }

  return (
    <div className="select">
        <div className="selectBtn" onClick = {setActiveSelect}>
            Chose
            <span className="fas fa-caret-down"></span>
        </div>
        
        {isActive &&
            <div className="selectContent">
                {
                    data.map(user => <div key={user.id} className="selectItem">{user.name}</div>)
                }
            </div>
        }
    </div>
  )
}

