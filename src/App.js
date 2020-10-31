import './App.css';
import React, { useState } from 'react';
import BoxCreator from './components/BoxCreator'
import BoxDisplay from './components/BoxDisplay'

function App() {

  const [currentBox, setCurrentBox] = useState("")

  const [boxes, setBoxes] = useState([])

  const createNewBox = (newBox) => {
    console.log("new Box", )
    setBoxes(oldBoxes => [...oldBoxes,newBox])
  }

  return (
    <>
      <BoxCreator onNewBox={createNewBox} />
      <BoxDisplay box={boxes} />
    </>
  );
}

export default App;