const Impact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-accent-color text-white pt-28 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Our Community Impact</h1>
          <p className="text-xl">Making lasting change in our community</p>
        </div>
      </div>

      {/* Impact Timeline */}
      <div className="container-custom py-16">
        <div className="space-y-12">
          {/* 4th Annual 5K Run & Walk - May 2026 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1" style={{ backgroundColor: '#3fbdf4' }}></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 bg-white" style={{ borderColor: '#3fbdf4' }}></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2" style={{ borderColor: '#3fbdf4' }}>
                <div className="text-white px-6 py-3" style={{ backgroundColor: '#3fbdf4' }}>
                  <span className="text-lg font-semibold">May 30th, 2026</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4th Annual 5k Walk</h2>
                  <p className="text-gray-600">
                    Join us for our 4th Annual Walk the Talk 5K Run & 1 Mile Walk! This event brings our community together 
                    to support local charitable organizations and make a positive impact in Southern New Jersey. Together, 
                    we continue our mission of connecting people and creating lasting change in our communities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Contest Event - December 2025 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 border-red-600 bg-white"></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-red-600">
                <div className="bg-red-600 text-white px-6 py-3">
                  <span className="text-lg font-semibold">December 10th, 2025</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Big Elfin Cookie Crumble - Cookie Contest</h2>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-red-600">
                    <p className="text-2xl font-bold text-red-600">Community Event</p>
                    <p className="text-gray-600">Holiday Fun & Cookie Contest</p>
                  </div>
                  <p className="text-gray-600">
                    Come join us for a fun-filled day of delicious treats at the Big Elfin' Cookie Crumble - Cookie Contest! 
                    Get ready to taste some incredible holiday cookies and vote for your favorite. We'll have five special 
                    judges, twelve contestants, and a WHOLE LOTTA holiday fun!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 5K Walk Event 2025 */}
          <div className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-gray-300"></div>
            <div className="relative ml-8">
              <div className="absolute -left-11 top-0 w-8 h-8 rounded-full border-4 border-kelly-green bg-white"></div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-kelly-green">
                <div className="bg-kelly-green text-white px-6 py-3">
                  <span className="text-lg font-semibold">May 31st, 2025</span>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3rd Annual 5K Walk</h2>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-kelly-green">
                    <p className="text-2xl font-bold text-kelly-green">$22,818 Raised</p>
                    <p className="text-gray-600">for The Ike Foundation®</p>
                  </div>
                  <p className="text-gray-600">
                    Supporting The Ike Foundation®, a non-profit organization dedicated to connecting underserved 
                    youth with fishing and outdoor activities. The foundation's mission is to get urban and rural 
                    kids into the outdoors and foster a passion for nature through hands-on experiences. The funds 
                    raised help provide fishing equipment, educational programs, and college scholarships to young 
                    outdoor enthusiasts.
                  </p>
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

export default Impact; 