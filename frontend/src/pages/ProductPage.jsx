import React, { useEffect, useState } from 'react'
import FilterSiderBar from '../components/FilterSiderBar'
import ProductGrid from '../components/ProductGrid'
import Product from '../components/Product';

const ProductPage = () => {
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    

    const fetchProducts = async (filters = {}) => {
        setLoading(true);
        try {
            const query = new URLSearchParams(filters).toString();
          const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/all?${query}`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleFilter = (filters) => {
        fetchProducts(filters);
    }

  return (
    <div className='mt-5 bg-gray-50'>
        <div className=' mx-auto max-w-[90%] px-4 sm:px-6 lg:px-8 py-8'>
            <div className='mb-8'>
                <h1 className='font-bold text-3xl text-gray-900'>Our Products</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='w-full lg:w-1/4'>
                    <FilterSiderBar onFilter={handleFilter}/>
                </div>
                <div className='w-full lg:w-3/4'>
                    <Product loading={loading} products={products}/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default ProductPage





