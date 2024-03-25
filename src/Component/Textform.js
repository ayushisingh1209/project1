import React,{useState} from 'react'

export default function Textform(props) {
    const [text,setText] = useState('');
    const handleupClick = ()=>{
        console.log('uppercase clicked');
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("converted to uppercase","success");
    }
    const handleloClick = ()=>{
        console.log('lowercase clicked');
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("converted to lowercase","success");
    }
    const handleclrClick = ()=>{
        console.log('clr clicked');
        let newtext = "";
        setText(newtext);
        props.showalert("cleared the text","success");
    }
    const handleChange = (event)=>{
        console.log('onchanging');
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("copied to clipboard","success");
    }
    const handlespaces = ()=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("cleared extra spaces","success");
    }
  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='light'?'black':'white',cursor: 'pointer'}} value={text} onChange={handleChange}id="exampleFormControlTextarea1" rows="8" ></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleupClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleloClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclrClick}>clear text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>copy text</button>
        <button className='btn btn-primary mx-2' onClick={handlespaces}>remove extra space</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview"}</p>
    </div>
    </>
  )
}
