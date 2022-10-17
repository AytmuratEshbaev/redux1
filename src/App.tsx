import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';


function App() {
  let status = useSelector((state: { status: string }) => state.status);
  const dispatch = useDispatch();

  const changeState = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    dispatch({ type: target.value })
  }

  return (
    <div className="App">
      <div className="state__control">
        <h2>Change State</h2>
        <div>
          <button onClick={changeState} value="LIQUID">Liquid</button>
          <button onClick={changeState} value="GAS">Gas</button>
          <button onClick={changeState} value="SOLID">Solid</button>
        </div>
      </div>
      <div className="state__info">
        <h1>H20 is feeling:</h1>
        <p>{status}</p>
      </div>
    </div>
  );
}

export default App;
