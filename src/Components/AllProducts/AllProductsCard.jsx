import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllProductsCard = ({service} ) => {
  const {_id, name, image, description, price, rating } = service;
  return (
   <Fade damping={0.5}>
     <div className="card bg-base-100 md:w-96 shadow-xl">
    <figure>
      <img className="h-60 w-full"
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <div className="flex text-lg justify-between">
      <h2 className="font-semibold text-orange-500">Price: $ {price}</h2>
      <h2>Rating: {rating}</h2>
      </div>
      <div className="card-actions justify-start">
        <button className="btn text-white font-semibold btn-primary">Buy Now</button>
        <Link to={`/productDetails/${_id}`} className="btn btn-ghost bg-white text-black font-semibold">Details</Link>

      </div>
    </div>
  </div>
   </Fade>
  );
};

export default AllProductsCard;