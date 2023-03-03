import React,{useState}from 'react';
const Myhook3 = ()=>{
let temp={name:"Yadav" ,mobile:9999999};
    let [userlist,updateUser]=useState([temp])
let [fullname,picname]=useState("");
let [mobileno,picmobileno]=useState("");
let [msg,updatemsg]=useState("Enter Details")
let [userindex,updateIndex]=useState(-1)
    const save=()=>{
        let newuser = {name:fullname,mobile:mobileno};
        if(userindex==-1){
            updateUser(userlist=>[...userlist,newuser]);
            updatemsg(fullname + "saved successfully")
        }
        else{
            let newuser = {name:fullname,mobile:mobileno};
            userlist[userindex]=newuser;
updateIndex(-1);
            picname("");
            picmobileno("");
        }
        
        
    }
    const deleteuser =(index)=>{
        userlist.splice(index,1);
        updateUser(userlist=>[...userlist]);
    }

    const editUser=(index)=>{
        picname(userlist[index].name);
        picmobileno(userlist[index].mobile);
        updateIndex(index)
    }
    return(
        <div id="container">
<h1>Spread Operator Examples</h1>
<button onClick={save}>Save</button>
<input type="text"placeholder="Enter Name"onChange={obj=>picname(obj.target.value)}value={fullname}/>
<input type="text"placeholder="Enter Mobile"onChange={obj=>picmobileno(obj.target.value)}value={mobileno}/>
<p>{userindex}</p>
<table align="center"cellPadding={10}>
 <thead>
    <tr>
        <th>Sl.NO</th>
      <th>Name</th>
      <th>Mobile No</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
 </thead>
 <tbody>
    {userlist.map((user,index)=>{
        return(
            <tr key={index}>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.mobile}</td>
                <td><button onClick={editUser.bind(this,index)}>Edit</button></td>
                <td><button onClick={deleteuser.bind(this,index)}>Delete</button></td>
            </tr>
        )
    })}
 </tbody>
</table>
        </div>
    )
}
export default Myhook3;