import React from 'react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="w-[100vw] h-[100vh] bg-[#f3efe8] flex items-center justify-center p-6 md:p-12 lg:p-24 font-sans text-black overflow-hidden">
      <div className="max-w-7xl w-full flex justify-center">

        <div className="flex flex-col justify-center">
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
            Contact Us
          </h1>
          <div className="border-t border-l border-black pt-12 pl-6 md:pl-12">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="flex flex-col gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-transparent border-b border-black pb-2 outline-none placeholder-black w-full"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-transparent border-b border-black pb-2 outline-none placeholder-black w-full"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="bg-transparent border-b border-black pb-2 outline-none placeholder-black w-full"
                />
              </div>

              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-xl mb-2">Contact</h3>
                  <a href="mailto:hi@fashion.com" className="text-gray-700 hover:text-black transition-colors">
                    hi@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Based in</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Place,<br />
                    Country
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-40 pt-4 ">
              <button className="bg-black text-white px-10 py-3 rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto">
                Contact Us
              </button>
              
              <div className="flex items-center gap-6">
                {/* Facebook Icon */}
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                {/* Instagram Icon */}
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                {/* Twitter / X Icon */}
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}