import Citylist from "./city";
import Details from "./empdetails";

const Emplist = ()=>{
    return(
        <div id="container">
            <Details name="Ajit" age="20years" edu="MS" city="Blr"/>
            <Details name="Alex" age="20years" edu="MS" city="Blr"/>
            <Details name="Same" age="20years" edu="MS" city="Blr"/>
            <Details name="Ram" age="20years" edu="MS" city="Blr"/>
            <Citylist/>
        </div>
    )
}
export default Emplist;