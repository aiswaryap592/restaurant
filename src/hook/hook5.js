import React,{useState}from 'react';
const Myhook5 =()=>{
    let user = [
        {city:"Blr",user:["Alex","Same","Ram"],photo:"kiwi.jpg"},
        {city:"Mlr",user:["Qlex","Uame","Ram"],photo:"apple.jpg"},
        {city:"Qlr",user:["plex","Same","Ram"],photo:"mango.jpg"},
    ]
    let[userinfo,updateinfo]=useState(user[0])
    const getdetails=(index)=>{
         updateinfo(user[index]);
    }
    return(
        <div id="container">
       <h2>User:{user.length}</h2>

       <div id="leftblock">
       {user.map((myuser,index)=>{
        return(
            <p key={index} onClick={getdetails.bind(this,index)}>{myuser.city}</p>
        )
       })}
       </div>
       <div id="rightblock">
        <h2>Customers from:{userinfo.city}</h2>
        <p>CityList</p>
        {userinfo.user.map((name,index2)=>{
            return(
                <p key={index2}>{name}</p>
            )
        })}

       </div>
       <div id="imageblock">
        <img src={userinfo.photo} height="200"/>
       </div>
        </div>
    )
}
export default Myhook5;