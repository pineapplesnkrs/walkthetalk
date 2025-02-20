import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import logo from './assets/walk the walk.jpg'
import zoomedLogo from './assets/zoomed.jpg'
import facePic from './assets/face.jpg'
import Events from './pages/Events'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container-custom">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <Link to="/">
                  <img src={facePic} alt="Tim Jennings" className="h-16 w-16 object-cover rounded-lg border-2 border-kelly-green" />
                </Link>
                <h1 className="text-2xl font-bold text-kelly-green">Walk the Talk with Tim</h1>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-500 hover:text-gray-600"
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
                <Link to="/" className="text-gray-600 hover:text-kelly-green">About</Link>
                <Link to="/events" className="text-gray-600 hover:text-kelly-green">Events</Link>
                <Link to="/#impact" className="text-gray-600 hover:text-kelly-green">Our Impact</Link>
                <Link to="/#contact" className="text-gray-600 hover:text-kelly-green">Contact</Link>
                <button className="btn-primary">Donate</button>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/events" element={<Events />} />
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
      <div className="bg-kelly-green text-white pt-8 pb-20">
        <div className="container-custom text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={zoomedLogo} 
              alt="Walk the Talk Hero" 
              className="h-64 w-auto object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Making Strides for Change</h2>
          <p className="text-xl mb-8">Join us in our mission to make a difference in Southern New Jersey</p>
          <button className="bg-white text-kelly-green px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Join Our Next Walk
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <svg className="h-12 w-12 text-kelly-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Community Events</h3>
              <p className="text-gray-600">Building stronger communities through charity walks and community engagement</p>
            </div>
            <div className="text-center p-6">
              <svg className="h-12 w-12 text-kelly-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Greater Philadelphia Area</h3>
              <p className="text-gray-600">Serving Southern New Jersey and the Greater Philadelphia region</p>
            </div>
            <div className="text-center p-6">
              <svg className="h-12 w-12 text-kelly-green mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Making an Impact</h3>
              <p className="text-gray-600">Supporting local families and charitable organizations</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">About Walk the Talk with Tim</h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Founded by Tim Jennings, a respected community leader with over 25 years in the communications industry,
                Walk the Talk is dedicated to making a positive impact in our community through charitable walks and
                community engagement.
              </p>
              <p>
                Tim's entrepreneurial spirit and dedication to community service is reflected in his roles as the former
                President of the Greater Woodbury Chamber of Commerce, current Board Member of the Harbaugh House,
                and Board Member of Gloucester County Habitat for Humanity. His commitment to helping families extends
                from providing toys and transitional housing to creating pathways to homeownership.
              </p>
              <p>
                Through Walk the Talk, we bring people together to support meaningful causes and create lasting change
                in Southern New Jersey and the Greater Philadelphia area.
              </p>
            </div>
            <div className="mt-8 text-center">
              <button className="btn-primary">Learn More About Our Mission</button>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div id="impact" className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Community Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Harbaugh House Partnership</h3>
              <p className="text-gray-600">
                Working alongside the Harbaugh House to provide toys to children and support families
                with transitional housing needs throughout the year.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Habitat for Humanity</h3>
              <p className="text-gray-600">
                Serving on the Board of Gloucester County Habitat for Humanity, helping create pathways
                to homeownership and building stronger communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Community Leadership</h3>
              <p className="text-gray-600">
                Engaging with local businesses and organizations to strengthen our community and create
                meaningful connections that drive positive change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Walk the Talk with Tim</h3>
              <p className="text-gray-400">Making a difference, one step at a time.</p>
              <div className="mt-4">
                <p className="text-gray-400">Greater Philadelphia Area</p>
                <p className="text-gray-400">Southern New Jersey</p>
              </div>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Join our next charity walk</p>
                <p className="text-gray-400">Volunteer opportunities</p>
                <p className="text-gray-400">Partner with us</p>
              </div>
              <button className="btn-primary mt-4">Contact Us</button>
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

export default App
