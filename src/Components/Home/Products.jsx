import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';

const Products = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => {
        const latestData = data.slice(-9);
        setServices(latestData);
      });
  }, []);
  return (
    <div className='container mx-auto mb-8'>
      <div id="latest-products" className='text-center my-20'>
        <h1 className='text-center text-2xl md:text-5xl font-bold mb-8'>Latest Products</h1>
        <p>Discover the most innovative gadgets that enhance your daily life. From cutting-edge tech to must-have accessories, explore the latest in technology at Supreme Gadgets.</p>
      </div>


      <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
        }
      </div>
      <div className='flex justify-center my-8'>
        <Link to={"/allitem"} class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">See All</span>
          <span class="relative invisible">See All</span>
        </Link>
      </div>
    </div>
  );
};

export default Products;