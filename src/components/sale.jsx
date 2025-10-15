import React from 'react'

const propertiesForSale = [
  { id: 1, title: 'Modern Family House', location: 'Los Angeles, CA', price: '$950,000', bedrooms: 4, bathrooms: 3, image: '/r1.png' },
  { id: 2, title: 'Luxury Apartment', location: 'New York, NY', price: '$1,250,000', bedrooms: 3, bathrooms: 2, image: '/r2.png' },
  { id: 3, title: 'Cozy Cottage', location: 'Austin, TX', price: '$450,000', bedrooms: 2, bathrooms: 1, image: '/r3.png' }
]

const Sale = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>For Sale</h1>
      <p>Browse properties available for purchase.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {propertiesForSale.map((p) => (
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

export default Sale


