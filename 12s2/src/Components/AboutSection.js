import React from 'react';

const AboutSection = () => {
  return (
    <section className="ftco-section mt-16 ml-20 mr-20" id="about-section"> 
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
};

const AboutImage = () => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div
        className="about-wrap w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://etimg.etb2bimg.com/photo/108041082.cms)',
        }}
      >
        <div className="icon flex items-center justify-center">
          <span className="fa fa-code text-4xl text-white"></span>
        </div>
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="md:w-1/2 py-5 pl-4 md:pl-5 flex flex-col">
      <div className="mb-4 pt-4">
        <div className="heading-section ftco-animate">
          <span className="subheading">Welcome to</span>
          <h2 className="mb-4 text-2xl font-bold">Instant Information Software Service Pvt. Ltd.</h2>
          <h3 className="text-lg">
            We are in this business since 2000 and We provide the best Software services
          </h3>
          <p className="text-justify text-base mt-4">
            Instant Information Software Services (i2s2) is an India-based product engineering company. We leverage our expertise in emerging technologies to deliver innovative solutions that accelerate our clients’ Digital Transformation initiatives. Our practices include Product Engineering, Cloud & Infrastructure, Security, Big Data & Analytics, Data Management & Governance, and IoT. Across all practice areas, we are making significant investments in next-generation technologies and solutions to help deliver innovation to our clients.
          </p>
          <p className="text-justify text-base mt-4">
            Our work is deeply rooted in values and goals that aim to ensure the success of our clients, employees, and other stakeholders. We work with our clients and stand by them, through thick and thin, assisting them in reaching their business goals. We endeavor to facilitate a platform for our employees to grow their careers, a platform that will encourage learning and innovation, through projects that involve technology solutions that have not been explored before. We work to support many charitable organizations, with their cause and enable our clients to reach various such organizations as well, through our technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
