import colorNames from 'colornames'
import React from 'react'


function Input({ colorValue, isDarkText, setColorValue, setHexValue, setIsDarkText}) {
  return (
    <>
    <form className='inp' >
        <label htmlFor="inp">Add a color</label>
        <input
            autoFocus
            required
            id='inp'
            type="text"
            placeholder='Type Color Name'
            value={colorValue}
            onChange={(e)=>{
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <br />
        <br />
        <button
            type='button'
            onClick={()=>setIsDarkText(!isDarkText)}
        >
            Text Toggle Value
        </button>
        
    </form>
    </>
  )
}

export default Input