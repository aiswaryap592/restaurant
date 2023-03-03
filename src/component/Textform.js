import { useState } from "react";

const Textform = (props)=>{
    let [text,updateText]=useState("Enter Text Details");
const save = ()=>{
    let newText=text.toUpperCase();
    updateText(newText);

}
const dave = ()=>{
    let newtext2 =text.toLowerCase();
    updateText(newtext2);
}
const mave = ()=>{
let newtext3 = "";
updateText(newtext3);
}
const lave = ()=>{
    let newtext4 = text[0].toUpperCase() + text.substring(1);
    

    updateText(newtext4)
}
const rave = ()=>{
    let newtext5 = text[0].toLowerCase() + text.substring(1);
    updateText(newtext5);
}

    return(
       <>
            <div className="mb-3">
<h4 className="mx-4 p-4">{props.heading}🤞</h4>
              <div className="col-lg-10 mx-4">
                <textarea className="form-control m-3 "id="myBox"rows="8"value={text}onChange={obj=>updateText(obj.target.value)}></textarea>
            </div>
            <div className="mx-4">
            <button className="btn btn-primary text-white m-3"onClick={save}> UpperCase🙂 </button>
            <button className="btn btn-danger text-white m-3"onClick={dave}> Lowercase🌝 </button>
            <button className="btn btn-success text-white m-3"onClick={mave}>Clear Case🤨</button>
            <button className="btn btn-info text-white m-3"onClick={lave}>FCapitalise Case😐</button>
            <button className="btn btn-secondary text-white m-3"onClick={rave}>F Lowerise Case😗</button>
            </div>
            </div>
            <div className="container mx-4 my-3">
                <h4 className="my-2">Your Text Summary</h4>
                <p className="my-2">There are <small className="text-danger">{text.split(" ").length} words</small>  and <small className="text-danger">{text.length}characters</small> </p>
                <h3 className="text-success">Preview</h3>
                <p className="text-danger">{text}</p>
            </div>
            </>
    )
}
export default Textform;