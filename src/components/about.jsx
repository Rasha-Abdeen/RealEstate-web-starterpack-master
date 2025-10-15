import React from 'react'

const About = () => {
  return (
    <div style={{ padding: '2rem', lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <p>
        We help people find homes they love and investments that grow. Our team
        combines local market expertise with friendly guidance to make buying,
        selling, and renting property simple and transparent.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>10+ Years</h3>
          <small>In business</small>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>1,500+</h3>
          <small>Homes sold</small>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>4.9/5</h3>
          <small>Client rating</small>
        </div>
        <div style={{ padding: '1rem', border: '1px solid #eee', borderRadius: 8 }}>
          <h3 style={{ margin: 0 }}>20+ Areas</h3>
          <small>We cover locally</small>
        </div>
      </div>

      <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fafafa', borderRadius: 8 }}>
        <h2>Contact</h2>
        <p style={{ margin: 0 }}>
          Email: contact@realestate.example • Phone: (555) 123-4567
        </p>
        <p style={{ margin: 0 }}>Mon–Fri, 9:00–18:00</p>
      </div>
    </div>
  )
}

export default About
