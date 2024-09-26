import React from 'react';

const ServicesSection = () => {
  return (
    <section className="ftco-section bg-half-light mt-10" id="services-section">
      <div className="container mx-auto">
        <div className="row justify-center pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            <span className="subheading text-xl font-semibold">Our Services</span>
            <h2 className="mb-4 text-3xl md:text-4xl font-bold">We Offer Services</h2>
          </div>
        </div>
        <div className="flex flex-wrap  ">
          <ServiceCard 
            title="Digital Marketing Services" 
            imageUrl="https://img.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg" 
            link="https://www.i2s2world.com/service/view/1" 
          />
          <ServiceCard 
            title="Data and Analytics Services" 
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9k4mAE2UtazoYkShzv4BJnlr6V1u1jKg2r0IcUi6kEFPdSP1cDPPt_5p-vKy8zqENIFc&usqp=CAU" 
            link="https://www.i2s2world.com/service/view/4" 
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, imageUrl, link }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex justify-center">
      <div className="services-wrap ftco-animate border rounded-lg overflow-hidden shadow-md p-8">
        <div 
          className="img h-48 bg-cover  bg-center p-2" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="text h-36 flex flex-col justify-between p-4">
          <h2 className="text-lg font-semibold text-center">{title}</h2>
          <p className="text-center mt-2">
            <a href={link} className="btn btn-primary bg-blue-900 text-white py-2 px-4 rounded ">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
