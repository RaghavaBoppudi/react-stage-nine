
// updater function - A function usually passed as an argument to setState(). 
//                    Ex. setYear(arrow function)
//                    Allows for safe updates based on the previous state.
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions

import React, {useState} from "react"

function MyComponent(){
  const [count, setCount] = useState(0); // initate the stateful variable count using array destructuring and assign it an initial state / value of 0.

  const increment = () => {

    // setCount(count + 1) uses the CURRENT state to calculate the next state
    // set functions do not trigger an update
    // React batches together state updates for performance reasons
    // NEXT state becomes the CURRENT state after an update

    // If you need multiple state updates, you need an UPDATER function.

    // This uses the PENDING state to calculate the next state
    // React puts your updater function in a queue (waiting in line)
    // During the next render, it will call them in the same order

    // It is a convention to name the pending state argument something different, like prevAge for age etc.
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    // The above results in the setCount incrementing count by three
    
    // It is good practice to use an updater function EVEN IF you only update the state once.
  }

  const decrement = () => {
    // Similarly, we can have have updater functions for decrement too
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    // The above results in the setCount decrementing count by three
    }

  const reset = () => {
    // For reset you don't need the previous state, but if needed it can be:
    // setCount(c => c = 0);
    setCount(0); // function to reset the value of count
  }

  return(
    <div className="counter-container">
      <p className="count-display">Count: {count/* display the count using javascript({}) */}</p>
      <button className="counter-btn" onClick={decrement /* this function will be called everytime the button is clicked*/}>Decrement</button>
      <button className="counter-btn" onClick={reset}>Reset</button>
      <button className="counter-btn" onClick={increment}>Increment</button>
    </div>
  )
}

export default MyComponent