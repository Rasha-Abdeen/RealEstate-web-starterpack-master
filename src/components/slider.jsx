import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const galleryImages = [
    { id: 1, src: "/realty.png" },
    { id: 2, src: "/tower.png" },
    { id: 3, src: "/prologis.png" },
    { id: 4, src: "/realty.png" },
  ];

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/properties.json");
        setProperties(response.data);
        console.log(response.data); // ✅ log fresh data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (properties.length === 0) {
    return <div>....Loading</div>;
  }

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {galleryImages.map((image) => (
          <SwiperSlide key={image.id}>
              <img
                src={image.src}
                alt={`Gallery Image ${image.id}`}
                style={{ width: "250px", height: "150px" , display:"block"}}
              />
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{marginTop:"40px", paddingRight:"20px", marginBottom:"30px"}}>
       <h2 style={{color:"#d1c601", fontWeight:"400", paddingLeft:"20px"}}>Latest Properties From HomyZ </h2>
       </div>
      <div className="cards-container">
        {properties.map((property) => (
          <div key={property.id} className="card">
            <img
              src={property.image}
              alt="Property"
              className="card-image"
            />
            <div className="card-item">
              <h3 className="card-title">{property.title}</h3>
              <p className="card-location">{property.location}</p>
              <p className="card-price">{property.price}</p>
              <p className="card-description">{property.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;
