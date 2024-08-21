import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AddProduct from "../Pages/AddProducts/AddProduct";
import AddedProducts from "../Pages/AddedProduct/AddedProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path:'/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/allitem',
        element: <AllProducts />
      },
    {
      path: '/productDetails/:id',
      element: <ProductDetails />
    },
      {
        path: '/addProduct',
        element: <AddProduct />
      },
      {
        path: '/addedProduct',
        element: <AddedProducts></AddedProducts>
      },
      {
        path:'aboutus',
        element: <AboutUs />
      }
    ]
  },
]);

export default router;