import React,{useState}from 'react';
const Myapi5=()=>{
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
    return(
        <div id="container">
<h1 align="center">Ad Item</h1>
<p align="center">Enter Details</p>
<p>{msg}</p>
<table align="center"cellPadding={10}>
    <tbody>
        <tr>
            <th>Item Name</th>
            <td><input type="text"onChange = {obj=>picName(obj.target.value)}/></td>
        </tr>
        <tr>
            <th>Item Price</th>
            <td><input type="text" onChange = {obj=>picPrice(obj.target.value)} /></td>
        </tr>
        <tr>
            <th>Item Qty</th>
            <td><input type="text" onChange = {obj=>picQty(obj.target.value)}  /></td>
        </tr>
        <tr>
            <th>Item Photo</th>
            <td><input type="text" onChange = {obj=>picPhoto(obj.target.value)}/></td>
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
export default Myapi5;