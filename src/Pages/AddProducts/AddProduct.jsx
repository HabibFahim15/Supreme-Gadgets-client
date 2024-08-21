import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from 'sweetalert2'

const AddProduct = () => {
  const {user}=useContext(AuthContext)
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const image = form.photo.value;
    const description = form.description.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const email = user?.email

    const product = { name,category, image, description, price, email, quantity };
    fetch('http://localhost:5000/products',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data?.insertedId){
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "This Product added successfully"
        });
        form.reset()
      }
    })
  }
  return (
    <div className="bg-base-100 py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-300 md:mb-6 lg:text-3xl">Add Products</h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Fill the form to add product.You can add multiple products.</p>
    </div>
    <form onSubmit={handleAddProduct} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
      <div>
        <label for="=name" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Product Name*</label>
        <input name="name" className="w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div>
        <label for="category" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Category*</label>
        <input name="category" className="w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="price" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Price</label>
        <input name="price" className="w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="quantity" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Quantity*</label>
        <input name="quantity" className="w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="photo" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">PhotoURL*</label>
        <input name="photo" className="w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>

      <div className="sm:col-span-2">
        <label for="description" className="mb-2 inline-block text-sm text-gray-300 sm:text-base">Details*</label>
        <textarea name="description" className="h-64 w-full rounded border bg-base-100 px-3 py-2 text-gray-300 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
      </div>

      <div className="flex items-center justify-between sm:col-span-2">
        <input className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base" type="submit" value="Submit" />

        <span className="text-sm text-gray-500">*Required</span>
      </div>

     
    </form>
  </div>
</div>
  );
};

export default AddProduct;