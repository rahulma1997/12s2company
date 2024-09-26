import React, { useState, useEffect } from 'react';

const CounterSection = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  
  const projectTarget = 5000;
  const customerTarget = 3000; 
  useEffect(() => {
    const duration = 2000; 
    const projectIncrementTime = duration / projectTarget; 
    const customerIncrementTime = duration / customerTarget; 

    const projectInterval = setInterval(() => {
      setProjectCount((prevCount) => {
        if (prevCount < projectTarget) {
          return prevCount + 1;
        } else {
          clearInterval(projectInterval);
          return projectTarget;
        }
      });
    }, projectIncrementTime);

    const customerInterval = setInterval(() => {
      setCustomerCount((prevCount) => {
        if (prevCount < customerTarget) {
          return prevCount + 1;
        } else {
          clearInterval(customerInterval);
          return customerTarget;
        }
      });
    }, customerIncrementTime);

    return () => {
      clearInterval(projectInterval);
      clearInterval(customerInterval);
    }; // Cleanup on unmount
  }, [projectTarget, customerTarget]);

  return (
    <section className="ftco-section mt-16 w-full" id="about-section">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <AboutImage />
          <AboutContent projectCount={projectCount} customerCount={customerCount} />
        </div>
      </div>
    </section>
  );
};

const AboutImage = () => {
  return (
    <div className="md:w-1/2 py-5 -ml-20 pr-28 p-24 text-left flex bg-blue-400 flex-col">
      <div className="mb-4 pt-4">
        <div className="heading-section ftco-animate">
          <span className="subheading text-sm">Instant Information Software Service Pvt. Ltd. A Software Company</span>
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">Best Provider for Industrial Services</h2>
          <p className="text-justify">
            Our aim is to become the preferred one-stop solution provider for companies thriving on innovation or witnessing exceptional growth in the retail, education, Healthtech, Ecommerce, Entertainment, payments, ERP and financial & professional services industry. With this aim in mind we deliver a full range of IT products and services that offer a total portfolio to match all your business needs, be it IT consulting and services, application development and maintenance or business process re-engineering among others. All initiatives at i2s2 software are passionately directed to our mainstay goal Return On Investment. The operation of our business and our actions are guided by objectives that focus on constantly upgrading and using our domain expertise for the benefit of our clients and partners through a consultative approach. We work with our clients to arrive at the best possible service that will allow cost and operating efficiencies through the product or application lifecycle.
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutContent = ({ projectCount, customerCount }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center">
      <div
        className="about-wrap w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYB_8jR4vDGgJ27oIx8kbQ17abtlJedKp9rpZyRM8wPWo2MLGdIJ66Q7tsvV39Uo6-6E&usqp=CAU)',
          height: '617px',
          width:"760px",
          marginLeft:"121px" 
        }}
      ></div>
     
      <div className="bg-blue-400 text-white rounded-lg shadow-lg p-6 mb-4 w-full md:w-60 -mt-96 -ml-96 mr-4 ">
      <div className="text-center flex flex-col items-center">
  <strong className="text-5xl font-bold">{projectCount}</strong>
  <span className="text-lg mt-2">Projects Completed</span>
</div>


      </div>

     
      <div className="bg-white border rounded-lg shadow-lg p-6 w-full md:w-60 -ml-96 mr-4">
        <div className="text-center flex flex-col items-center">
          <strong className="text-5xl font-bold text-blue-600">{customerCount}</strong>
          <span className="text-lg text-gray-700">Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
