import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-engram-purple/5 pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading leading-tight">
              Early Intervention That{' '}
              <span className="text-engram-purple">Changes Lives</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Supporting children with developmental and learning needs through personalized therapy 
              and multisensory education — across Vasai, Mumbai, and pan-India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Get Started Today
              </button>
              <button className="btn-secondary">
                Book a Free Consultation
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">4.9/5 Rating</span>
              </div>
              <div className="text-sm text-gray-600">
                500+ Families Helped
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative" data-aos="fade-left">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1590242987034-2ca1678bce65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDN8MA&ixlib=rb-4.1.0&q=85"
                alt="Child development therapy"
                className="rounded-2xl shadow-2xl w-full h-auto animate-float"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-pulse">
                <div className="w-8 h-8 bg-engram-purple rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-engram-purple/10 rounded-full p-4 backdrop-blur-md">
                <div className="w-8 h-8 bg-engram-purple rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.344l1.172-1.172a4 4 0 115.656 5.656L10 17.656l-6.828-6.828a4 4 0 010-5.656z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;