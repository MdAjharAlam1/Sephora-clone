import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='w-full border-b border-gray-300'>
            <div className='w-full bg-[#C0DCF1] text-center'>
                <div className='py-3'>
                    <a href="#" className='text-sm'>
                        <span className='font-medium text-base'>Don't miss out!</span> So many deals, trial size, sample sets and more. <span className='text-base font-medium'> Shop Beauty Offers</span>
                    </a>
                </div>
                
            </div>
            <div className='w-[90%] mx-auto '>
                <div className='flex items-center gap-10 mt-5'>
                    <img className='w-40'
                    src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/company/5842/applications/6523fa5f41f4eb4c10a1d869/application/pictures/free-logo/resize-w:1280/b0ftwtPw4-Sephora-India.webp" alt="logo" />
                    <div className='relative w-109'>
                        <input
                        className='border py-1.5 bg-gray-100 px-10 rounded-full w-full'
                         type="text" name="" id="" placeholder='Search  ' />
                        <i className=" absolute top-1 left-3 text-lg text-gray-500 ri-search-line"></i>
                    </div>
                    <div className='flex items-center gap-3'>
                        <i className=" text-3xl text-gray-600 ri-store-3-line"></i>
                        <div>
                            <h3 className='font-medium'>Stores & Services</h3>
                            <p className='text-[13px] -mt-1 text-gray-500'>Choose Your Store</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className=" text-2xl text-gray-600 ri-community-line"></i>
                        <p>Community</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className=" text-2xl text-gray-600 ri-account-circle-line"></i>
                        <Link to="/users/signin" className='text-base font-semibold'>Sign In</Link>
                    </div>
                    <div className='flex items-center ml-5 gap-4'>
                        <i className=" text-2xl ri-heart-line"></i>
                        <i  className=" text-2xl ri-shopping-bag-line"></i>
                    </div>
                </div>
                
            </div> 
                <div className='bg-black py-4 mt-5 -mb-6'>
                    <ul className='flex w-[85%] mx-auto items-center gap-10 text-white text-sm'>
                        <li className='hover:text-red-400'>New</li>
                        <li className='hover:text-red-400'>Brands</li>
                        <li className='hover:text-red-400'>Makeup</li>
                        <li className='hover:text-red-400'>Skincare</li>
                        <li className='hover:text-red-400'>Hair</li>
                        <li className='hover:text-red-400'>Tools & Brushes</li>
                        <li className='hover:text-red-400'>Bath & Body</li>
                        <li className='hover:text-red-400'>Fragrance</li>
                        <li className='hover:text-red-400'>Clean</li>
                        <li className='hover:text-red-400'>Gifts</li>
                    </ul>
                </div>
            </div>
        </div>  
  )
}

export default Navbar
