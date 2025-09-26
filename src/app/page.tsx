
'use client';

import React from 'react';
import Hero from '../components/home/Hero';
import Product from '../components/product/Product';
import About from '@/components/home/About';
import Blog from '@/components/home/Blog';

export default function Home() {

  return (
    <div>
      <Hero />
      <Product />
      {/* <About /> */}
      <Blog />
    </div>
  );
}

// 'use client';

// import React from 'react';
// import Hero from '../components/home/Hero';
// import Product from '../components/product/Product';
// import About from '@/components/home/About';
// import Blog from '@/components/home/Blog';

// export default function Home() {
//   return (
//     <main className="flex flex-col space-y-10 sm:space-y-14 lg:space-y-20">
//       {/* Hero Section */}
//       <section className="w-full">
//         <Hero />
//       </section>

//       {/* Product Section */}
//       <section className="w-full px-4 sm:px-6 lg:px-8">
//         <Product />
//       </section>

//       {/* About Section */}
//       <section className="w-full px-4 sm:px-6 lg:px-8 order-2 lg:order-2">
//         <About />
//       </section>

//       {/* Blog Section */}
//       <section className="w-full px-4 sm:px-6 lg:px-8 order-3 lg:order-3">
//         <Blog />
//       </section>
//     </main>
//   );
// }
