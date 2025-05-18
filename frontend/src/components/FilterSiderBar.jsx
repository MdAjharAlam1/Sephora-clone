// 

import React, { use, useEffect, useState } from 'react';

const FilterSiderBar = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [categoriesOptions, setCategoriesOptions] = useState([]);
  const [brandsOptions, setBrandsOptions] = useState([]);

    const fetchFilters = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/allfilter`);
            const data = await response.json();
            setCategoriesOptions(data.categories);
            setBrandsOptions(data.brands);
        } catch (error) {
            console.error('Error fetching filter options:', error);
        }
    };

    useEffect(() => {
        fetchFilters();
    }, []);

  const handleApplyFilters = () => {
    const filters = {};
    if (category) filters.category = category;
    if (brand) filters.brand = brand;
    if (minPrice) filters.minPrice = minPrice;
    if (maxPrice) filters.maxPrice = maxPrice;

    onFilter(filters);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 py-3 px-3 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
            {categoriesOptions.map((cat) => (
                <option key={cat} value={cat}>
                {cat}
                </option>
            ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Brand</label>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="mt-1 py-3 px-3 block w-full border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All</option>
            {brandsOptions.map((br) => (
                <option key={br} value={br}>
                {br}
                </option>
            ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price Range</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-1/2 py-3 px-3 border-gray-300 rounded-md shadow-sm"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-1/2 px-3 border-gray-300 rounded-md shadow-sm"
          />
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSiderBar;