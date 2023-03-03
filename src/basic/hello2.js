import Citylist from "./city";

const Myproduct = ()=>{
    var product = [
        
        {
            name:"Apple",
            price:300,
            qty:10
        },
        {
            name:"Mango",
            price:300,
            qty:10
        },
        {
            name:"Orange",
            price:300,
            qty:10
        },

    ]
    return(
        <div id="container">
            <h1>{product.length}:Product</h1>
            <table cellpadding="10"border="1"bordercolor="red">
                <thead>
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((pdata,index)=>{
                        return(
                            <tr key={index}>
                            <td>{index}</td>
                            <td>{pdata.name}</td>
                            <td>{pdata.price}</td> 
                            <td>{pdata.qty}</td>
                        </tr>
                        )
                       
                    })}
                </tbody>
            </table>
           <Citylist/>
        </div>
    )
}
export default Myproduct;