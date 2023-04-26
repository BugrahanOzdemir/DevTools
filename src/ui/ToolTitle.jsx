import React from "react"

const ToolTitle = (props) => {
  return (
    <div className='pt-10 mb-10 text-gray-300 justify-center'>
      <h3 className='text-5xl py-3.5 font-bold'> {props.title}</h3>
      <hr className='w-3/6' />
      <p className='text-md py-1.5 text-gray-500'>{props.subtitle}</p>
    </div>
  )
}

export default ToolTitle
