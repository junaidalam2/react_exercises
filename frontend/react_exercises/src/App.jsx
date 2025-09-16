import { useState } from 'react';
import './App.css';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 10)
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}


function App() {

  return (
    <div>
      <h1>Hello!</h1>
      <MyButton />
      <MyButton />
    </div>
  )
}



export default App
