import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../data/projects';

function ProjectDetail() {
    const { id } = useParams();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [imageLoadError, setImageLoadError] = useState({});
    const [isTransitioning, setIsTransitioning] = useState(false);

    const project = projectData[id] || {
        title: 'Project Not Found',
        description: 'The requested project could not be found.'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]); // Scroll to top when the project ID changes

    // Preload adjacent images
    useEffect(() => {
        if (project.images) {
            const nextIndex = (currentImageIndex + 1) % project.images.length;
            const prevIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
            
            const preloadImage = (src) => {
                const img = new Image();
                img.src = src;
            };

            preloadImage(project.images[nextIndex]);
            preloadImage(project.images[prevIndex]);
        }
    }, [currentImageIndex, project.images]);

    const handleImageError = (imagePath) => {
        setImageLoadError(prev => ({
            ...prev,
            [imagePath]: true
        }));
    };

    const handleImageLoad = (imagePath) => {
        setImagesLoaded(prev => ({
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

    const handleImageChange = (newIndex) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentImageIndex(newIndex);
        setTimeout(() => setIsTransitioning(false), 500); // Match transition duration
    };

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
                        <div 
                            className="flex transition-transform duration-400 ease-in will-change-transform" 
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {project.images?.map((image, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="relative w-full h-[36rem] bg-gray-100">
                                        <img 
                                            src={getImagePath(image)}
                                            alt={`${project.title} - Image ${index + 1}`}
                                            className={`w-full h-[36rem] object-cover transition-opacity duration-300 ${
                                                imagesLoaded[image] ? 'opacity-100' : 'opacity-0'
                                            }`}
                                            onError={() => handleImageError(image)}
                                            onLoad={() => handleImageLoad(image)}
                                            loading={index === 0 ? "eager" : "lazy"}
                                        />
                                        {!imagesLoaded[image] && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button 
                        onClick={() => handleImageChange((currentImageIndex - 1 + project.images.length) % project.images.length)}
                        disabled={isTransitioning}
                        className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
                            isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => handleImageChange((currentImageIndex + 1) % project.images.length)}
                        disabled={isTransitioning}
                        className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-opacity duration-300 ${
                            isTransitioning ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
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
                                onClick={() => handleImageChange(index)}
                                disabled={isTransitioning}
                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                                } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                            />
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
                    {project.images?.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            disabled={isTransitioning}
                            className={`relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 outline outline-2 ${
                                currentImageIndex === index ? 'outline-red-400' : 'outline-gray-400'
                            } ${isTransitioning ? 'cursor-not-allowed' : ''}`}
                        >
                            <div className="relative w-full h-32 bg-gray-100">
                                <img 
                                    src={getImagePath(image)}
                                    alt={`${project.title} - Thumbnail ${index + 1}`}
                                    className={`w-full h-32 object-cover transition-all duration-300 ${
                                        imagesLoaded[image] ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    onError={() => handleImageError(image)}
                                    onLoad={() => handleImageLoad(image)}
                                    loading="lazy"
                                />
                                {!imagesLoaded[image] && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-6 h-6 border-3 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail; 