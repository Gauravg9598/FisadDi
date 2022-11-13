import React, {useState} from 'react'
import capitalize from 'capitalize';
// import TitleCase from 'react-title-case';

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
      props.showAlert("Text Cleared", "success");
    }

    const handleCapitalizetClick =() =>{
      let capNewText = capitalize.words(text);
      // let newText = capNewText.toUpperCase();
      setText(capNewText);
      props.showAlert("Word is captilize", "success");
    }
    const handleCapSentenseClick =() =>{
      let capSentense = text[0].toUpperCase() + text.slice(1);
      setText(capSentense);
      props.showAlert("First letter is captilize", "success");
    }
    const handleCopyText=() =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copy to clicpboard!", "success");
    }
    const handleExtraSpaces =() =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Exter space is removed", "success");
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
            <textarea className="form-control" style={{backgroundColor : props.mode ==='dark'? '#13466e' : 'white', color : props.mode ==='dark'? 'white' : '#13466e'}} value={text} placeholder="Enter Text to write somethings" onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>
       <div>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Upper Case</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleLwClick}>Lower Case</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleClearTextClick}>Clear Text</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalizetClick}>Capitalize Case</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleCapSentenseClick}>Capitalize Sentense</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyText}>Copy Text</button>
         <button disabled={text.length ===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       </div>
       <div>
         
       </div>
    </div>
    <div className="container my-3" style={{color : props.mode ==='dark'? 'white' : '#042743'}}> 
    <h1>Your Text Summary</h1>
    <p>{text.split(/ +/).join(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : 'Enter in the text box to show in th preview'}</p>
    </div>
    </>
  )
}
