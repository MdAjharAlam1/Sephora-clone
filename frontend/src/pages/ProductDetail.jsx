// ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";



export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/v1/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  if (!product) {
    return <div className="text-center p-10 text-gray-500">Product not found</div>;
  }
  if (loading) return <div>Loading...</div>;

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className=" w-[90%] mt-10 mx-auto p-6 bg-white rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="mx-aut0 h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h2>
          <p className="text-gray-500 mb-1">Brand: {product.brand}</p>
          <p className="text-sm text-indigo-600 uppercase mb-3">{product.category}</p>

          <div className="flex items-center mb-3">
            <div className="flex mr-2">{renderRating(product.rating)}</div>
            <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
          </div>

          {product.features?.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {product.features.map((feature, idx) => (
                <Badge key={idx} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                  {feature}
                </Badge>
              ))}
            </div>
          )}

          <p className="text-gray-700 mb-4">{product.description}</p>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            {product.inStock ? (
              <Badge className="bg-green-100 text-green-800 border-0">In Stock</Badge>
            ) : (
              <Badge className="bg-red-100 text-red-800 border-0">Out of Stock</Badge>
            )}
          </div>

          <Button className="mt-6 bg-indigo-600 text-white hover:bg-indigo-700">
            Add to Cart
          </Button>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
