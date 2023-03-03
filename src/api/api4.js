import React,{useEffect, useState}from 'react';
const Myapi4=()=>{
    let [userlist,updateUser]=useState([]);
    const getUser = ()=>{
        fetch(" http://localhost:2222/userlist ")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray)
        })
    }
    useEffect(()=>{
        getUser()
    },[1])
    return(
        <div id="container">
{userlist.map((user,index)=>{
    return(
        <fieldset key={index}>
<legend>{user.name}</legend>
<p>{user.mobile}</p>
<p>{user.city}</p>
        </fieldset>
    )
})}
        </div>
    )
}
export default Myapi4;