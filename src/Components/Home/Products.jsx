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
      <h1>Total Products:- {services.length}</h1>

      <div>
        {
          services.map(service => <HomeCard key={service._id} service={service}></HomeCard>)
        }
      </div>
    </div>
  );
};

export default Products;