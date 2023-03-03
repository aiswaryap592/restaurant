import Citylist from "./city"

const Mycustomer = ()=>{
    var customer = [
        {city:"Blr",user:["Ram","Same","Gopl"]},
        {city:"mlr",user:["Ram","Same","Gopl"]},
        {city:"plr",user:["Ram","Same","Gopl"]},
    ]
    return(
        <div id="container">
            <h1>{customer.length}:Custoemr</h1>
            {customer.map((cinfo,index)=>{
                return(
                    <fieldset key={index}>
                    <legend>{cinfo.city}</legend>
                    {cinfo.user.map((name,index2)=>{
                        return(
                            <p key={index2}>{name}</p>
                        )
                    })}
                </fieldset>
                )
               
            })}
           <Citylist/>
        </div>
    )
}
export default Mycustomer;