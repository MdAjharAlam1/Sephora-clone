import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function FeatureProduct() {

  const products = [
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
    {
      id:1,
      image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
      price:25,
      companyName:'Saie',
      title:'Dew Blush Liquid Cream Blush'
    },
  ]


  return (
    <div className='feature-card'>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {
          products.map((product)=>{
            return <SwiperSlide>
            <div className='px-2 py-5'>
            <div className="product-card shadow-lg rounded-lg py-2 px-4 hover:shadow-xl transition-shadow duration-300 ">
              <img
                src={product.image}
                alt="Product image"
                className="product-image w-full mb-3 h-40 object-cover rounded-t-lg"
              />
              <div className='card-body'>
                <p className='font-semibold'>{product.companyName}</p>
                <h3 className="product-title text-md font-bolder">{product.title}</h3>
                <p className="product-price text-lg font-bold mt-1">${product.price}.00</p>
                <p className=''>
                  <i className=" text-md ri-star-fill"></i>
                  <i className=" text-md ri-star-fill"></i>
                  <i className=" text-md ri-star-fill"></i>
                  <i className=" text-md ri-star-fill"></i>
                  <i className=" text-md ri-star-line"></i>
                </p>
              </div>
            </div>
            </div>
        </SwiperSlide>
          })
        }
        
      </Swiper>
    </div>
  );
}
