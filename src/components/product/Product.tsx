"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Category from '../category/Category';
import { useRouter } from 'next/navigation';
import { useGetProductsQuery } from '@/service/productApi';

export default function Product() {
  const router = useRouter();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState(8);

  const { data: productsData, isLoading, error } = useGetProductsQuery({
    categoryId: selectedCategoryId === null ? undefined : selectedCategoryId,
    limit: displayLimit,
  });

  const products = productsData?.data || [];
  const hasMoreProducts = products.length >= displayLimit;

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategoryId(categoryId);
    setDisplayLimit(8); // Reset to show first 8 products
  };

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleSeeAllProducts = () => {
    setDisplayLimit(prev => prev + 8);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="text-2xl transform">
            <Image
              src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
              className="pt-10"
              alt=""
              width={60}
              height={45}
            />
          </div>
          <div className="absolute -top-6 right-8 text-xl transform rotate-45">
            <Image
              src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
              alt=""
              width={60}
              height={45}
            />
          </div>

          <div className="rounded-lg p-6 sm:p-8 bg-white relative">
            <div className="text-center mb-6">
              <p className="text-green-600 text-sm font-medium mb-2">Our Products</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Fresh Products
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
              </p>
            </div>

            <Category selectedCategoryId={selectedCategoryId} onCategorySelect={handleCategorySelect} />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 relative">
                    <div className="w-full h-32 sm:h-36 lg:h-40 mb-4 flex items-center justify-center bg-gray-200 animate-pulse rounded-lg" />
                    <div className="text-center">
                      <div className="h-6 bg-gray-200 animate-pulse rounded mb-2" />
                      <div className="h-4 bg-gray-200 animate-pulse rounded mb-4" />
                    </div>
                    <div className="w-full h-10 bg-gray-200 animate-pulse rounded-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center text-red-500">
          Failed to load products
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto lg:px-8 ">
      <div className="relative">
        <div className="text-2xl transform">
          <Image
            src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
            className="pt-10"
            alt=""
            width={60}
            height={45}
          />
        </div>
        <div className="absolute -top-6 right-8 text-xl transform rotate-45">
          <Image
            src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
            alt=""
            width={60}
            height={45}
          />
        </div>

        <div className="rounded-lg p-6 sm:p-8 bg-white relative">
          <div className="text-center mb-6">
            <p className="text-green-600 text-sm font-medium mb-2">Our Products</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Fresh Products
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
            </p>
          </div>

          <Category selectedCategoryId={selectedCategoryId} onCategorySelect={handleCategorySelect} />

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products?.slice(0, 8)?.map((product) => (
              <div key={product.id} className="cursor-pointer">
                <div
                  className="
          bg-white rounded-2xl relative p-2 lg:p-3 shadow-md transition-all duration-300 transform 
          w-full h-[212px] sm:h-[260px] lg:w-[282px] lg:h-[380px] 
          hover:shadow-lg hover:-translate-y-1
        "
                  onClick={() => handleProductClick(product.id)}
                >
                  {/* Image */}
                  <div
                    className="
            w-full h-[120px] sm:h-[160px] lg:h-[208px] 
            bg-[#F4F6F6] rounded-lg flex items-center justify-center overflow-hidden
          "
                  >
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0]}
                        alt={product.productName}
                        width={258}
                        height={208}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200"></div>
                    )}
                  </div>

                  {/* Product Name & Price & Button */}
                  <div className="mt-2  items-center text-center">
                    <h3 className="font-medium text-[#212337] text-[12px]  lg:text-[18px] truncate">
                      {product.productName}
                    </h3>
                    <p className="text-[#4A4A52] font-normal text-[12px]  lg:text-[18px]">
                      {product.price.toFixed(2)}
                    </p>
                    <button
                      className="
              w-full py-1 sm:py-2 lg:mt-6 m-1 lg:py-3 text-[#212337] rounded-[6px] sm:rounded-[6px] lg:rounded-[8px] 
              text-[12px]  lg:text-[18px] font-normal bg-white border border-[#D9D9D9] 
              transition-colors duration-200 hover:text-white hover:bg-[#FF6A1A]
            "
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProductClick(product.id);
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>



          {hasMoreProducts && (
            <div className="text-center py-6">
              <button
                onClick={handleSeeAllProducts}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                See All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
