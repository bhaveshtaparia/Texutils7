import React,{useState} from 'react'
export default function TextForm(props) {

    const  handleUpClick=()=>{
        console.log("uppercase Was Clicked "+text)
        let NewText=text.toUpperCase();
        setText(NewText)
        
    }
    const  handleUpClicked=()=>{
        console.log("lowercase Was Clicked "+text)
        let NewText=text.toLowerCase();
        setText(NewText)
        
    }
    const  handleOnChange=(event)=>{
        console.log("on change ")
        setText(event.target.value)
    }
    const  handleUpClear=(event)=>{
        console.log("clear ")
        setText("")
      }
    
    const  handleUpCopy=(event)=>{
      
      console.log("copy ")
var text=document.getElementById("mybox");
      text.select()
        navigator.clipboard.writeText(text.value)
      }
    
      const  handleUpManage=(event)=>{
        console.log("clear ")
       let NewText=text.split(/[ ]+/);
       setText(NewText.join(" "))
    }
    const [text, setText]=useState('enter text here');
  return (
<>
    <div>
        {/* <form> */}
   <div className="mb-3">
    <h3 style={props.style2}>{props.heading}</h3>
  <textarea style={props.style} className="form-control pt-5 pb-5 " aria-label="With textarea"  onChange={handleOnChange} value={text} id="mybox"></textarea>
     </div>

  <button type="submit" onClick={handleUpClick} className="btn btn-primary">Convert to UpperCase</button>
  <button  type="submit"  onClick={handleUpClicked} className="btn btn-primary ml-3">Convert to LoverCase</button>
  <button  type="submit"  onClick={handleUpClear} className="btn btn-primary ml-3">Clear Chat</button>
  <button  type="submit"  onClick={handleUpManage} className="btn btn-primary ml-3">ManageSpace</button>
  <button  type="submit"  onClick={handleUpCopy} className="btn btn-primary ml-3">Copy</button>

{/* </form> */}
</div>
<div className='container mt-3' style={props.style2}>
<h1> Text summary</h1>

{/* if({text.length}==0) ("<p>0 Words  and {text.length} character </p>")

 else{
} */}
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words  and {text.length} character </p>

<p>If you read the text it take {(text.split(/\s+/).filter((element)=>{return element.length!==0}).length)*(1/125)} minutes</p>
<h3>Prieview</h3>
<p>{text}</p>
</div>
  </>
  )
}
