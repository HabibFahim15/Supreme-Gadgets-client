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
    <div>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
        }
      </div>
    </div>
  );
};

export default Products;