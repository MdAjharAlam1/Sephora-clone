import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const TrendingProduct = () => {
    const products = [
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:1,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:2,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:3,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:4,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:5,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:6,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:7,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:8,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:9,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:10,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
        {
          id:1,
          image:'https://www.sephora.com/productimages/sku/s2872448-main-zoom.jpg?pb=clean-planet-aware&imwidth=332',
          price:25,
          rank:11,
          brand:"Gucci",
          companyName:'Saie',
          title:'Dew Blush Liquid Cream Blush'
        },
      ]
  return (
    <div className='trending-card'>
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
                        <div className='p-2'>

                       
                        <div className="relative bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                    {/* Top Right Rank Tag */}
                        <div className="absolute top-0 right-0 bg-black text-white text-xs px-2 py-1 rounded-bl-md font-bold">
                            #{product.rank}
                        </div>

                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-40 object-contain mb-2"
                        />

                    {/* Product Info */}
                        <div className="text-sm">
                            <p className="text-black font-bold uppercase">{product.brand}</p>
                            <p className="text-gray-700 text-md line-clamp-2">{product.title}</p>
                            <p className="text-black text-lg font-semibold mt-1">${product.price}</p>
                        </div>
                    </div>
                    </div>
                    </SwiperSlide>
                })
                
            }
       </Swiper>
    </div>
  )
}

export default TrendingProduct
