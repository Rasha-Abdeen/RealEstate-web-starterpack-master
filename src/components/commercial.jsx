import React from 'react'

const commercialProps = [
  { id: 1, title: 'Retail Space', location: 'Dallas, TX', price: '$4,200/mo', area: '1,800 sqft', image: '/r1.png' },
  { id: 2, title: 'Office Floor', location: 'Boston, MA', price: '$22,000/mo', area: '8,500 sqft', image: '/r2.png' },
  { id: 3, title: 'Warehouse', location: 'Phoenix, AZ', price: '$9,800/mo', area: '12,000 sqft', image: '/r3.png' }
]

const Commercial = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Commercial</h1>
      <p>Explore commercial properties.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {commercialProps.map((p) => (
          <div key={p.id} style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
            <img src={p.image} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0 0 .25rem' }}>{p.title}</h3>
              <small style={{ color: '#666' }}>{p.location}</small>
              <div style={{ marginTop: '.5rem', display: 'flex', justifyContent: 'space-between' }}>
                <span>{p.area}</span>
                <strong>{p.price}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Commercial


