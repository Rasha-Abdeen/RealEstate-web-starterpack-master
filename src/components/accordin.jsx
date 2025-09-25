import React from 'react'
import {useState, useEffect, useRef} from "react";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { RiArrowDropDownLine } from 'react-icons/ri'


const accordin = () => {
    // calling API to get data and store it in a variable then i would like to diplay it in the accordign section

     const [quotes, setQuotes] = useState([]);

     const [toggle, setToggle] = useState(null);
   
     
        const handletoggle = (id) =>{
            if (toggle === id){
                 setToggle(null);
                 console.log("Toggle Status is", toggle)
    
    
            }else{
                setToggle(id);
    
            }
         }

 

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
            <img src='./hero-image.png' alt='accordin image' style={{width:"750px", height:"500px", borderRadius:"30px"}}></img>
        </div>
     
        <div className='flex-right' >
            <h2 className='h2' style={{color:"#d1c601"}}>Trusted by Leading Companies</h2>
            <p className='pargraph'>At Homyz we employ an enthusiastic team of professionals to help guide you with the process of buying or selling a property in Ireland.
            </p>
            <div className='accordin-content'>
                {quotes.map((quote)=>(
                    <div key={quote.id} className='accordin-item' style={{border:"1px solid #ccc", borderRadius:"5px", marginBottom:"10px", padding:"10px", textAlign:"left"}}>
                        <h3>{quote.company}
                        <RiArrowDropDownLine style={{fontSize:"30px", cursor:"pointer"}} onClick={()=>handletoggle(quote.id)}/>
                        </h3> 
                        <div className={toggle === quote.id  ? "accordin-content show": "accordin-content hiden"}>
                        <p>{quote.testimonial}</p>
                        </div>
                    </div>
                ))}

                <button> About US</button>
           
        </div>

        


    </div>


    </div>
    

  )
}

export default accordin
