import AboutUs from "../../../Components/Home/AboutUs/AboutUs";
import Banner from "../../../Components/Home/Banner";
import GetInTouch from "../../../Components/Home/ContactUs/GetInTouch";
import Products from "../../../Components/Home/Products";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Products></Products>
      <GetInTouch ></GetInTouch>
    </div>
  );
};

export default Home;