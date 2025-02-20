import React from 'react';

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-kelly-green text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Charity Walks</h1>
          <p className="text-xl">Making strides for change in our community</p>
        </div>
      </div>

      {/* Events Timeline */}
      <div className="container-custom py-16">
        <div className="space-y-12">
          {/* Upcoming Event 2024 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-kelly-green"></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 border-kelly-green bg-white"></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-kelly-green">
                <div className="bg-kelly-green text-white px-6 py-3">
                  <span className="text-lg font-semibold">May 17th, 2024</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3rd Annual 5K Walk</h2>
                  <p className="text-gray-600 mb-6">
                    Join us for our next community walk as we continue our mission of supporting local families
                    and strengthening our community. This year's proceeds will help fund initiatives that make
                    a direct impact in Southern New Jersey.
                  </p>
                  <button className="btn-primary">Register Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* 2024 Past Event */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 border-[#F74902] bg-white"></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#F74902]">
                <div className="bg-[#F74902] text-white px-6 py-3">
                  <span className="text-lg font-semibold">May 11th, 2024</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2nd Annual 5K Walk</h2>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-[#F74902]">
                    <p className="text-2xl font-bold text-[#F74902]">$15,646 Raised</p>
                    <p className="text-gray-600">for Nor'Easter Nick's Rainy Day Project</p>
                  </div>
                  <p className="text-gray-600">
                    Supporting Nor'Easter Nick's Rainy Day Project's mission of connecting South Jersey families 
                    with basic human needs. The foundation provides emergency housing assistance, helps with utility 
                    bills, offers disaster relief, and has provided over $40,000 in holiday meal assistance through 
                    ShopRite gift cards to families in need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2023 Past Event */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 border-gray-600 bg-white"></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-800">
                <div className="bg-gray-800 text-white px-6 py-3">
                  <span className="text-lg font-semibold">May 6th, 2023</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Inaugural 5K Walk</h2>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-gray-800">
                    <p className="text-2xl font-bold text-gray-800">$13,200 Raised</p>
                    <p className="text-gray-600">for Gloucester County Habitat for Humanity</p>
                  </div>
                  <p className="text-gray-600">
                    Supporting Gloucester County Habitat for Humanity's mission of building strength, stability, 
                    and self-reliance through shelter. The funds raised help create pathways to homeownership 
                    for local families, building not just houses, but foundations for stronger communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events; 