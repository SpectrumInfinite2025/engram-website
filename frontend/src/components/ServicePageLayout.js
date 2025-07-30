import React from 'react';
import { Link } from 'react-router-dom';

const ServicePageLayout = ({ 
  icon, 
  heroTitle, 
  heroSubtitle, 
  overview, 
  whoItsFor, 
  whatWeDo, 
  outcomes, 
  testimonial, 
  faqs, 
  ctaTitle, 
  ctaButton,
  breadcrumbTitle 
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 mt-16">
        <div className="section-container">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-engram-purple transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-gray-500">Services</span>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-engram-purple font-medium">{breadcrumbTitle}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-engram-purple/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="text-engram-purple mb-6 flex justify-center">
              <div className="w-16 h-16 bg-engram-purple/10 rounded-full flex items-center justify-center">
                {icon}
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6">
              {heroTitle}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="prose prose-lg prose-purple max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-8">
              Who It's For
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {whoItsFor}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-8">
              What We Do
            </h2>
            <div className="space-y-6">
              {whatWeDo}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="section-padding bg-engram-purple/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-8">
              Outcomes
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              {outcomes}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {testimonial && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="text-engram-purple mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                {testimonial}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-engram-purple/10 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
              {ctaTitle}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to take the next step? We're here to support your child's journey.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              {ctaButton}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageLayout;