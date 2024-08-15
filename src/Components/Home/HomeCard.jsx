

const HomeCard = ({service}) => {
  const { name, image, description, price } = service;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <img className="h-60 w-full"
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{description}</p>
      <h2 className="font-semibold text-orange-500">Price: $ {price}</h2>
      <div className="card-actions justify-start">
        <button className="btn text-white font-semibold btn-primary">Buy Now</button>
        <button className="btn btn-ghost bg-white text-black font-semibold">Details</button>

      </div>
    </div>
  </div>
  );
};

export default HomeCard;