import React from "react"

const Input = (props) => {
  return (
    <input
      onChange={props.onChange}
      id={props.id}
      className='input input-bordered hover:border-primary focus:bg-secondary-content focus:placeholder-gray-300 transition duration-500'
      placeholder={props.placeholder}
      type={props.type}
    />
  )
}

export default Input
