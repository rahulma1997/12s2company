
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-500 text-white py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-bold mb-2">About</h2>
                        <p className="text-sm text-gray-200">
                            Instant Information Software Services (i2s2) is a India based product engineering...
                        </p>
                        <ul className="mt-4">
                            <li>Visitors: 318200</li>
                        </ul>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://twitter.com/instant_pvt" target="_blank" rel="noopener noreferrer" className="text-gray-200">
                                <span className="fa fa-twitter"></span>
                            </a>
                            <a href="https://www.facebook.com/i2s2worldOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-200">
                                <span className="fa fa-facebook"></span>
                            </a>
                            <a href="https://www.instagram.com/instant_information_software_s/" target="_blank" rel="noopener noreferrer" className="text-gray-200">
                                <span className="fa fa-instagram"></span>
                            </a>
                            <a href="https://www.linkedin.com/company/instant-information-software-service-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-200">
                                <span className="fa fa-linkedin"></span>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=+919907817408" target="_blank" rel="noopener noreferrer" className="text-gray-200">
                                <span className="fa fa-whatsapp"></span>
                            </a>
                        </div>
                    </div>

                    
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="page/about-us" className="text-gray-200 hover:underline">About Us</a></li>
                            <li><a href="blogs" className="text-gray-200 hover:underline">Blog Posts</a></li>
                            <li><a href="page/award-recognition" className="text-gray-200 hover:underline">Award recognition</a></li>
                            <li><a href="https://www.i2s2world.com/book_your_demo" className="text-gray-200 hover:underline">Book Demo</a></li>
                        </ul>
                    </div>

                    
                    <div className="w-full md:w-1/3 mb-6">
                        <h2 className="text-lg font-bold mb-2">Contact</h2>
                        <ul className="space-y-2">
                            <li>Pune 411041 (MH)</li>
                            <li>Burhanpur 450331 (MP)</li>
                            <li>+(91) 7325-292511 | 9907817408</li>
                            <li>customer@i2s2world.com</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-blue-600 py-4">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        Copyright &copy; <span>{new Date().getFullYear()}</span> All rights reserved by Instant Information Software Service Pvt. Ltd.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
