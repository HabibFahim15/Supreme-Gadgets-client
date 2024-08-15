import React, { useEffect, useState } from 'react';
import HomeCard from './HomeCard';

const Products = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  })
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
    </div>
  );
};

export default Products;