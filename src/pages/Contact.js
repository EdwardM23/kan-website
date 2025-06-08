import { useLanguage } from '../context/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as idTranslations } from '../translations/id';

function Contact() {
  const { language } = useLanguage();
  const translations = language === 'en' ? enTranslations : idTranslations;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = `Contact Form Message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:contact@kan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="pt-16 bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 flex flex-row items-start">
          <div className="flex-shrink-0 mr-6 mt-2">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold mb-8">{translations.contact.title}</h1>
            <div className="leading-relaxed space-y-4">
              <p>{translations.contact.description}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">{translations.contact.formTitle}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {translations.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium
                          transform transition-all duration-300
                          hover:bg-red-700 hover:shadow-lg
                          active:scale-95 active:shadow-md"
              >
                {translations.contact.sendButton}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">{translations.contact.infoTitle}</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600 break-words">karya.artistika.nusaindo@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">{translations.contact.phone}</h3>
                    <p className="text-gray-600">+62 851-0036-3818</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 mt-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-medium">{translations.contact.address}</h3>
                    <p className="text-gray-600 break-words">123 Business Street, Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp button */}
              <div className="pt-4 mt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/6285100363818"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium
                            transform transition-all duration-300
                            hover:bg-green-700 hover:shadow-lg
                            active:scale-95 active:shadow-md"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                    alt="WhatsApp" 
                    className="w-5 h-5"
                  />
                  {translations.contact.whatsappButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 