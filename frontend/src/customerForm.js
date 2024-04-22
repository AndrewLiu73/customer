import { useState } from "react"


const CustomerForm = () =>{
    
    const [title,setTitle] = useState('')
    const [FirstName,setFirst] = useState('')
    const [Surname,setSurname] = useState('')
    const [Mobile,setMobile] = useState('')
    const [Email,setEmail] = useState('')
    const [Address1,setAddress1] = useState('')
    const [Address2,setAddress2] = useState('')
    const [Town,setTown] = useState('')
    const [County,setCounty] = useState('')
    const [Eircode,setEircode] = useState('')
    const [error,setError] = useState(null)
    // const [edit,setEdit] = useState('') //if it is not in edit mode

    // const customer1 = {edit}
    // const response1 =  fetch('/api/customers1/',{
    //     method: 'PATCH',
    //     body: JSON.stringify(customer1),
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }
    // })
    const handleSubmit = async (e) =>{
        e.preventDefault()

        const customer = {title,FirstName,Surname,Mobile,Email,Address1,Address2,Town,County,Eircode}

        
        const response = await fetch('/api/customer',{
            method: 'POST',
            body: JSON.stringify(customer),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setFirst('')
            setSurname('')
            setMobile('')
            setEmail('')
            setAddress1('')
            setAddress2('')
            setTown('')
            setCounty('')
            setEircode('')
            setError(null)
            
        }
    }
return(
    <form className = "create" onSubmit={handleSubmit}> 
        <h3> Add a New Customer</h3>
        <label>Title: </label>
        <input 
            type ="text"
            onChange={(e)=> setTitle(e.target.value)} 
            value={title}
        />
        <label>First Name: </label>
        <input 
            type ="text"
            onChange={(e)=> setFirst(e.target.value)} 
            value={FirstName}
        />
        <label>Surname: </label>
        <input 
            type ="text"
            onChange={(e)=> setSurname(e.target.value)} 
            value={Surname}
        />
        <label>Mobile: </label>
        <input 
            type ="number"
            onChange={(e)=> setMobile(e.target.value)} 
            value={Mobile}
        />
        <label>Email: </label>
        <input 
            type ="text"
            onChange={(e)=> setEmail(e.target.value)} 
            value={Email}
        />
        <label>Address1: </label>
        <input 
            type ="text"
            onChange={(e)=> setAddress1(e.target.value)} 
            value={Address1}
        />
        <label>Address2: </label>
        <input 
            type ="text"
            onChange={(e)=> setAddress2(e.target.value)} 
            value={Address2}
        />
        <label>Town: </label>
        <input 
            type ="text"
            onChange={(e)=> setTown(e.target.value)} 
            value={Town}
        />
        <label>County: </label>
        <input 
            type ="text"
            onChange={(e)=> setCounty(e.target.value)} 
            value={County}
        />
        <label>Eircode: </label>
        <input 
            type ="text"
            onChange={(e)=> setEircode(e.target.value)} 
            value={Eircode}
        />
        <button>Add Customer</button>
        {error &&<div className ="error">{error}</div>}
    </form>


        
    )
}
export default CustomerForm