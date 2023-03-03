import React,{useState}from 'react';
const Myapi1 = ()=>{ 
    let [userlist,updateUser]=useState([]);
const getUser = ()=>{
    fetch("user.json")
    .then(response=>response.json())
    .then(userArray=>{
        updateUser(userArray)
    })
}
    return(
 <div id="container">
    <h1>Userlist:{userlist.length}</h1>
    <button onClick={getUser}>Save</button>
    {userlist.map((name,index)=>{
        return(
            <p key={index}>{name}</p>
        )
    })}
 </div>
    )
} 
export default Myapi1;
