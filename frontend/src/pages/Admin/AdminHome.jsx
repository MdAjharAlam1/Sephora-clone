import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';


const AdminHome = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from localStorage or backend
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className='flex items-center justify-between px-4'>
        <h2 className="text-3xl font-bold mb-6">Admin Dashboard</h2>
        <div>
          <h2 className='text-lg font-medium'>Sign In</h2>
        </div>
      </div>  

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Total Products Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-indigo-600">20</p>
        </div>

        {/* Add Product Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">Add Product</h3>
          <Link
            to="/admin/add-product"
            className="inline-block mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Go to Add Product
          </Link>
        </div>

        {/* List Products Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-2">List Products</h3>
          <Link
            to="/admin/list-products"
            className="inline-block mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
          >
            Go to List Products
          </Link>
        </div>
      </div>

      {/* Recently Added Products Section
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Recently Added Products</h3>
        {products.length === 0 ? (
          <p className="text-gray-500">No products available. Add some products to see them here.</p>
        ) : (
          <ul>
            {products.slice(-5).reverse().map((product, index) => (
              <li key={index} className="border-b py-2">
                <div className="flex items-center gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-bold">{product.name}</h4>
                    <p className="text-sm text-gray-500">Price: ${product.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default AdminHome;