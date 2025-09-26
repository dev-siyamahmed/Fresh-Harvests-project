'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useGetCategoriesQuery } from '@/service/categoryApi';
import { useGetProductByIdQuery, useGetProductsQuery } from '@/service/productApi';

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [categoryName, setCategoryName] = useState('');

  // Fetch product details
  const { data: productData, isLoading: isProductLoading, error: productError } = 
    useGetProductByIdQuery(productId);

  // Fetch categories to get category name
  const { data: categoriesData } = useGetCategoriesQuery();

  // Fetch all products to filter related products
  const { data: allProductsData } = useGetProductsQuery();

  useEffect(() => {
    if (productData?.data && allProductsData?.data && categoriesData?.data) {
      const product = productData.data;
      const categoryId = product.categoryId;
      
      // Find category name
      const category = categoriesData.data.find(cat => cat.id === categoryId);
      if (category) {
        setCategoryName(category.categoryName);
      }

      // Find related products (same category, excluding current product)
      const related = allProductsData.data
        .filter(p => p.categoryId === categoryId && p.id !== productId)
        .slice(0, 4); // Limit to 4 related products
      
      setRelatedProducts(related);
    }
  }, [productData, allProductsData, categoriesData, productId]);

  const handleRelatedProductClick = (id: string) => {
    router.push(`/product/${id}`);
  };

  if (isProductLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded-lg"></div>
            <div className="w-full md:w-1/2">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-8"></div>
              <div className="h-12 bg-gray-200 rounded-lg w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (productError || !productData) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          Failed to load product details
        </div>
      </div>
    );
  }

  const product = productData.data;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <button 
          onClick={() => router.push('/')} 
          className="text-gray-500 hover:text-gray-700"
        >
          Home
        </button>
        <span className="mx-2 text-gray-500">/</span>
        <button 
          onClick={() => router.push('/')} 
          className="text-gray-500 hover:text-gray-700"
        >
          Products
        </button>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-900 font-medium">{product.productName}</span>
      </nav>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex items-center justify-center">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0].trim()}
              alt={product.productName}
              width={400}
              height={400}
              className="object-contain rounded-lg"
            />
          ) : (
            <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</h1>
          
          <div className="flex items-center mb-4">
            <span className="text-gray-600 mr-2">Category:</span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {categoryName}
            </span>
          </div>
          
          <p className="text-2xl font-bold text-gray-900 mb-6">
            AED {product.price.toFixed(2)}
          </p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="text-gray-600 mr-2">Availability:</span>
            {product.stock > 0 ? (
              <span className="text-green-600">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
          
          <button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div 
                key={relatedProduct.id} 
                className="group cursor-pointer"
                onClick={() => handleRelatedProductClick(relatedProduct.id)}
              >
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative">
                  <div className="w-full h-32 sm:h-36 lg:h-40 mb-4 flex items-center justify-center">
                    {relatedProduct.images && relatedProduct.images.length > 0 ? (
                      <Image
                        src={relatedProduct.images[0].trim()}
                        alt={relatedProduct.productName}
                        width={120}
                        height={120}
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">
                      {relatedProduct.productName}
                    </h3>
                    <p className="text-gray-600 font-semibold text-sm sm:text-base mb-4">
                      AED {relatedProduct.price.toFixed(2)}
                    </p>
                  </div>

                  <button 
                    className="w-full py-3 px-4 rounded-lg text-sm font-medium bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 transition-colors duration-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRelatedProductClick(relatedProduct.id);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}