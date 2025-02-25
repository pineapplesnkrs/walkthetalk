import React from 'react';

const boardMembers = [
  {
    name: "Tim Jennings",
    role: "Founder & President",
    email: "tim@walkthetalkwithtim.org",
    description: "Founder of Walk the Talk with Tim, CEO of Telecorp Technologies, and dedicated community leader with over 25 years of experience in technology and philanthropy."
  },
  {
    name: "Deb Jennings",
    role: "Board Member",
    email: "deb@walkthetalkwithtim.org",
    description: "Passionate advocate for community development and integral part of the Walk the Talk mission since its inception."
  },
  {
    name: "Kristin Jennings",
    role: "Board Member",
    email: "kristin@walkthetalkwithtim.org",
    description: "Committed to expanding Walk the Talk's impact and fostering meaningful connections within the community."
  }
];

const Contact = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Get in touch with our team to learn more about how you can get involved.
          </p>

          {/* Board Members Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {boardMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-kelly-green mb-2">{member.name}</h3>
                  <p className="text-gray-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm h-24">{member.description}</p>
                </div>
                <a 
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-kelly-green hover:text-black transition-colors duration-300 mt-auto"
                >
                  <svg 
                    className="w-5 h-5 mr-2 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <span className="inline-block">{member.email}</span>
                </a>
              </div>
            ))}
          </div>

          {/* General Contact Information */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Visit or Write to Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h3 className="font-semibold mb-3">Office Location</h3>
                <a 
                  href="https://maps.google.com/?q=1535+Gateway+Blvd,+Woodbury,+NJ+08096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-kelly-green transition-colors duration-300"
                >
                  1535 Gateway Blvd<br />
                  Woodbury, NJ 08096
                </a>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-3">Phone</h3>
                <a 
                  href="tel:+18568121222"
                  className="text-gray-600 hover:text-kelly-green transition-colors duration-300"
                >
                  (856) 812-1222
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 