
"use client"

import Image from 'next/image';
import React from 'react';

interface BlogPost {
  id: number;
  image: string;
  date: string;
  title: string;
  readMore: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DowfjIMkspV1qLz9qbSKl3KIZzeflRhRnA&s',
    date: 'May 23, 2024',
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    readMore: 'Read More',
  },
  {
    id: 2,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTM0i2UBIEGwV9KdyK33txV2XX-MUQqlWDegjMr2kQBBS_x09gbwz5JidsoITi9F88fw4&usqp=CAU',
    date: 'May 23, 2024',
    title: 'Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads',
    readMore: 'Read More',
  },
  {
    id: 3,
    image: 'https://www.agrifarming.in/wp-content/uploads/The-Complete-Guide-to-Tomato-Farming-3.jpg',
    date: 'May 23, 2024',
    title: 'The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week',
    readMore: 'Read More',
  },
];

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div className="bg-white rounded-[20px] overflow-hidden  transition-shadow duration-300">
    <div className="relative  h-[232px] lg:h-[260px] w-[384px] overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover  transition-transform duration-300"
      />
    </div>
    <div className="p-4 sm:p-6">
      <p className="text-sm text-gray-500 font-questrial mb-2">{post.date}</p>
      <h3 className="text-base sm:text-lg font-medium text-gray-900 font-questrial leading-snug mb-4 line-clamp-3">
        {post.title}
      </h3>
      <button className="inline-flex items-center text-[#FF6B35] font-medium text-sm font-questrial hover:text-[#E55A2B] transition-colors">
        {post.readMore}
        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
);

const LeafIcon = () => (
  <div className="absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-12 lg:right-40 w-12 h-12 sm:w-16 sm:h-16">
    <Image
      src="https://png.pngtree.com/png-vector/20241105/ourmid/pngtree-leaf---gacher-pata-design-vector-png-image_14234602.png"
      className=""
      alt=""
      width={40}
      height={40}
    />
  </div>
);

export default function Blog() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-20 font-rubik">
      <LeafIcon />

      <div className="lg:w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-block bg-[#749B3F1A] text-[#749B3F] px-4 py-2 rounded-full text-[20px] font-medium font-rubik mb-4">
            Our Blog
          </div>
          <h2 className="lg:text-[48px] text-[32px] font-semibold text-[#212337] mb-4">
            Fresh Harvest Blog
          </h2>
          <p className="text-[#4A4A52] font-questrial text-[12px] lg:text-[14px] max-w-md mx-auto leading-relaxed">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh
            produce, healthy eating, and culinary inspiration.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
