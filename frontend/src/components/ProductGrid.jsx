import React from 'react'

const ProductGrid = ({loading,products}) => {
  if(loading){
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
          Array.from({length:8}).map((_,index)=>(
            <div key={index} className='bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse '>
              <div className='h-48 bg-gray-200'></div>
              <div className='p-4'>
                <div className='h-4 bg-gray-200 w-3/4 mb-2'></div>
                <div className='h-4 bg-gray-200 w-1/2 mb-4'></div>
                <div className='flex space-x-1 mb-4'>
                  {[1,2,3,4,5].map((star)=>(
                    <div key={star} className='w-4 h-4 bg-gray-200 rounded-full'></div>
                  ))}
                </div>
                <div className='flex justify-between items-center'>
                  <div className='h-6 bg-gray-200 rounded w-1/4 '></div>
                  <div className='h-6 bg-gray-200 rounded w-1/3 '></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
  return(
    <div>aaa</div>
  )
}

export default ProductGrid
