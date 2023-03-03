const Details=(allprops)=>{
    return(
        <div>
            <fieldset>
                <legend>{allprops.name}</legend>
                <p>{allprops.age}</p>
                <p>{allprops.edu}</p>
                <p>{allprops.city}</p>
            </fieldset>
        </div>
    )
}
export default Details;