import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const {id} = useParams();
  const [products, setProducts] = useState({})
  console.log(id);


  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)

    .then(res => res.json())
    .then(data => {
      setProducts(data)
      console.log(data);
    })
  },[id])
const {name,category, description,quantity, image, price} = products;
  return (
   <Fade damping={0.5} cascade duration={2000} triggerOnce='true'>
     <div className="bg-white dark:bg-base-100 py-6 container mx-auto border-r-2 border-l-2 border-cyan-400 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <div className="grid gap-8 md:grid-cols-2">
        
        <div className="grid gap-4 lg:grid-cols-5">
         
  
          <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-2xl lg:col-span-4">
            <img src={image} loading="lazy" alt="Photo by Himanshu Dewangan" className="h-full w-full object-cover object-center" />
  
            
  
            <a href="#" className="absolute right-4 top-4 inline-block rounded-lg border bg-white px-3.5 py-3 text-center text-sm font-semibold text-gray-500  outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-gray-700 dark:active:text-white md:text-base">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </a>
          </div>
        </div>
        
  
        
        <div className="md:py-8">
          
          <div className="mb-2 md:mb-3">
            <span className="mb-0.5 inline-block text-gray-500">{category}</span>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">{name}</h2>
          </div>
          
  
          
          <div className="mb-6 flex items-center gap-3 md:mb-10">
            <div className="flex h-7 items-center gap-1 rounded-full bg-indigo-500 px-2 text-white">
              <span className="text-sm">{quantity} in stock</span>
  
              
            </div>
          </div>
          <div className="mb-8 md:mb-10">
            <span className="mb-3 inline-block text-sm font-semibold text-gray-500 dark:text-white md:text-base">{description}</span>
  
            
          </div>
          
  
          
          <div className="mb-4">
            <div className="flex items-end gap-2">
              <span className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl">${price}</span>
              <span className="mb-0.5 text-red-500 line-through">${price*1.5}</span>
            </div>
  
            <span className="text-sm text-gray-500">incl. VAT plus shipping</span>
          </div>
          <div className="mb-6 flex items-center gap-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
  
            <span className="text-sm">2-4 day shipping</span>
          </div>
          <div className="flex gap-2.5">
            <a href="#" className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">Add to cart</a>
  
            <a href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 dark:text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 dark:active:text-white md:text-base">Buy now</a>
          </div>
          
        </div>
        
      </div>
    </div>
  </div>
   </Fade>
  );
};

export default ProductDetails;