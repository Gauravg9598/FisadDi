import React, {useState} from 'react'
import capitalize from 'capitalize';
import TitleCase from 'react-title-case';

export default function TextForm(props) {
  const[text, setText] = useState('')
  
    const handleLwClick =() =>{
        let newLowerCaseText = text.toLowerCase();
        setText(newLowerCaseText);
        props.showAlert("Converted to Lower case", "success");
    }

    const handleUpClick = () =>{
        // console.log("Uppercase was cicked");
        debugger;
        let newUpperCaseText = text.toUpperCase();
        setText(newUpperCaseText);
        props.showAlert("Converted to Upper case", "success");
    }

    const handleClearTextClick =() =>{
      let clearText ="";
      setText(clearText);
    }

    const handleCapitalizetClick =() =>{
      let capNewText = capitalize.words(text);
      // let newText = capNewText.toUpperCase();
      setText(capNewText);
    }
    const handleCapSentenseClick =() =>{
      let capSentense = text[0].toUpperCase() + text.slice(1);
      setText(capSentense);
    }
    const handleCopyText=() =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    const handleOnChange =(event) =>{
        // console.log("Onchanged click");
        setText(event.target.value);
    }
    
  return (
    <>
    <div className='container' style={{color : props.mode ==='dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor : props.mode ==='dark'? 'grey' : 'white', color : props.mode ==='dark'? 'white' : 'black'}} value={text} placeholder="Enter Text to write somethings" onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <div>
         <button className="btn btn-primary mx-2" onClick={handleUpClick}>Upper Case</button>
         <button className="btn btn-primary mx-2" onClick={handleLwClick}>Lower Case</button>
         <button className="btn btn-primary mx-2" onClick={handleClearTextClick}>Clear Text</button>
         <button className="btn btn-primary mx-2" onClick={handleCapitalizetClick}>Capitalize Case</button>
         <button className="btn btn-primary mx-2" onClick={handleCapSentenseClick}>Capitalize Sentense</button>
         <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
         <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
       <div>
         
       </div>
    </div>
    <div className="container my-3" style={{color : props.mode ==='dark'? 'white' : '#042743'}}> 
    <h1>Your Text Summary</h1>
    <p>{text.split(/ +/).join(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(/ +/).join(' ').length} Minutes</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : 'Enter in the text box to show in th preview'}</p>
    </div>
    </>
  )
}
