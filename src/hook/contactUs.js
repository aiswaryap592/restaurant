import React,{useState}from 'react';
const Contactus =()=>{
let[fullname,picname]=useState("")
let[errorname,updateerrorname]=useState("")
let[email,picemail]=useState("");
let[erroremail,updateerroremail]=useState("")
let[mobile,picmobile]=useState("");
let[errormobile,updateerrormobile]=useState("")
let[city,piccity]=useState("");
let[errorcity,updateerrorcity]=useState("")
let[address,picaddress]=useState("");
let[erroraddress,updateerroraddress]=useState("")
let[pincode,picpincode]=useState("");
let[errorpincode,updateerrorpincode]=useState("")
const save=()=>{
    if(fullname==""){
        updateerrorname("Invalid Name")
    }
    else{
        updateerrorname("")
    }
    if(email==""){
        updateerroremail("Invalid email")
    }
    else{
        updateerroremail("")
    }
    if(mobile==""){
        updateerrormobile("Invalid Mobile")
    }
    else{
        updateerrormobile("")
    }
    if(city==""){
        updateerrorcity("Invalid city")
    }
    else{
        updateerrorcity("")
    }
    if(address==""){
        updateerroraddress("Invalid Address")
    }
    else{
        updateerroraddress("")
    }
    if(pincode==""){
        updateerrorpincode("Invalid Pincode")
    }
    else{
        updateerrorpincode("")
    }
}
    return(
        <div id="container">
<h1 align="center">Contact Us</h1>
<table align="center"cellPadding={10}id="contact">
    <tr>
        <th>FullName</th>
        <td><input type="text"onChange={obj=>picname(obj.target.value)}/></td>
        <td><small>{errorname}</small></td>
    </tr>
    <tr>
        <th>Email</th>
        <td><input type="text"onChange={obj=>picemail(obj.target.value)}/></td>
        <td><small>{erroremail}</small></td>
    </tr>
    <tr>
        <th>Mobile</th>
        <td><input type="text"onChange={obj=>picmobile(obj.target.value)}/></td>
        <td><small>{errormobile}</small></td>
    </tr>
    <tr>
        <th>City</th>
        <td>
            <select onChange={obj=>piccity(obj.target.value)}>
                <option value="">Choose</option>
                <option>Mlr</option>
                <option>Clr</option>
            </select>
        </td>
        <td><small>{errorcity}</small></td>
    </tr>
    <tr>
        <th>Address</th>
        <td><input type="text"onChange={obj=>picaddress(obj.target.value)}/></td>
        <td><small>{erroraddress}</small></td>
    </tr>
    <tr>
        <th>Pincode</th>
        <td><input type="text"onChange={obj=>picpincode(obj.target.value)}/></td>
        <td><small>{errorpincode}</small></td>
    </tr>
    <tr>
        <th colSpan={3} >
            <button onClick={save}>Save</button>
        </th>
    </tr>
</table>
        </div>
    )
}
export default Contactus;