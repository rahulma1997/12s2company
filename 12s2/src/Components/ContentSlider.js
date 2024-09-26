import React, { useEffect, useState } from 'react';
 

const ContentSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    {
      id: 1,
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "Jeff Freshman",
      position: "Guests",
      image: "https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
    },
    {
      id: 2,
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "Jeff Freshman",
      position: "Guests",
      image: "https://t3.ftcdn.net/jpg/01/42/01/84/360_F_142018449_yR0avsaJqbIx8NA47sINMoaxdtn1sPzh.jpg"
    },
    {
      id: 3,
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "Jeff Freshman",
      position: "Guests",
      image: "https://t4.ftcdn.net/jpg/03/18/94/15/360_F_318941578_H3jyz38r6pToFPFbIdQb1L7LGsnTuv02.jpg"
    },
    {
      id: 4,
      content: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
      name: "Jeff Freshman",
      position: "Guests",
      image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= projects.length ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
    <section className="absolute right-0 py-0 mx-auto mt-10 bg-blue-500 ml-96 " style={{ width: "700px"  }}>
      <div className="container mx-auto">
        <div className="relative overflow-hidden">
          <div className={`flex transition-transform duration-300`} style={{ transform: `translateX(-${currentIndex * 115}%)` }}>
            {projects.map((project) => (
              <div key={project.id} className="project w-full mx-4 my-4 hover:shadow-xl transition-shadow duration-300 bg-blue-500 text-center text-slate-50 mr-60 ">
                <div className="rounded-lg overflow-hidden w-96 mx-auto ml-40 text-center ">
                  <div className="block h-80 bg-cover bg-center p-5">
                    <p className="text-lg  mb-4">{project.content}</p>
                    <div className="flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="rounded-full w-20 h-20 mr-2"
                      />
                      <p className="name">{project.name}</p>
                    </div>
                    <span className="position">{project.position}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="fa fa-plus text-white text-2xl"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {projects.map((_, index) => (
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
    <div className="col-md-6 p-4 w-[650px] h-[380px] mt-10 pl-md-0 py-md-5 pr-md-5 flex items-center bg-blue-800">
    <div className="heading-section text-white">
        <span className="subheading">Read Testimonials</span>
        <h2 className="mb-4 text-5xl font-bold">It's always a joy to hear that the work we do has positive reviews</h2>
    </div>
</div>
</>
  );
};

export default ContentSlider;
