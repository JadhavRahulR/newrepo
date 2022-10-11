import React ,{useState}from "react";

const FormText =(props) =>{
    const[vala, valb]=useState("");
    const toUpp = () =>{
      const a = vala;
      valb(a.toLocaleUpperCase());
    }

    const toLow = () =>{
      valb(vala.toLocaleLowerCase());
    }
    
    const toCopy = () => {
        let cp = document.getElementById('exampleFormControlTextarea1');
        cp.select();
        navigator.clipboard.writeText(cp.value);
     }  
     const toClear = () => {
      valb("");
  }
   const clickHandler = (event) =>{
    valb(event.target.value);

   } 
return(
<>
<div className="container my-3 ">
<h1 style={{color:props.mode==='dark'?"white":'black'}} className="head">Enter Your Text here</h1>

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={vala} onChange={clickHandler} style={{backgroundColor : props.mode==='dark'?'#41464b':'white' , color:props.mode==='dark'?"white":'black'}}></textarea>
</div>
<button className="btn btn-primary" onClick={toUpp}>ToUpperCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={toLow}>ToLowerCase</button>
<button className="btn btn-primary mx-2 my-2" onClick={toCopy}>Copy</button>
<button className="btn btn-primary mx-2 my-2" onClick={toClear}>Clear Text</button>

</div>
<div className="container my-2 ">
  
<p style={{color:props.mode==='dark'?"white":'black'}}> {vala.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {vala.length} Charectrers </p>
<p style={{color:props.mode==='dark'?"white":'black'}}>Minutes to read above Text {0.008*vala.split(" ").filter((element)=>{return element.length!==0}).length}</p>

<h4 style={{color:props.mode==='dark'?"white":'black'}}>Preview</h4>
<p style={{color:props.mode==='dark'?"white":'black'}}>{vala.length>0?vala:"Nothing To Preview"}</p>
</div>


</>
)

}
export default FormText;