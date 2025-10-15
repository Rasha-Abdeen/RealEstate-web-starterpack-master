import React from 'react'

const propertiesToLet = [
  { id: 1, title: 'Downtown Studio', location: 'San Francisco, CA', price: '$2,400/mo', bedrooms: 0, bathrooms: 1, image: '/r2.png' },
  { id: 2, title: '2-Bedroom Apartment', location: 'Chicago, IL', price: '$1,850/mo', bedrooms: 2, bathrooms: 1, image: '/r1.png' },
  { id: 3, title: 'Suburban Townhouse', location: 'Seattle, WA', price: '$2,900/mo', bedrooms: 3, bathrooms: 2, image: '/r3.png' }
]

const ToLet = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>To Let</h1>
      <p>Find properties available for rent.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {propertiesToLet.map((p) => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 .25rem' }}>{p.title}</h3>
              <small style={{ color: '#666' }}>{p.location}</small>
              <div style={{ marginTop: '.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.bedrooms} bd • {p.bathrooms} ba</span>
                <strong>{p.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToLet


