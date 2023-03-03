import React,{useState}from 'react';
const Myhook4=()=>{
    let [citylist,updateCity]=useState(["Blt","Mlr","Klr","Plr"]);
    let [newcity,piccity]=useState("");
let [msg,updatemsg]=useState("Enter Details");

    const save =()=>{
        updateCity(citylist=>[...citylist,newcity]);
        updatemsg(newcity + "saved ");
        piccity("");
    }
    const deleteuser=(index)=>{
        citylist.splice(index,1);
        updateCity(citylist=>[...citylist]);
    }
    return(
        <div id="container">
            <button onClick={save}>Save</button>
            <input type="text"placeholder="Enter City"onChange={obj=>piccity(obj.target.value)}value={newcity}/>
            <button>Delete</button>
       {citylist.map((name,index)=>{
        return(
            <div>
            <p key={index}>{index}.{name}</p>
            <button onClick={deleteuser.bind(this,index)}>Delete</button>
            </div>
        )
       })}
        </div>
    )
}
export default Myhook4;