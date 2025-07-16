import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of Aarav (5 years)",
      content: "Engram's speech therapy program transformed my son's communication skills. The therapists were patient, professional, and truly understood his needs. We've seen remarkable progress in just 6 months.",
      rating: 5,
      location: "Vasai, Mumbai"
    },
    {
      name: "Rajesh Kumar",
      role: "Father of Ananya (7 years)",
      content: "The multisensory learning approach at Engram helped our daughter overcome her learning difficulties. She's now thriving in school and has gained so much confidence. Thank you for believing in her potential.",
      rating: 5,
      location: "Thane, Mumbai"
    }
  ];

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Real Families. <span className="text-engram-purple">Real Progress.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the families whose lives have been transformed through our early intervention programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Quote Icon */}
              <div className="text-engram-purple mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-engram-purple">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-engram-purple/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-engram-purple font-heading">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-engram-purple/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-engram-purple font-heading">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-engram-purple/5 rounded-xl p-6">
              <div className="text-3xl font-bold text-engram-purple font-heading">500+</div>
              <div className="text-sm text-gray-600">Happy Families</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="btn-primary">
            See More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;