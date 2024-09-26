import React from 'react';

const IntroSection = () => {
  return (
    <section className="ftco-intro mt-14 ml-20 mr-20">
      <div className="container mx-auto">
        <div className="row justify-center">
          <div className="col-md-12 text-center">
            <div
              className="relative w-full h-64 bg-cover bg-center"
              style={{ 
                backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuHRNrqeNB742IBIKazrdxFi9VpgeIXKkOQ7Td6_H2y7fKH_r6NJlJttZHBwAOJjcJvw&usqp=CAU' 
              }}
            >
              <div className="absolute inset-0 bg-blue-300 opacity-50"></div> 
              <h2 className="relative text-white text-2xl md:text-4xl font-bold">Providing Personalized and High Quality Services</h2>
             
              <p className="relative text-white mt-4 text-base md:text-lg">
                Providing personalized customer service experiences across industries and product types are no longer a novelty but crucial to maintaining excellent customer relationships and we are expert in this.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default IntroSection;
