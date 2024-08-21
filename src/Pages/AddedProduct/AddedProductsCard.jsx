import React from 'react';

const AddedProductsCard = ({product}) => {
  const {name, image,price, quantity,description}= product
  return (
    <div>
        <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
          <img src={image} loading="lazy" alt="Photo by Galina N" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

       <div className='flex justify-between'>
       <div>
          <a href="#" className="hover:gray-800 mb-1 text-gray-200 transition duration-100 lg:text-lg">{name}</a>

          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-200 lg:text-lg">${price}</span>
          </div>
        </div>
        <div>
          <button className="text-2xl font-bold pr-4 text-gray-200">X</button>
        </div>
        
       </div>
      </div>
  );
};

export default AddedProductsCard;