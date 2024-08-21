import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import AddedProductsCard from './AddedProductsCard';

const AddedProducts = () => {
  const {user} = useContext(AuthContext)
  const [products, setProducts] = useState();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/products/myProduct/${user.email}`)
        .then((res) => res.json())
        .then((data) =>
        setProducts(data))
        .catch((error) => console.error('Error fetching bikes:', error));
    }
  }, [user])




  return (
    <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">My Added Products</h2>
          <p className="mx-auto max-w-screen-md text-center dark:text-gray-300 md:text-lg">
            Here you can see your Added Product.And You can delete any of them.
          </p>
        </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
    {
      products?.map(product => <AddedProductsCard key={product._id} product={product}></AddedProductsCard>)
    }
    </div>
  </div>
</div>
  );
};

export default AddedProducts;