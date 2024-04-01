import React from 'react'

function Button({btnName,btnType, btnFn}) {
  return (
    <button
      type={btnType}
      className="bg-indigo-400 p-3 mx-auto rounded-lg border-2 border-indigo-200 transition ease-in-out delay-150 hover:scale-110 hover:bg-indigo-500 duration-300"
      onClick={btnFn}
      >{btnName}</button>
      
  )
}

export default Button