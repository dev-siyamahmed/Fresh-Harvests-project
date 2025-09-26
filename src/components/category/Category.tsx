import { useGetCategoriesQuery } from '@/service/categoryApi';
import React from 'react';

interface CategoryProps {
  selectedCategoryId?: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export default function Category({ selectedCategoryId, onCategorySelect }: CategoryProps) {
  const { data: categoriesData, isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="px-5 py-2.5 rounded-lg bg-gray-200 animate-pulse h-10 w-20"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mb-8">
        <div className="text-center text-red-500">
          Failed to load categories
        </div>
      </div>
    );
  }

  const categories = categoriesData?.data || [];

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {/* All Categories Button */}
        <button
          onClick={() => onCategorySelect(null)}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
            selectedCategoryId === null || selectedCategoryId === undefined
              ? 'bg-green-600 text-white border-green-600 shadow-sm'
              : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'
          }`}
        >
          All
        </button>

        {/* Dynamic Categories */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium border transition-all duration-200 ${
              selectedCategoryId === category.id
                ? 'bg-green-600 text-white border-green-600 shadow-sm'
                : 'bg-white text-gray-400 border-gray-200 hover:border-gray-300 hover:text-gray-600'
            }`}
          >
            {category.categoryName}
          </button>
        ))}
      </div>
    </div>
  );
}
