import React, { useState } from 'react';


export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  }
  const handleRemoveSpace = () => {
    let newText = text.trimStart();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div>

        <h1 className="h3 my-4">Enter the text below here...</h1>
        <div className="container">
          <textarea value={text} id="myBox" onChange={handleOnChange} rows="6" className="form-control"></textarea>
        </div>
        <div className='container my-3'>
          <button className="btn btn-dark mx-2" onClick={handleUpClick}>Upper Case</button>
          <button className="btn btn-dark mx-2" onClick={handleLowClick}>Lower Case</button>
          <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-dark mx-2" onClick={handleRemoveSpace}>Remove Space</button>
        </div>
      </div>

      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} Charecters</p>
        <p>It can be read in {0.008 * text.split(" ").length} minutes approx</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
