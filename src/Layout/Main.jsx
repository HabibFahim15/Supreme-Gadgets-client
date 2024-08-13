import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      <div className="min-h-[calc(100vh-145px)] md:mx-20">
      <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;