import React from 'react'

const hero = () => {
return (
    <div
        className='hero-container'
        style={{
            backgroundImage: "url('/r3.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
    >
        <div className='hero' style={{ textAlign: 'center', color: '#fff' }}>
            <h1>Your Dream Home Awaits</h1>
            <p>Discover the best properties in town with us.</p>
            <button className='cta-btn'>Get Started</button>
        </div>
    </div>
)
}

export default hero
