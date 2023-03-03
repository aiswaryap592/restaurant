import Citylist from "./city";

  function Myuser () {
    var user = ["Same","Rame","Gopal"]
    return(
        <div id="container">
            <h1>{user.length}:User</h1>
            {user.map((name,index)=>{
                return(
                    <p key={index}>{index}.{name}</p>
                )
            })}
           <Citylist/>
        </div>
    )
  }
  export default Myuser;