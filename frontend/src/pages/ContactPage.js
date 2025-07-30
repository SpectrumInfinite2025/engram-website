import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service_interest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Speech Therapy',
    'Occupational Therapy',
    'Multisensory Learning',
    'Shadow Teaching',
    'Parent Counseling',
    'Assessment',
    'General Inquiry'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      const response = await axios.post(`${backendUrl}/api/contact`, formData);
      
      if (response.data.success) {
        setSubmitStatus({
          type: 'success',
          message: response.data.message
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service_interest: ''
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again or call us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      description: "Available Mon-Sat, 9:00 AM - 7:00 PM"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: ["hello@engram.com", "info@engram.com"],
      description: "We respond within 24 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      details: ["123 Therapy Street", "Vasai West, Mumbai - 401202", "Maharashtra, India"],
      description: "Visit us for in-person consultations"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: Closed"],
      description: "Emergency consultations available"
    }
  ];

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
                <span className="text-engram-purple font-medium">Contact</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white to-engram-purple/5">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-heading mb-6">
              Get In <span className="text-engram-purple">Touch</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Ready to start your child's developmental journey? We're here to help with any questions, 
              schedule consultations, or discuss how we can support your family.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-engram-purple mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-700 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-xs">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For urgent matters, 
                please call us directly.
              </p>

              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 border border-green-300' 
                    : 'bg-red-100 text-red-800 border border-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="service_interest" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service_interest"
                      name="service_interest"
                      value={formData.service_interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent transition-colors duration-200"
                    placeholder="Tell us about your child's needs, any questions you have, or how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left">
              <h3 className="text-2xl font-bold text-gray-900 font-heading mb-6">
                Visit Our Center
              </h3>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 text-engram-purple mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-600">Interactive map coming soon</p>
                  <p className="text-sm text-gray-500 mt-1">123 Therapy Street, Vasai West, Mumbai</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 font-heading mb-3">
                    What to Expect
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Comprehensive assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Personalized treatment plan</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Family-centered approach</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-engram-purple/5 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 font-heading mb-3">
                    Emergency Contact
                  </h4>
                  <p className="text-gray-700 mb-3">
                    For urgent matters outside business hours, please call:
                  </p>
                  <p className="text-engram-purple font-bold text-lg">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="100">
              <div className="text-engram-purple mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v10m8-10v10m-8-10h8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">
                Book Assessment
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule a comprehensive developmental assessment for your child.
              </p>
              <Link to="/services/assessment" className="btn-primary">
                Book Now
              </Link>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="200">
              <div className="text-engram-purple mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">
                Call Directly
              </h3>
              <p className="text-gray-600 mb-4">
                Speak with our team immediately for urgent questions or concerns.
              </p>
              <a href="tel:+919876543210" className="btn-secondary">
                Call Now
              </a>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300" data-aos="fade-up" data-aos-delay="300">
              <div className="text-engram-purple mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-3">
                Parent Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                Get emotional support and guidance for parenting challenges.
              </p>
              <Link to="/services/parent-counseling" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;