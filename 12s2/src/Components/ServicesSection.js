import React from 'react';

const ServicesSection = () => {
  return (
    <section className="relative ftco-section ftco-no-pt ftco-no-pb">
      <div className="absolute inset-x-0 top-0 z-10 flex flex-wrap justify-center -mt-20">
        <ServiceCard 
          title="Quality Product" 
          description="We are creating world-class Quality Product in industry"
          bgColor="bg-blue-100"
        />
        <ServiceCard 
          title="Professional Liability" 
          description="We are working with full Professional Liability"
          bgColor="bg-blue-600 text-white"
        />
        <ServiceCard 
          title="Dedicated To Our Clients" 
          description="Our team Dedicated To Our Clients full support 24X7"
          bgColor="bg-blue-100"
        />
      </div>
      <div className="container mt-24">
        <div className="flex flex-wrap justify-center">
          
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, bgColor }) => {
  return (
    <div className={`flex flex-col justify-center ${bgColor} text-center shadow-md p-4 h-40 mx-2 my-4 md:h-48 lg:h-44 lg:w-96 -mt-20`}>
      <h3 className="heading mb-2 text-lg md:text-xl font-bold">{title}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};


export default ServicesSection;
