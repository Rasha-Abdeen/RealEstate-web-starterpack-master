import React from 'react'

const footernav = () => {
  return (
    <div className='footernavbar'>
        <div className='footer-aboutus'>
            <h3 style={{color:"#d1c601"}}>About Us</h3>
            <p style={{width:"80%"}}> Homeyz is a prominent property agency and an integral part of Ireland’s extensive branch network..</p>
            <p>About Us</p>
            <p>Our Blogs</p>
        </div>
        <div className='footer-mainlinks' >
            <h3 style={{color:"#d1c601"}}>Main Links</h3>
                <p>Home</p>
                <p>Buy</p>
                <p>Rent</p>
                <p>To Let</p>
        </div>
        <div className='footer-contact'>
            <h3 style={{color:"#d1c601"}}> 
                Contact Us
            </h3>
            <p>66 Clanbrassil Street, Dundalk, Co. Louth, A91 HY99.</p>
            <p>+353 42 935 1011</p>
            <p>+353 42 935 1012</p>
            <p>info@homeyz.coms</p>


        </div>
      
    </div>
  )
}

export default footernav
