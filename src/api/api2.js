import React,{useEffect, useState}from 'react';
const Myapi2 = ()=>{
    let[userlist,updateUser]=useState([]);
    const getUser=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
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
<h1>{userlist.length}</h1>
<table align="center"cellPadding={10}>
    <thead>
        <tr>
            <th>SL.NO</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Company</th>
        </tr>
    </thead>
   <tbody>
    {userlist.map((user,index)=>{
        return(
            <tr key={index}>
<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>
<td>{user.phone}</td>
<td>{user.address.city}</td>
<td>{user.company.name}</td>
            </tr>
        )
    })}
   </tbody>
</table>
</div>
    )
}
export default Myapi2;
