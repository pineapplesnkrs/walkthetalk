import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import zoomedLogo from './assets/zoomed.jpg'
import facePic from './assets/face.jpg'
import bannerPic from './assets/picture banner.jpg'
import Impact from './pages/Impact'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white shadow-sm'
        }`}>
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <Link to="/" className="transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src={facePic} 
                    alt="Tim Jennings" 
                    className="h-16 w-16 object-cover rounded-lg border-2 border-kelly-green hover:border-4 transition-all duration-300" 
                  />
                </Link>
                <h1 className="text-2xl font-bold text-kelly-green hover:text-black transition-colors duration-300">
                  Walk the Talk with Tim
                </h1>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-kelly-green transition-colors duration-300"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
              </div>

              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                <Link to="/" className="text-gray-600 hover:text-kelly-green hover:-translate-y-1 transition-all duration-300">About</Link>
                <Link to="/#events" className="text-gray-600 hover:text-kelly-green hover:-translate-y-1 transition-all duration-300">Events</Link>
                <Link to="/impact" className="text-gray-600 hover:text-kelly-green hover:-translate-y-1 transition-all duration-300">Our Impact</Link>
                <Link to="/#contact" className="text-gray-600 hover:text-kelly-green hover:-translate-y-1 transition-all duration-300">Contact</Link>
                <button className="btn-primary transform hover:scale-105 hover:shadow-lg transition-all duration-300">Donate</button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/impact" element={<Impact />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

// HomePage component containing the main content
function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-kelly-green text-white pt-28 pb-20">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={zoomedLogo} 
              alt="Walk the Talk Hero" 
              className="h-64 w-auto object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl" 
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Making Strides for Change</h2>
          <p className="text-xl mb-8 animate-fade-in-delay">Join us in our mission to make a difference!</p>
          <button className="bg-white text-kelly-green px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 hover:shadow-xl transition-all duration-300">
            Join Our Mailing List
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className={`text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${feature.link ? 'cursor-pointer' : ''}`}
                onClick={() => feature.link && window.open(feature.link, '_blank')}
              >
                <div className="relative">
                  <svg 
                    className="h-12 w-12 text-kelly-green mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                {feature.link && (
                  <div className="mt-4 text-kelly-green hover:underline">Click to register →</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Walk the Talk with Tim</h2>
            <div className="space-y-6 text-gray-600">
              <p className="hover:text-black transition-colors duration-300">
                Founded by Tim Jennings, a respected community leader and entrepreneur with over 25 years 
                in the technology industry, Walk the Talk emerged from a passion for connecting and 
                strengthening our community. As the Owner and CEO of Telecorp Technologies, a full-service 
                IT and Telecom company established in 1998, Tim has demonstrated his ability to identify 
                and solve complex challenges.
              </p>
              <p className="hover:text-black transition-colors duration-300">
                The journey began in late 2020 with "Walkin' and Talkin' with Tim," where Tim conducted 
                fun, informal interviews with local leaders, business owners, and influential community 
                members. This initiative evolved into Walk the Talk with Tim, a 501(c)(3) nonprofit 
                dedicated to supporting and empowering nonprofit organizations and individuals in need 
                within our communities.
              </p>
              <p className="hover:text-black transition-colors duration-300">
                Tim's dedication to community service is reflected in his roles as the former President 
                of the Greater Woodbury Chamber of Commerce and current Board Member of both the Nor'Easter 
                Nick's Rainy Day Project and Gloucester County Habitat for Humanity. His commitment extends 
                from providing toys and transitional housing to creating pathways to homeownership for 
                families.
              </p>
              <p className="hover:text-black transition-colors duration-300">
                A proud resident of Gloucester County for over 40 years, Tim lives with his wife, Deb, 
                and has raised two daughters, Sarah and Kristin. Through Walk the Talk, we continue to 
                bring people together to support meaningful causes and create lasting change in our communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">It All Started with a Walk</h2>
            <img 
              src={bannerPic} 
              alt="Walk the Talk Banner" 
              className="w-full h-auto rounded-lg shadow-lg object-cover transform hover:scale-105 transition-transform duration-500 hover:shadow-2xl mb-12" 
            />
            
            {/* Video Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div 
                onClick={() => window.open('https://www.youtube.com/watch?v=K0PgL00zr_Y', '_blank')}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={`https://img.youtube.com/vi/K0PgL00zr_Y/hqdefault.jpg`}
                    alt="Walk the Talk Video 1"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-kelly-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video 2 */}
              <div 
                onClick={() => window.open('https://www.youtube.com/watch?v=2NXQbpR4Vn8', '_blank')}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={`https://img.youtube.com/vi/2NXQbpR4Vn8/hqdefault.jpg`}
                    alt="Walk the Talk Video 2"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-kelly-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video 3 */}
              <div 
                onClick={() => window.open('https://www.youtube.com/watch?v=Ena9TzqlH94', '_blank')}
                className="cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={`https://img.youtube.com/vi/Ena9TzqlH94/hqdefault.jpg`}
                    alt="Walk the Talk Video 3"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-kelly-green rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* YouTube Channel Link */}
            <div className="text-center mt-8">
              <a 
                href="https://www.youtube.com/@walkintalkinwithtim9154" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-kelly-green hover:text-black transition-colors duration-300 group"
              >
                <svg 
                  className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="text-lg font-medium">Watch More Episodes on YouTube</span>
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div id="events" className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-kelly-green text-white p-6">
              <h3 className="text-2xl font-bold">3rd Annual Walk the Talk 5K & 1 Mile Walk</h3>
              <p className="text-lg mt-2">May 17th, 2025</p>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Join us for our next community walk benefiting The Ike Foundation®, a non-profit organization 
                dedicated to connecting underserved youth with fishing and outdoor activities. Your participation 
                helps provide fishing equipment, educational programs, and college scholarships to young outdoor 
                enthusiasts.
              </p>
              <a 
                href="https://runsignup.com/Race/NJ/WestDeptford/WalktheTalk5K" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-block transform hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div id="impact" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {impacts.map((impact) => (
              <div 
                key={impact.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-kelly-green">{impact.title}</h3>
                <p className="text-gray-600 hover:text-black transition-colors duration-300">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 hover:text-kelly-green transition-colors duration-300">
                Walk the Talk with Tim
              </h3>
              <p className="text-gray-400 hover:text-white transition-colors duration-300">
                Making a difference, one step at a time.
              </p>
              <div className="mt-4">
                <a 
                  href="https://maps.google.com/?q=1535+Gateway+Blvd,+Woodbury,+NJ+08096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 block"
                >
                  1535 Gateway Blvd<br />
                  Woodbury, NJ 08096
                </a>
                <a 
                  href="tel:+18568121222" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 block mt-2"
                >
                  (856) 812-1222
                </a>
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2">
                <a 
                  href="https://runsignup.com/Race/NJ/WestDeptford/WalktheTalk5K"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer block"
                >
                  Join our next charity walk
                </a>
                <p className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Volunteer opportunities
                </p>
                <p className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
                  Partner with us
                </p>
              </div>
              <button className="btn-primary mt-4 transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Walk the Talk with Tim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

const features = [
  {
    title: "Community Events",
    description: "Building stronger communities through community engagement",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  },
  {
    title: "Walk The Talk 5K & 1 Mile Walk",
    description: "Sign up here!",
    link: "https://runsignup.com/Race/NJ/WestDeptford/WalktheTalk5K",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  },
  {
    title: "Making an Impact",
    description: "Supporting families and charitable organizations",
    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  }
];

const impacts = [
  {
    title: "Nor'Easter Nick's Rainy Day Project",
    description: "Supporting a vital organization that connects South Jersey families with basic human needs, providing emergency housing assistance, utility bill help, disaster relief, and holiday meal assistance through ShopRite gift cards."
  },
  {
    title: "Habitat for Humanity",
    description: "Serving on the Board of Gloucester County Habitat for Humanity, helping create pathways to homeownership and building stronger communities."
  },
  {
    title: "Community Leadership",
    description: "Engaging with local businesses and organizations to strengthen our community and create meaningful connections that drive positive change."
  }
];

export default App
