import React,{useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
const Myapi7=()=>{
    const {itemid}=useParams()
    let[itemname,picName]=useState("")
    let[itemprice,picPrice]=useState("")
    let[itemqty,picQty]=useState("")
    let[itemphoto,picPhoto]=useState("")
    let [msg,updatemsg]=useState("")
    const save=()=>{
       let url=" http://localhost:2222/itemlist"
       let itemdetails ={
        name:itemname,
        price:itemprice,
        qty:itemqty,
        photo:itemphoto
       }
       let postData={
        headers:{'Content-Type':'application/json'},
        method:"POST",
        body:JSON.stringify(itemdetails)
       }
       fetch(url,postData)
       .then(response=>response.json())
       .then(serverRes=>{
        updatemsg(itemname+"saved and id is:"+serverRes.id)
       })
    }
    useEffect(()=>{
        let url = "http://localhost:2222/itemlist/"+itemid
        fetch(url)
        .then(response=>response.json())
        .then(iteminfo=>{
            picName(iteminfo.name)
            picPrice(iteminfo.price)
            picQty(iteminfo.qty)
            picPhoto(iteminfo.photo)
        })
    },[1])
    return(
        <div id="container">
<h1 align="center">Ad Item</h1>
<p align="center">Enter Details</p>
<p>{msg}</p>
<table align="center"cellPadding={10}>
    <tbody>
        <tr>
            <th>Item Name</th>
            <td><input type="text"onChange = {obj=>picName(obj.target.value)}value={itemname}/></td>
        </tr>
        <tr>
            <th>Item Price</th>
            <td><input type="text" onChange = {obj=>picPrice(obj.target.value)} value={itemphoto}/></td>
        </tr>
        <tr>
            <th>Item Qty</th>
            <td><input type="text" onChange = {obj=>picQty(obj.target.value)} value={itemqty} /></td>
        </tr>
        <tr>
            <th>Item Photo</th>
            <td><input type="text" onChange = {obj=>picPhoto(obj.target.value)} value={itemphoto}/></td>
        </tr>
        <tr>
            <th colSpan={2}>
                <img src={itemphoto} height="200" width="200"/>
            </th>
        </tr>
        <tr>
            <th colSpan={2}>
                <button onClick={save}>Save</button>
            </th>
        </tr>
    </tbody>
</table>
        </div>
    )
}
export default Myapi7;