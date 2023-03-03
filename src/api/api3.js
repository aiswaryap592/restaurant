import React,{useState,useEffect}from 'react';
import {Link}from 'react-router-dom'
const Myapi3 = ()=>{
    let [itemlist,updateItem]=useState([]);
    const getItem =()=>{
     fetch("   http://localhost:2222/itemlist ")
     .then(response=>response.json())
     .then(itemArray=>{
         updateItem(itemArray);
     })
    }
    useEffect(()=>{
        getItem();
      },[1]);
      const deleteItem = (id)=>{
let url=" http://localhost:2222/itemlist/"+id
let postData={
    method:"DELETE"
}
fetch(url,postData)
.then(response=>response.json())
.then(serverRes=>{
    alert("Item Deleted")
    getItem()
})
      }
      return(
        <section id="container">
         <p><Link to="/api5">Add New Item</Link></p>
            <h1 align="center">Item List:{itemlist.length}</h1>
           
            {
                itemlist.map((item,index)=>{
                    return(
                        <fieldset key={index}>
                            <legend>{item.name}</legend>
                            <img src={item.photo}width="100"height="100"/>
                            <p>{item.price}/kg</p>
                            <p>{item.qty}</p>
                      <button onClick={deleteItem.bind(this,item.id)}>Delete</button>
                    <Link to={`/api7/${item.id}`}>Edit</Link>
                      </fieldset>
                    )
                })
            }
        </section>
      )
}
export default Myapi3;