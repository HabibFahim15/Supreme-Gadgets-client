import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
<section
   className="overflow-hidden pt-20 pb-12 lg:pt-[100px] lg:pb-[70px] rounded-3xl bg-base-200 my-24 dark:bg-dark"
   >
   <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between -mx-4">
         <div className="w-full px-4 lg:w-6/12">
            <Fade direction="left" cascade>
            <div className="flex items-center -mx-3 sm:-mx-4">
               <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                     <img
                        src="https://ychef.files.bbci.co.uk/1280x720/p08cw763.jpg"
                        alt=""
                        className="w-full rounded-3xl"
                        />
                  </div>
                  <div className="py-3 sm:py-4">
                     <img
                        src="https://s.yimg.com/ny/api/res/1.2/oELbOl95gPJrTSyqyHPJ1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://s.yimg.com/os/creatr-uploaded-images/2022-07/a8ccfee0-0831-11ed-b6ea-ab0b6567f2ce"
                        alt=""
                        className="w-full rounded-3xl"
                        />
                  </div>
               </div>
               <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                     <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-vFtS37Js1VubEFbakSES6SNmcPdAIZdMlUukmany-Y289isfjuQqU7SQEWlWxlHR-o&usqp=CAU"
                        alt=""
                        className="w-full rounded-3xl"
                        />
                     <span className="absolute -right-7 -bottom-7 z-[-1]">
                        <svg
                           width="134"
                           height="106"
                           viewBox="0 0 134 106"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                        </svg>
                     </span>
                  </div>
               </div>
            </div>
            </Fade>
         </div>
         <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
           <Fade direction="right" cascade>
           <div className="mt-10 lg:mt-0">
  <span className="block mb-4 text-lg font-semibold text-primary">
    Why Choose Us
  </span>
  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
    Elevate Your Tech Experience with Supreme Gadgets
  </h2>
  <p className="mb-5 text-base text-body-color dark:text-dark-6">
    At Supreme Gadgets, we offer cutting-edge devices that redefine your tech lifestyle. Our products are designed to provide superior performance and unmatched quality, ensuring you stay ahead of the curve.
  </p>
  <p className="mb-8 text-base text-body-color dark:text-dark-6">
    With a focus on innovation and customer satisfaction, we bring you the latest gadgets that blend functionality with style. Trust us to deliver the best in tech, tailored to your needs.
  </p>
  <a
  href="#top"
  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
>
  Get Started
</a>

<style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
`}</style>
</div>

           </Fade>
         </div>
      </div>
   </div>
</section>
  );
};

export default AboutUs;