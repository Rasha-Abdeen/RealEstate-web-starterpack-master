import React from 'react'
import {useState, useEffect} from "react";
import { MdCancel, MdAnalytics } from "react-icons/md";

const accordin = () => {
    // calling API to get data and store it in a variable then i would like to diplay it in the accordign section

     const [quotes, setQuotes] = useState([]);

     useEffect(() => {
        const fetchdata= async()=>{
            try{
            const response = await fetch('./db.json')
            const data = await response.json();
            setQuotes(data);
            }
            catch(error){
                console.log("Error Fetching Data:", error);
            }
            
     }
     fetchdata();
    },[]);
    


  return (
  
    <div className='accordin-container' style={{marginBottom:"10px",padding:"20px"}} >
        <div className='flex-left'>
            <img src='./equinix.png' alt='accordin image'></img>
        </div>
     
        <div className='flex-right' >
            <h2 className='h2'>Trusted by Leading Companies</h2>
            <p className='pargraph'>{}</p>
            <div className='accordin'>
                {quotes.map((quote)=>(
                    <div key={quote.id} className='accordin-item' style={{border:"1px solid #ccc", borderRadius:"5px", marginBottom:"10px", padding:"10px", textAlign:"left"}}>
                        <h3>{quote.apartment}</h3>
                        <p>"{quote.Price}"</p>
                    </div>
                ))}
           
        </div>



    </div>


    </div>
    

  )
}

export default accordin
