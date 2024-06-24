import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage<number>('count', 0);

  return (
    <div style={styles.container}>
      <h1>useLocalStorage Hook Example</h1>
      <p>Current Count: {count}</p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={styles.button} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default App;
