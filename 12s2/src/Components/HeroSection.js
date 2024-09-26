import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="hero-wrap js-fullheight relative" 
      style={{ 
        backgroundImage: 'url(https://img.freepik.com/free-photo/business-people-working-laptop_53876-25059.jpg)', 
        height: '600px', 
        backgroundPosition: 'center', 
        backgroundSize: 'cover' 
      }}
    >
      
      <div className="absolute inset-0 bg-blue-200 opacity-60"></div>
      
     
      <div className="container h-full flex items-center px-4 md:px-16 lg:px-32">
        <div className="row no-gutters slider-text h-full items-center">
          <div className="col-lg-6 mx-auto ftco-animate fadeInUp">
            <div className="p-8 text-white relative z-10 max-w-md"> 
              <h1 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">Welcome to i2s2</h1>
              <p className="mb-6 text-lg md:text-xl leading-relaxed">
                Ensuring the new era of next-gen technology... Our work is deeply rooted in values and goals that aim to ensure the success of our clients, employees, and other stakeholders.
              </p>
              <p>
                <a href="#services-section" className="btn btn-primary text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded mr-2">Our Services</a>
                <a href="page/contact" className="btn btn-white text-gray-800 bg-white hover:bg-gray-200 px-6 py-3 rounded">Request A Quote</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
