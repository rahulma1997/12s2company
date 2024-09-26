import React, { useEffect, useState } from 'react';

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= 4 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <section className="py-0 mx-4 mt-10" style={{ width: "1000px", marginLeft: "160px " }}>
      <div className="container mx-auto">
        <div className="text-center pb-6">
          <span className="text-gray-500 block mb-2">Our Global Work Industries</span>
          <h2 className="text-3xl font-bold">Latest Projects</h2>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform" style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}>
            
           
            <div className="project w-1/4 mx-4 my-4 hover:shadow-xl transition-shadow duration-300">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
                <div className="block h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/blockchain-technology-background-gradient-blue_53876-124646.jpg)', width:"600px" }}>
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <span className="fa fa-plus text-white text-2xl"></span>
                  </div>
                </div>
                <div className="p-4 text-center bg-slate-50 -mt-16 w-60 ml-16 ">
                  <span className="text-gray-500">Software</span>
                  <h3 className="text-lg font-semibold">Optocare Management</h3>
                </div>
              </div>
            </div>
            
            
            <div className="project w-1/4 mx-4 my-4 hover:shadow-xl transition-shadow duration-300 ml-32">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 ">
                <div className="block h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/management-organization-managing-strategy-process-concept_53876-132226.jpg)',width:"600px" }}>
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <span className="fa fa-plus text-white text-2xl"></span>
                  </div>
                </div>
                <div className="p-4 text-center bg-slate-50 -mt-16 w-60 ml-16">
                  <span className="text-gray-500">Software</span>
                  <h3 className="text-lg font-semibold">Management</h3>
                </div>
              </div>
            </div>
            
            
            <div className="project w-1/4 mx-4 my-4 hover:shadow-xl transition-shadow duration-300 pl-28">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
                <div className="block h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.prismic.io/getcircuit/d551c1e8-b17f-4496-b374-f80ee3ce73d4_Header+%2850%29.jpg?auto=compress%2Cformat&amp;w=3840&amp;fit=max&amp;q=75)' 
                  ,width:"600px"
                }}>
                  <div className="absolute inset-0 flex items-center justify-center ">
                    <span className="fa fa-plus text-white text-2xl"></span>
                  </div>
                </div>
                <div className="p-4 text-center bg-slate-50 -mt-16 w-60 ml-16">
                  <span className="text-gray-500">Software</span>
                  <h3 className="text-lg font-semibold">Barcode</h3>
                </div>
              </div>
            </div>
            
           
            <div className="project w-1/4 mx-4 my-4 hover:shadow-xl transition-shadow duration-300 pl-56">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96">
                <div className="block h-80 bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/premium-vector/iot-internet-things-background_127544-469.jpg)', 
                  width:"600px"
                }}>
                  <div className="absolute inset-0 flex items-center justify-center  ">
                    <span className="fa fa-plus text-white text-2xl"></span>
                  </div>
                </div>
                <div className="p-4 text-center bg-slate-50 -mt-16 w-60 ml-16">
                  <span className="text-gray-500">Software</span>
                  <h3 className="text-lg font-semibold">IOT</h3>
                </div>
              </div>
            </div>

          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: 4 }, (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
