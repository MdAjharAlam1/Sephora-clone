import React from "react";
import { Link } from "react-router-dom";
import { Star, StarHalf, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Product({ products, loading }) {
  const handleAddToCart = async (productId) => {
    // Logic to add the product to the cart
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });
      if (response.ok) {
        alert("Product added to cart!");
      } else {
        alert("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("An error occurred while adding the product to the cart");
    }
  };
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-9 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-12 h-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">No products found</h3>
        <p className="text-gray-500 mt-2 max-w-md mx-auto">
          We couldn't find any products matching your current filters. Try adjusting your filter criteria or browse our
          entire collection.
        </p>
      </div>
    );
  }

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
        >
          <Link to={`/product/${product._id}`}>
            <div className="relative h-56 overflow-hidden cursor-pointer">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className=" h-full p-4 mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 z-10">
                <button className="bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              {product.inStock ? (
                <Badge className="absolute top-2 left-2 bg-green-100 text-green-800 hover:bg-green-100 border-0">
                  In Stock
                </Badge>
              ) : (
                <Badge className="absolute top-2 left-2 bg-red-100 text-red-800 hover:bg-red-100 border-0">
                  Out of Stock
                </Badge>
              )}
            </div>
          </Link>
          <div className="p-4">
            <div className="mb-1 text-xs font-medium text-indigo-600 uppercase tracking-wider">{product.category}</div>
            <h3 className="font-medium text-gray-900 mb-1 text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
            <div className="flex items-center mb-3">
              <div className="flex mr-2">{renderRating(product.rating)}</div>
              <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
            </div>
            {product.features && product.features.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-1">
                {product.features.slice(0, 2).map((feature, idx) => (
                  <Badge key={idx} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                    {feature}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-4">
              <span className="font-bold text-gray-900 text-lg">${product.price.toFixed(2)}</span>
              <Button 
                onClick={() => handleAddToCart(product._id)}
                size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
