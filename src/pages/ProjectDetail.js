import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../data/projects';

function ProjectDetail() {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projectData[id] || {
        title: 'Project Not Found',
        description: 'The requested project could not be found.'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); // Scroll to top when the project ID changes

    return (
        <div className="min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <div className="mb-12">
                    <div className="flex items-start gap-6">
                        <button 
                            onClick={() => window.history.back()}
                            className="w-10 h-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors duration-300 flex-shrink-0"
                        >
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{project.title} - {project.date}</h1>
                            <div className="flex items-center text-gray-600 mb-8">
                                <span>{project.location}</span>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative mb-12">
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            {project.images?.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <img 
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        className="w-full h-96 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : project.images.length - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => setCurrentImageIndex(prev => (prev < project.images.length - 1 ? prev + 1 : 0))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {project.images?.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            <div className="grid grid-cols-6 gap-4 mb-12">
                {project.images?.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 outline outline-2 ${currentImageIndex === index ? 'outline-red-400' : 'outline-gray-400'}`}
                    >
                        <img 
                            src={image}
                            alt={`${project.title} - Thumbnail ${index + 1}`}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </button>
                ))}
            </div>
            </div>
        </div>
    );
}

export default ProjectDetail; 