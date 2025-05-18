import React from 'react'
//country image 
import canadaImg from '../assets/images/country/canada.png'
import unitedStatesImg from '../assets/images/country/united-states.png'

const Footer = () => {
    
    const sephoraSections = [
        {
          section: "About Sephora",
          links: [
            { title: "About Sephora" },
            { title: "Newsroom" },
            { title: "Careers" },
            { title: "Sephora Values" },
            { title: "Supply Chain Transparency" },
            { title: "Affiliates" },
            { title: "Sephora Events" },
            { title: "Gift Cards" },
            { title: "Sephora Global Sites" },
            { title: "Diversity, Equity & Inclusion" },
            { title: "Sephora Accelerate" },
            { title: "Beauty (Re)Purposed" },
            { title: "Report a Vulnerability" }
          ]
        },
        {
          section: "My Sephora",
          links: [
            { title: "Beauty Insider" },
            { title: "Sephora Credit Card" },
            { title: "Community Profile" },
            { title: "Order Status" },
            { title: "Purchase History" },
            { title: "Account Settings" },
            { title: "Beauty Advisor Recommendations" },
            { title: "Auto-Replenishment" },
            { title: "Beauty Offers" },
            { title: "Buying Guides" },
            { title: "Rewards Bazaar" },
            { title: "Loves" },
            { title: "Book a Reservation" }
          ]
        },
        {
          section: "Help",
          links: [
            { title: "Customer Service" },
            { title: "Returns & Exchanges" },
            { title: "Delivery and Pickup Options" },
            { title: "Shipping" },
            { title: "Billing" },
            { title: "International Shipments" },
            { title: "Beauty Services FAQ" },
            { title: "Sephora at Kohl's" },
            { title: "Sephora at Hearst" },
            { title: "Store Locations" },
            { title: "Online Ordering" },
            { title: "Flexible Payments" },
            { title: "Accessibility" }
          ]
        }
    ];
      
    
  return (
    <div className='w-full min-h-screen bg-black text-white py-15'>
        <div className='w-[90%] mx-auto'>
            <div className='flex flex-col items-start gap-5 md:justify-between md:items-center md:flex-row'>
                <div className='flex items-center gap-2'>
                    <i className="text-3xl ri-store-line"></i>
                    <div>
                        <h3 className='font-semibold'>Find a Store</h3>
                        <p className='text-[12px]'>Choose Your Store</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="text-3xl ri-chat-ai-line"></i> 
                    <div>
                        <h3 className='font-semibold'>Customer Service</h3>
                        <p className='text-[12px]'>Chat is unavailable</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="text-3xl ri-apps-line"></i>
                    <div>
                        <h3 className='font-semibold'>Get the App</h3>
                        <p className='text-[12px]'>Download Now</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="text-3xl ri-mobile-download-line"></i>
                    <div>
                        <h3 className='font-semibold'>Get Sephora Text Alerts</h3>
                        <p className=' text-[12px]'>Sign up Now</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <i className="text-3xl ri-bank-card-line"></i>
                    <div>
                        <h3 className='font-semibold'>Sephore Credit Card Program</h3>
                        <p className=' text-[12px]'>Want 25% off your Sephora purchase? <a href="#">DETAILS</a></p>
                    </div>
                </div>
            </div>
            <div className='border-b-1 border-gray-400 mt-10 mb-10'></div>
            <div className='grid grid-cols-1 md:grid-cols-5'>
                {sephoraSections.map((sections,idx)=>{
                    return <div key={idx} className='space-y-2'>
                        <h3 className='font-medium'>{sections.section}</h3>
                        <ul className='space-y-1'>
                            {
                                sections.links.map((link,linkIdx)=>{
                                    return <li className='text-sm' key={linkIdx}>{link.title}</li>
                                })
                            }
                        </ul>
                    </div>
                })}
                <div className='space-y-3 -ml-8'>
                    <h3 className='font-medium'>Region & Language</h3>
                    <ul className='space-y-1'>
                        <li className='flex items-center gap-3'>
                            <img className='w-4' src={unitedStatesImg} alt="unitedstates" />
                            <p className='text-sm'>United States - English</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img className='w-4' src={canadaImg} alt="canada" />
                            <p className='text-sm'>Canada - English</p>
                        </li>
                        <li className='flex items-center gap-3'>
                            <img className='w-4' src={canadaImg} alt="canada" />
                            <p className='text-sm'> Canada - Francains</p>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col -ml-15 justify-between'>
                    <div>
                        <h2 className='w-70 text-3xl  font-medium'>We Belong to Something Beautiful</h2>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium'>Sign up for Sephora text updates</h4>
                            <div>
                                <form className='space-x-3'>
                                    <input className='py-2 px-4 bg-white placeholder:text-gray-500 rounded-md' type="text" placeholder='Mobile Phone Number' />
                                    <button className='font-medium bg-innherit py-2 px-4 border border-white rounded-full'>Continue</button>
                                </form>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='font-medium'>Sign up for Sephora Emails</h4>
                            <div>
                                <form className='space-x-3'>
                                    <input className='py-2 px-4 rounded-md  bg-white placeholder:text-gray-500' type="text" placeholder='Enter Your email address' />
                                    <button className='font-medium bg-inherit border rounded-full border-white px-4 py-2'>Sign up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='border-b-1 border-gray-400 mt-10 mb-10'></div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-1 text-sm'>
                    <p>© 2025 Sephora USA, Inc. All rights reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>Accessbility</p>
                        <p>Sitemap</p>
                        <p>Your Privacy Choices</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p>1-877-737-4672</p>
                        <p>TTY: 1-888-866-9845</p>
                    </div>
                </div>
                <div className='space-x-5'>
                    <i className="text-3xl ri-instagram-line"></i>
                    <i className="text-3xl ri-facebook-box-fill"></i>
                    <i className="text-3xl ri-twitter-x-line"></i>
                    <i className="text-3xl ri-youtube-fill"></i>
                    <i className="text-3xl ri-pinterest-line"></i>
                    <i className="text-3xl ri-snapchat-line"></i>
                    <i className="text-3xl ri-tiktok-fill"></i>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Footer
