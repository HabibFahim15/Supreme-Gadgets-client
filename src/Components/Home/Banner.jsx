import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Fade } from 'react-awesome-reveal';
const Banner = () => {
  return (
    <>
      <Swiper navigation={true} loop={true} modules={[Navigation, Autoplay]} className="mySwiper md:h-[700px] h-[500px] w-full rounded-xl">
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-70' src="https://thetechhacker.com/wp-content/uploads/2021/11/Are-electronic-Gadgets-Good-for-us-Or-are-they-Bad.jpg" alt="Headphone" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
            <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
              <div className='flex justify-center my-4'>
                <a href="#latest-products" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-none rounded-lg shadow-inner group">
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Explore</span>
                </a>
              </div>
            </Fade>
          </div>

        </SwiperSlide>
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-70' src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2023-08/230726-top-travel-tech-amazon-bd-2x1-1-f987db.jpg" alt="Headphone" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
            <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
            <div className='flex justify-center my-4'>
                <a href="#latest-products" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-none rounded-lg shadow-inner group">
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Explore</span>
                </a>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-70' src="https://qph.cf2.quoracdn.net/main-qimg-c461574a2cf29e2461540b978fe9745e-lq" alt="Headphone" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
            <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
            <div className='flex justify-center my-4'>
                <a href="#latest-products" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-none rounded-lg shadow-inner group">
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Explore</span>
                </a>
              </div>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide className='relative'><img className='md:h-[700px] h-[500px] w-full opacity-70' src="https://bastillin.com/wp-content/uploads/2022/08/pexels-michael-adeleye-6993182-scaled.jpg" alt="Headphone" />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <Fade direction='down'><h1 className='md:text-5xl text-xl font-bold text-white text-center'>Unleash the Power of Innovation <br /> with Supreme Gadgets</h1></Fade>
            <Fade direction='up'><p className='text-gray-200 md:text-sm text-xs text-center mt-6'>Experience the future of technology with Supreme Gadgets. We offer cutting-edge devices and premium accessories designed to enhance your lifestyle. Unleash innovation and elevate your tech game with us today.</p>
            <div className='flex justify-center my-4'>
                <a href="#latest-products" class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-none rounded-lg shadow-inner group">
                  <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                  <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                  <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                  <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Explore</span>
                </a>
              </div>
            </Fade>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

export default Banner;