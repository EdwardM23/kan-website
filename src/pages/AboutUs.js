import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as idTranslations } from '../translations/id';

function AboutUs() {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : idTranslations;

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-12 flex flex-row items-start">
          <div className="flex-shrink-0 mr-6 mt-2">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{translations.aboutUs.companyProfile.title}</h1>
            <div className="leading-relaxed space-y-4">
              {translations.aboutUs.companyProfile.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Image Separator */}
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="col-span-1">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
              alt="Team meeting in modern office" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="col-span-2">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
              alt="Architects discussing blueprints" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Journey */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12">{translations.aboutUs.journey.title}</h2>
          <div className="space-y-8">
            {translations.aboutUs.journey.items.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/3">
                  <span className="text-red-500">{item.year}</span>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12">{translations.aboutUs.values.title}</h2>
          <div className="space-y-8">
            {translations.aboutUs.values.items.map((item, index) => (
              <div key={index} className="flex">
                <div className="w-1/3">
                  <span className="text-red-500">{item.title}</span>
                </div>
                <div className="w-2/3">
                  <ul className="list-disc pl-5 space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-700">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Management Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12">{translations.aboutUs.management.title}</h2>
          <div className="space-y-8">
            {translations.aboutUs.management.members.map((member, index) => (
              <div key={index} className="flex">
                <div className="w-1/3">
                  <span className="text-red-500">{member.name}</span>
                  <p className="text-gray-600 mt-1">{member.position}</p>
                </div>
                <div className="w-2/3">
                  <p className="text-gray-700">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Redirect Section */}
      <div className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
              {translations.aboutUs.contact.title}
            </h2>
            <a 
              href="/contact"
              className="w-full md:w-auto inline-block bg-black text-white px-6 md:px-8 py-3 rounded-lg font-medium
                      transform transition-all duration-300 text-center
                      hover:scale-105 hover:shadow-lg
                      active:scale-95 active:shadow-md"
            >
              {translations.aboutUs.contact.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs; 