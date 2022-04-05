import React, {Children, useState} from 'react'
import './CheckBox.css'

interface ICheckBox{
  children:string
  check:boolean
  setCheck:any
}

export const CheckBox = React.memo( ({children, check, setCheck}:ICheckBox) => {
  console.log("render check")
  return (
    <label >
        <input className='input' onChange={() => setCheck(!check)} type="checkbox" />
        <span className={`checkbox ${check ? "active" : ""}`}/>
        {children}
    </label>
  )
})
