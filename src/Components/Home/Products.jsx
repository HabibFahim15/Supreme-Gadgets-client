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
      <div className='text-center my-20'>
        <h1 className='text-center text-5xl font-bold mb-8'>Our Products</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sint et eveniet molestias quae iusto. Ea tempora veniam odio blanditiis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
        }
      </div>
      <div className='flex justify-center my-8'>
      <Link to={'/allitem'} className='btn hover:btn-primary border-b-primary border-b-8  rounded-2xl px-8 py-4 bg-gray-200 font-medium hover:font-bold hover:text-white text-black '>View All</Link>
      </div>
    </div>
  );
};

export default Products;