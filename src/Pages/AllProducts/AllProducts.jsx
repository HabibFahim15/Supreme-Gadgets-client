import { useEffect, useState } from "react";
import AllProductsCard from "../../Components/AllProducts/AllProductsCard";

const AllProducts = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setServices(data))
  })
  return (
    <div className='container mx-auto mb-8'>
    <div className='text-center my-20'>
      <h1 className='text-center text-5xl font-bold mb-8'>All Products</h1>
      <p>Browse our extensive collection of innovative gadgets, featuring the latest in technology. Each product delivers exceptional quality and performance, tailored to enhance your tech experience.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
          services.map(service => <AllProductsCard key={service._id} service={service}></AllProductsCard>)
        }
    </div>
  </div>
  );
};

export default AllProducts;