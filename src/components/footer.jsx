import React, { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker,Pin, InfoWindow } from '@vis.gl/react-google-maps';


const reviews = [
  {
    id: 1,
    name: 'John Doe',
    rating: 5,
    comment: 'Amazing service! Highly recommend to everyone.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: 2,
    name: 'Jane Smith',
    rating: 4,
    comment: 'Great experience, though delivery was a bit slow.',
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    rating: 3,
    comment: 'Good product but could be cheaper.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
];

const Footer = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [ratings, setRatings] = useState({});
  const position= {lat: 51.5074, lng: -0.1278};
  const [openInfo, setopenIfo] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex(prevIndex =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);



  const handlePrevious = () => {
    setCurrentReviewIndex(prev =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentReviewIndex(prev =>
      prev === reviews.length - 1 ? 0 : prev + 1
    );
  };

  const currentReview = reviews[currentReviewIndex];
  const userRating = ratings[currentReview.id] || 0;




  return (
    <>
    <div className="reviews-section">
      <div className="reviews-item">
        <h2 style={{textAlign:"center", fontSize:"34px", fontWeight:"bold", marginBottom:"20px", color:"#fffeee" }}>
          Customer Reviews
        </h2>

        <div key={currentReview.id} className="space-y-4">
          <img
            src={currentReview.avatar}
            alt={currentReview.name}
            className="w-20 h-20 mx-auto rounded-full object-cover mb-4 border-2 border-gray-300"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {currentReview.name}
          </h2>
          <p className="text-gray-1600 italic">"{currentReview.comment}"</p>
        </div>
      </div>
    </div>
    <div className='footer'>
        <div className='contact-form'>
          <h3>Contact Us</h3>
          <form style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <input type="text" placeholder='Name' required/>
            <input type="email" placeholder='Email' required/>
            <textarea placeholder='Message' required>
            </textarea>
            <button type='submit'>Submit</button>
          </form>
            
        </div>
   
    <div className='map-container' >
    <APIProvider apiKey='AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao'>
     <Map zoom={10} center={position} style={{width:"100%", height:"400px", position:"relative"}}>


     </Map>
    </APIProvider>
    </div>
    </div>
    </>
  );
};

export default Footer;
