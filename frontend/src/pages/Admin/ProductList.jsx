import React from 'react';

const ProductList = () => {
  const products1 = [
    {
      _id: "1",
      name: "Wireless Headphones",
      brand: "SoundMagic",
      category: "Electronics",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 79.99,
      rating: 4.5,
      reviews: 124,
      inStock: true,
      features: ["Bluetooth", "Noise Cancelling", "20hr Battery"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    {
      _id: "2",
      name: "Running Shoes",
      brand: "Nike",
      category: "Footwear",
      image: "https://www.pngplay.com/wp-content/uploads/13/Wireless-Headphones-PNG-Free-File-Download.png",
      price: 120.0,
      rating: 4.0,
      reviews: 340,
      inStock: false,
      features: ["Lightweight", "Breathable"],
    },
    // Add more products as needed...
  ];

  return (
    <div className="min-h-scren p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Product List</h2>
      {products1.length === 0 ? (
        <p className="text-center text-gray-500">No products available. Add some products in the Admin Panel.</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="p
              y-2 px-4 text-left">#</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Brand</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">In Stock</th>
              <th className="py-2 px-4 text-left">Features</th>
            </tr>
          </thead>
          <tbody>
            {products1.map((product, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.brand}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">{product.inStock ? 'Yes' : 'No'}</td>
                <td className="py-2 px-4">{product.features.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;