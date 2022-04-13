import React,{useState} from "react";

const TuggleButton = () =>{
  const [open, setOpen] = useState(false)

  const toggle = () =>{
    setOpen(prevState => !prevState)
  }

  return (
    <button onClick={toggle}>{open ? "open":"Close"}</button> 
  )
}

export default TuggleButton;