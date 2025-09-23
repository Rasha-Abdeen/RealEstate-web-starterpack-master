import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const slider = () => {
    const galleryImages=[
        {id:1,src:"/realty.png"},
        {id:2,src:"/tower.png"},
        {id:3,src:"/prologis.png"},
    ];
return (
    <>
        
        <div style={{ margin: "20px 0" }}>
            <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
                {galleryImages.map((image) => (
                    <li key={image.id} className='gallery-item'>
                        <img
                            src={image.src}
                            alt={`Gallery Image ${image.id}`}
                            style={{ width: "300px", height: "200px" }}
                        />
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className='h2'>Best Choices </h2>
            <p className='pargraph'>Explore our curated selection of top properties, handpicked for quality and value.</p>
        </div>
        <div>
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
                <SwiperSlide>
                    <img src="./r1.png" alt="Property 1" style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
                <SwiperSlide>        
                  <img src="./r2.png" alt="Property 1" style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
                <SwiperSlide>               
                    <img src="./r3.png" alt="Property 1" style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
                <SwiperSlide>
                <img src="./contact.jpg" alt="Property 1" style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
                <SwiperSlide>
                <img src="./r1.png" alt="Property 1" style={{ width: "100%", height: "auto" }} />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    </>
);
}

export default slider
