import React from 'react'
import Navbar from './Navbar/Navbar'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import {Pagination,Navigation } from 'swiper/modules';
import FeatureProduct from '../components/FeatureProduct';

// hero image
import heroImage1 from '../assets/images/hero/image-1.png' 
import heroImage2 from '../assets/images/hero/image-2.png' 
import heroImage3 from '../assets/images/hero/image-3.png' 
import heroImage4 from '../assets/images/hero/image-4.png' 
import TrendingProduct from '../components/TrendingProduct';

// banner image 

import bannerImage1 from '../assets/images/banner/imag1.png' 
import bannerImage2 from '../assets/images/banner/imag2.png' 
import bannerImage3 from '../assets/images/banner/imag3.png' 
import bannerImage4 from '../assets/images/banner/imag4.png' 
import bannerImage5 from '../assets/images/banner/imag5.png' 
import bannerImage6 from '../assets/images/banner/imag6.png' 
import BannerCard from '../components/BannerCard';
import Footer from './Footer';

const Home = () => {
  const heroBannerImage = [
    {
      image:heroImage1,
    },
    {
      image:heroImage2,
    },
    {
      image:heroImage3,
    },
    {
      image:heroImage4,
    },
  ]
  const cardImage = [
    {
      title:'Value Sets',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_minis_us_ca_rwd_slice.png'
    },
    {
      title:'Fragrance',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_fragrance_bottle_us_ca_rwd_slice.jpg'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    {
      title:'Face Creams',
      image:'https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/CategoryTiles/homepage_featured_category_tile_skincare_cleanser_moisturizer_us_ca_rwd_slice.jpg?imwidth=106'
    },
    
  ]
  return (
    <div className='w-full min-h-screen'>
      <div className='w-full hero-banner'>
        <div className='p-3'>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            lazyPreloadPrevNext={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation,Pagination]}
            className="mySwiper"
          >
            {
              heroBannerImage.map((hero)=>{
                return <SwiperSlide>
                  <div>
                      <img className='w-full' src={hero.image} alt="" />
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </div>
        
      </div>
      <div className='w-[90%] mx-auto'>
        <div className='mt-5'>
          <h2 className=' text-xl font-bold font-md mb-5 '>Chosen For You</h2>
          <FeatureProduct/>
          <div className='border-b-2 mt-10 mb-10 border-gray-200'></div>
        </div>
        <div className='banner-card'>
          <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
              <BannerCard image={bannerImage1}/>
              <BannerCard image={bannerImage2}/>
              <BannerCard image={bannerImage3}/>
          </div>
        </div>
        <div className='border-b-2 mt-10 border-gray-200'></div>
        <div className='mt-15 mb-10'>
          <h2 className='text-xl font-bold font-md mb-5'>Your Trending Picks</h2>
          <TrendingProduct/>
        </div>
        <div className='border-b-2 mb-10 mt-10 border-gray-200'></div>
        <div className='flex items-center gap-10'>
          <div>
            <h2 className='font-bold text-xl'>Need a Little Guidance?</h2>
            <p className='text-gray-500'>Check out what's popular now.</p>
          </div>
          <div className='flex gap-7'>
            {
              cardImage.map((cardDetail)=>{
                return <div className="text-left bg-white rounded-xl shadow-sm p-3 flex flex-col justify-between items-center hover:shadow-md transition">
                            {/* Title */}
                          <h3 className="text-sm -ml-2 pb-9 font-medium text-black">{cardDetail.title}</h3>
                                {/* Icon Image */}
                          <img
                            src={cardDetail.image} // Replace with actual image URL
                            alt="Value Sets"
                            className="w-12 ml-8 h-12 object-contain"
                          />
                        </div>
              })
            }
          </div>
        </div>
        <div className='border-b-2 mb-10 mt-10 border-gray-200'></div>
        <div className='banner-card'>
          <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-10'>
              <BannerCard image={bannerImage4}/>
              <BannerCard image={bannerImage5}/>
              <BannerCard image={bannerImage6}/>
          </div>
        </div>
        <div className='border-b-2 mb-10 mt-10 border-gray-200'></div>
      </div>
      <div className='w-full bg-gray-300 py-2 text-center'>
        <h3 className='font-bold text-sm md:text-lg'>Website feedback? Let us know </h3>
      </div>
    </div>
  );
};

export default Home
