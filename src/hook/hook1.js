import React,{useState}from 'react';
const Myhook =()=>{
let city=["Bangalore","Mumbai","Qlr","Wlr"];
const [Bangalore,Mumbai,Qlr,Wlr]=city;
let [abc,xyz]=useState(100);



const one=()=>{
    xyz(abc + 10);
}
const two=()=>{
    xyz(abc - 10);
}





    return(
<div>
    <h1>Hooks & Usestate</h1>
    <p>{city[0]}</p>
    <p>{Mumbai}</p>
    <p>{Qlr}</p>
    <p>{Wlr}</p>
    <p>{abc}</p>
    <button onClick={one}>Click + 10</button>
    <button onClick={two}>Click - 10</button>
</div>
    )
}
export default Myhook;