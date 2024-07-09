import React, { useState, useMemo, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);


  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    let result = 0;
    for (let i = 0; i < count * 1000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  
  const handleClick = useCallback(() => {
    console.log('Button clicked');
    
  }, []);

  return (
    <div>
      <h1>Performance Optimization with useMemo and useCallback</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
