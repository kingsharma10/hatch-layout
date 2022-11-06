import { useState, useEffect } from "react";
import './Button.css'

export default function Button() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });
  

  function updateCount() {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <div>
        <button className="button" onClick={() => updateCount()}><b>LEARN MORE</b></button>
      </div>
    </div>
  );
}