import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as idTranslations } from '../translations/id';

function Projects() {
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : idTranslations;
    const project = Object.values(projectData)[0];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [imageLoadError, setImageLoadError] = useState({});
    const projectsPerPage = 6;

    // Calculate pagination
    const allProjects = Object.entries(projectData).slice(1);
    const totalPages = Math.ceil(allProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = allProjects.slice(startIndex, endIndex);
    const IMAGE_PREFIX = "./assets/images/project-photos/";

    const handleImageError = (imagePath) => {
        setImageLoadError(prev => ({
            ...prev,
            [imagePath]: true
        }));
    };

    const getImagePath = (imagePath) => {
        // If the image failed to load, return a fallback image
        if (imageLoadError[imagePath]) {
            return '/images/fallback.jpg';
        }
        return imagePath;
    };

    return (
        <div className="min-h-screen pt-16">
            <div className="container mx-auto px-4 py-16">
                <div className="mb-12 flex flex-row items-start">
                    <div className="flex-shrink-0 mr-6 mt-2">
                        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
                            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold">{translations.projects.title}</h1>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            {translations.projects.description}
                        </p>
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
                                        onError={() => handleImageError(image)}
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
                <div className="relative mb-12">
                    <div className="overflow-x-auto">
                        <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                            {project.images?.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`relative group overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0`}
                                    style={{ width: '200px' }}
                                >
                                    <img 
                                        src={image}
                                        alt={`${project.title} - Thumbnail ${index + 1}`}
                                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                                        onError={() => handleImageError(image)}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-6">{translations.projects.previousProjects.title}</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {translations.projects.previousProjects.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {currentProjects.map(([id, project]) => (
                            <Link key={id} to={`/projects/${id}`} className="group">
                                <div>
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden outline outline-2 outline-gray-400 group-hover:outline-red-500 transition-all duration-300">
                                        <img 
                                            src={getImagePath(project.images[0])}
                                            alt={project.title}
                                            className="w-full h-48 object-cover"
                                            onError={() => handleImageError(project.images[0])}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="text-sm mt-2">
                                        <h3 className="font-medium text-gray-700 mt-4 group-hover:text-red-500 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400">{project.date} • {project.location}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end items-center space-x-2 mt-8">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg ${
                                currentPage === 1 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-red-500 text-white hover:bg-red-600'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div className="flex items-center space-x-2">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index + 1}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`w-10 h-10 rounded-lg ${
                                        currentPage === index + 1
                                            ? 'bg-red-200'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg ${
                                currentPage === totalPages 
                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                                    : 'bg-red-500 text-white hover:bg-red-600'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;