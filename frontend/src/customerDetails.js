
const CustomerDetails =({customer})=>{
    const deleteCustomer = (id)=>{
        fetch(`/api/customer/${id}`,{
            method:"DELETE",
        })
            .then(res => res.json())
            .then(res =>{
                if(res.status ===200){
                    deleteCustomer();
                }
                console.log("success")
            })
            .catch(err=> alert(err.message))
        }
    return(
        <div className="customer-details">
            <h4>{customer.FirstName}</h4>
            <p><strong>Title: </strong>{customer.title}</p>
            <p><strong>FirstName: </strong>{customer.FirstName}</p>
            <p><strong>Surname: </strong>{customer.Surname}</p>
            <p><strong>Mobile: </strong>{customer.Mobile}</p>
            <p><strong>Email: </strong>{customer.Email}</p>
            <p><strong>Address1: </strong>{customer.Address1}</p>
            <p><strong>Address2: </strong>{customer.Address2}</p>
            <p><strong>Town: </strong>{customer.Town}</p>
            <p><strong>County: </strong>{customer.County}</p>
            <p><strong>Eircode: </strong>{customer.Eircode}</p>
            <p>{customer.createdAt}</p>
            <button onClick = {()=>deleteCustomer(customer._id)}>Delete</button>
            <button onClick>Update</button>
            {/* <button onClick = {()=>updateCustomer(customer._id)}>Update</button> */}


        </div>
    )
}
export default CustomerDetails;