
const Section = () => {
 
  return (
    <div className="mx-auto  w-full my-24">
    <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
     
      <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Andras Vas" className="h-full w-full object-cover object-center" />
      </div>
     
      <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
        <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

        <p className="mb-8 max-w-md text-gray-600">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>

        <div className="mt-auto">
          <a href="#" className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Contact support</a>
        </div>
      </div>
    
    </div>
  </div>
  );
};

export default Section;