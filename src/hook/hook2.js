import React,{useState}from 'react';
const Myhook2 = ()=>{
    let [booklist,setbooklist]=useState(["html","css","js","react"]);
let [newbook,picbook]=useState("");
    const save = ()=>{
        setbooklist(booklist=>[...booklist,newbook]);
    }
    return(
        <div id="container">
<h1>React useState()-Hook Example</h1>
<p>Enter Your Book:<input type="text"onChange={obj=>picbook(obj.target.value)}/></p>
<button onClick={save}>Save</button>
<i>You Entered :{newbook}</i>
<p>Total Books : {booklist.length}</p>
{booklist.map((name,index)=>{
    return(
        <p key={index}>{index}.{name}</p>
    )
})}
        </div>
    )
}
export default Myhook2;