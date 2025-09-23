import React from 'react'
import Button from 'react-bootstrap/Button';

const hero = () => {
return (
    <div
        className='hero-container'
        style={{
            backgroundImage: "url('/r3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
    >
        <div className='hero' style={{ textAlign: 'center', color: '#fff' , marginBottom:"20px" }}>
            <h1>Your Dream Home Awaits</h1>
            <p>Discover the best properties in town with us.</p>
        </div>
        <div className='search-button' style={{display:"flex", gap:"10px"}} >
        <Button variant="outline-light" style={{border: '2px solid', fontSize:'20px'}}> Looking To Sell > </Button>
        <Button variant="outline-light" style={{border: '2px solid', fontSize:'20px'}}> Looking To Buy > </Button>
        <Button variant="outline-light" style={{border: '2px solid', fontSize:'20px'}}> Looking To Let > </Button>
        <Button variant="outline-light" style={{border: '2px solid', fontSize:'20px'}}> Looking To Rent > </Button>


        </div>
    </div>
)
}

export default hero
