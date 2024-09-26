import React from 'react';

const BlogSection = () => {
  const blogs = [
    {
      title: "The power of Suggestive Selling Techniques",
      date: "Nov. 15, 2022",
      author: "Admin",
      link: "blogs/view/The-power-of-Suggestive-Selling-Techniques",
      image: "https://koronapos.com/wp-content/uploads/2022/08/Suggestive-Selling-Featured-Image.png",
    },


    {
      title: "Why You Need A Website For Your Business?",
      date: "Nov. 05, 2022",
      author: "Admin",
      link: "blogs/view/Why-You-Need-A-Website-For-Your-Business",
      image: "https://www.velocityconsultancy.com/wp-content/uploads/2021/09/website.jpg",
    },
    {
      title: "5 WAYS TO KEEP CUSTOMERS COMING BACK TO YOUR STORE",
      date: "Aug. 18, 2022",
      author: "Admin",
      link: "blogs/view/5-WAYS-TO-KEEP-CUSTOMERS-COMING-BACK-TO-YOUR-STORE",
      image: "https://cdn.prod.website-files.com/65284b5cb29ee8599d31cfe7/65284b5cb29ee8599d31e47f_121022.1.jpg",
    },
  ];

  return (
    <section className="bg-light py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <span className="text-gray-500">Our Blog</span>
          <h2 className="text-3xl font-bold mb-4 ">Latest Blog Updates</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <a href={blog.link} className="block h-48 bg-cover" style={{ backgroundImage: `url(${blog.image})` }}></a>
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  <p>
                    <span className="mr-2 bg-blue-800 text-white p-2 hover:text-black">{blog.date}</span>
                    <span className="mr-2  bg-blue-800 text-white p-2 hover:text-black">{blog.author}</span>
                  </p>
                </div>
                <h3 className="text-lg font-semibold mt-2">
                  <a href={blog.link} className="text-black hover:text-blue-500">{blog.title}</a>
                </h3>
                <p className="mt-4">
                  <a href={blog.link} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-400">Read more</a>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href="blogs" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-400">See more</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
