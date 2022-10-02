
import '../styles/App.css';
import React, { useState } from 'react';

export default function App() {
 //code here 
 const [inputValue , setinputValue] = useState("");
 const [text,setText] = useState("");
 function changeInput(event){
  setinputValue(event.target.value);
 }
 let elm ="";
function buttonClick(){
  elm  = text + inputValue;
  setText(elm);
  setinputValue("");

}
 
  return (
    <div>
  <input id='input' value={inputValue} onChange={changeInput} />
  
      <p id='intro'>Concated String</p>
      <p id='text'>{text} </p>
      <button id='button' onClick={buttonClick}>
        Click me
      </button>
    </div>
  );
}
