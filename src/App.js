import './App.css';
import clientsData from './data/clients.json';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen w-full pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-start p-16">
            <div className="text-left text-white">
              <h1 className="text-5xl font-bold mb-4">Karya Artistika Nusa Indo</h1>
              <p className="text-xl mb-8">Build your dreams.</p>
              <div className="bg-white/30 backdrop-blur-xl p-6 rounded-2xl mb-6 max-w-lg absolute bottom-16 left-16">
                <p className="text-lg mb-8 max-w-2xl text-black">
                  We specialize in creating stunning retail spaces, commercial interiors, and hospitality environments. With over 15 years of experience, our team delivers exceptional craftsmanship and innovative design solutions that transform your vision into reality.
                </p>
                <button 
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium 
                            transform transition-all duration-300 
                            hover:scale-105 hover:shadow-lg 
                            active:scale-95 active:shadow-md"
                >
                  Contact Us →
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientsData.clients.map((client) => (
              <img 
                key={client.id}
                src={client.logo}
                alt={client.logo} 
                className="h-16 w-auto mx-auto filter transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-left mb-8">Our Projects</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <p className="text-gray-700 text-lg leading-relaxed">
                At Karya Artistika Nusa Indo, we take pride in delivering exceptional projects that transform spaces and exceed expectations. Our portfolio spans across retail, commercial, and hospitality sectors, showcasing our commitment to quality craftsmanship and innovative design solutions. Each project reflects our dedication to creating functional and aesthetically pleasing environments that align with our clients' vision.
              </p>
            </div>
            <div className="md:w-1/3 flex items-center justify-end">
              <button 
                className="bg-black text-white px-8 py-3 rounded-lg font-medium
                          transform transition-all duration-300
                          hover:scale-105 hover:shadow-lg
                          active:scale-95 active:shadow-md"
              >
                View all projects →
              </button>
            </div>
          </div>
          <div className="mt-8 relative">
            <div className="flex overflow-x-auto space-x-6 pb-4">
              <img src="https://placehold.co/600x400" alt="Project 1" className="h-64 w-96 object-cover rounded-lg flex-shrink-0" />
              <img src="https://placehold.co/600x400" alt="Project 2" className="h-64 w-96 object-cover rounded-lg flex-shrink-0" />
              <img src="https://placehold.co/600x400" alt="Project 3" className="h-64 w-96 object-cover rounded-lg flex-shrink-0" />
              <img src="https://placehold.co/600x400" alt="Project 4" className="h-64 w-96 object-cover rounded-lg flex-shrink-0" />
              <img src="https://placehold.co/600x400" alt="Project 5" className="h-64 w-96 object-cover rounded-lg flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-red-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold">Our Services</h2>
            </div>

            <div className="md:w-1/2">
              <div className="mb-4">
                <button 
                  className="w-full flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const content = document.getElementById('interior-content');
                    const icon = document.getElementById('interior-icon');
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    icon.classList.toggle('rotate-180');
                  }}
                >
                  <span className="font-semibold">Interior Fitout</span>
                  <svg id="interior-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id="interior-content" 
                  className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                >
                  <p className="p-6 text-gray-700">
                    Our interior design services combine creativity with functionality to create spaces that reflect your vision and meet your needs. From concept development to final execution, we ensure every detail is perfectly crafted.
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <button 
                  className="w-full flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const content = document.getElementById('construction-content');
                    const icon = document.getElementById('construction-icon');
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    icon.classList.toggle('rotate-180');
                  }}
                >
                  <span className="font-semibold">Interior Design</span>
                  <svg id="construction-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id="construction-content" 
                  className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                >
                  <p className="p-6 text-gray-700">
                    With our experienced team of construction professionals, we handle projects of all sizes with precision and expertise. We maintain the highest standards of quality while ensuring timely completion and cost efficiency.
                  </p>
                </div>
              </div>

              <div>
                <button 
                  className="w-full flex justify-between items-center py-4 px-6 rounded-lg transition-all duration-300"
                  onClick={() => {
                    const content = document.getElementById('renovation-content');
                    const icon = document.getElementById('renovation-icon');
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    icon.classList.toggle('rotate-180');
                  }}
                >
                  <span className="font-semibold">General Constructions</span>
                  <svg id="renovation-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  id="renovation-content" 
                  className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                >
                  <p className="p-6 text-gray-700">
                    Transform your existing space with our renovation services. We specialize in modernizing and revitalizing spaces while preserving their unique character and maximizing their potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
