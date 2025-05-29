import './App.css';
import clientsData from './data/clients.json';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Projects from './Projects';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
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
                    <p className="text-xl mb-8">Transform your dreams into reality!</p>
                    <div className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl mb-6 max-w-lg absolute bottom-16 left-16">
                      <p className="text-lg mb-8 max-w-2xl text-black">
                        We deliver exceptional work and craftsmanship tailored to your needs, let's build your extraordinary vision into reality together!
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
                      At Karya Artistika Nusaindo, we take heart in delivering impactful solutions that shape your visions. Each project reflects our commitment to creativity, excellence, and discipline, explore our portofolio to see how we have transformed our client's visions into reality.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex items-center justify-end">
                    <a 
                      href="/projects"
                      className="bg-black text-white px-8 py-3 rounded-lg font-medium
                                transform transition-all duration-300
                                hover:scale-105 hover:shadow-lg
                                active:scale-95 active:shadow-md"
                    >
                      View all projects →
                    </a>
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
                        <span className="font-semibold">Fit Out (Commercial & Retail Spaces)</span>
                        <div className="h-[2px] bg-red-500 flex-grow mx-2"></div>
                        <svg id="interior-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        id="interior-content" 
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                      >
                        <p className="p-6 text-gray-700">
                          Transforming empty shells and spaces into functional environments, we specialize in turnkey interior fit outs for malls, offices, and retail spaces. 
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
                        <div className="h-[2px] bg-red-500 flex-grow mx-2"></div>
                        <svg id="construction-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        id="construction-content" 
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                      >
                        <p className="p-6 text-gray-700">
                          Our team created harmonious, user-centric spaces through 3D visualization, space planning, material curation, furniture coordination, and lighting design.
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
                        <div className="h-[2px] bg-red-500 flex-grow mx-2"></div>
                        <svg id="renovation-icon" className="w-6 h-6 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        id="renovation-content" 
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out rounded-b-lg"
                      >
                        <p className="p-6 text-gray-700">
                          From commercial buildings, large scale projects, and residential, we build almost anything. 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
