import React from 'react';

const WhyEarlyIntervention = () => {
  const stats = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "1 in 6 children",
      subtitle: "need some form of developmental support",
      description: "Early identification and intervention can significantly improve outcomes"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Early therapy",
      subtitle: "improves learning, social, and emotional outcomes",
      description: "The brain's plasticity is highest in early years, making intervention more effective"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "We partner with parents",
      subtitle: "for progress that lasts",
      description: "Family involvement is crucial for sustainable developmental gains"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Why Start <span className="text-engram-purple">Early?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early intervention during the critical developmental years can make all the difference 
            in a child's journey toward independence and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-engram-purple mb-6">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">
                {stat.title}
              </h3>
              <p className="text-engram-purple font-medium mb-4">
                {stat.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 text-center">
          <div className="inline-block w-24 h-1 bg-engram-purple rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyEarlyIntervention;