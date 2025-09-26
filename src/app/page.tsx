
'use client';

import React from 'react';
import Hero from '../components/home/Hero';
import Product from '../components/product/Product';
import About from '@/components/home/About';

export default function Home() {

  return (
    <div>
      <Hero />
      <Product />
      <About />
    </div>
  );
}