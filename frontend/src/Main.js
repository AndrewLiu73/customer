import {useEffect,useState} from 'react'

//components
import CustomerDetails from './customerDetails'
import CustomerForm from './customerForm'

const Home = ()=>{
    const[customers,setCustomers]= useState(null) 

    useEffect(()=>{
        const fetchCustomers = async()=>{
            const response = await fetch('/api/customer')
            const json = await response.json() //becomes an object for every customer

            if(response.ok){ //checks if response is good
                setCustomers(json)//customers is an array of json values
                
            }
        }
        fetchCustomers()
    },[]); //only fires once
    
    return(
        <div className ="home">
            <div className="customer">
                {customers && customers.map(customer=>(
                    <CustomerDetails customer ={customer} key ={customer._id}/>
                ))} 
                {/* returning a template */}
            </div>
            <CustomerForm/>
        </div>
    )
}
export default Home;