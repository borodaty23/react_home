import React, {useState} from 'react'
import './CheckBox.css'

export const CheckBox = () => {

    const [ch, setCh] = useState(false)

  return (
    // <label  className='check'> 
    //     <span className='checkBox'></span>
    //     <input   className='checkInput' id='' type="checkbox" />
    //     lALA
    // </label>

    <label >
        <input className='input' onChange={() => setCh(!ch)} type="checkbox" />
        <span className={`checkbox ${ch ? "active" : ""}`}/>
        check
    </label>
  )
}
