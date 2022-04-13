import React,{useState,useEffect} from "react";

const Counter = () =>{
  const [count,setCount] = useState(0)

  const countUp = () =>{
    setCount(prevState =>prevState + 1)
  }
  const countDown = () =>{
    setCount(prevState =>prevState - 1)
  }

  useEffect(() =>{
    console.log("Current Count is..", count)
  })

  return(
    <div>
      <p>
        良いカウンター<br/>
        現在のカウンター数：{count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>Down</button>
    </div>
  )
}

export default Counter;