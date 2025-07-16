import React from 'react';

const FinalCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-engram-purple/10 via-engram-purple-light/5 to-white">
      <div className="section-container">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-6">
            Ready to Support Your Child's{' '}
            <span className="text-engram-purple">Growth Journey?</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take the first step towards unlocking your child's full potential. Our team of experienced 
            therapists is here to guide you through every milestone with personalized care and proven strategies.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary text-lg px-8 py-4">
              Schedule a Free Consultation
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Call Now
            </button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-engram-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Call Us</div>
                <div className="font-semibold text-gray-900">+91 98765 43210</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-engram-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Email Us</div>
                <div className="font-semibold text-gray-900">hello@engram.com</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-engram-purple/10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Visit Us</div>
                <div className="font-semibold text-gray-900">Vasai, Mumbai</div>
              </div>
            </div>
          </div>

          {/* Assurance Messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Free Initial Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">No Waiting Lists</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-600">Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;