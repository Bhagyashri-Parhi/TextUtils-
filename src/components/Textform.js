import React, { useState } from 'react'


export default function Textform(props) {
    const [text, setText] = useState("");
    
    const handleClick = () => {
        // console.log("upper was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handlelowClick = () => {
        // console.log("upper was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }
    const handleClearClick = () => {
        // console.log("upper was clicked");
        let newText = ("");
        setText(newText);
        props.showAlert("cleared all content!","success");
    }
    const handleOnChange = (event) => {
        // console.log("onchange was hovered" + text);
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed all extra spaces!","success");
    }
    const handleRedundancy = () => {
        let set1 = new Set(text.split(" ")); let newText = Array.from(set1).join(" ");
        setText(newText);
        props.showAlert("removed redundancies!","success");
    }
    // text="newtext"    wrong way to change the state
    // setText=("newtext")    right way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
                <h3>{props.heading}</h3>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
                    Extra spaces
                </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleRedundancy}>
                    Redundancy
                </button>

            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h3>{props.heading}</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!== 0}).length} words and  {text.length}characters</p>  
                <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"enter something in text box above to preview it here"}</p>
            </div>
        </>
    )
}
