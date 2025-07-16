import React from 'react';

const CSRSection = () => {
  const partners = [
    {
      name: "CPAI",
      description: "Child Protection and Intervention",
      logo: "🏢"
    },
    {
      name: "Education Foundation",
      description: "Supporting inclusive education",
      logo: "📚"
    },
    {
      name: "Community Health",
      description: "Healthcare accessibility",
      logo: "🏥"
    }
  ];

  return (
    <section id="csr" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Creating Access Through <span className="text-engram-purple">CSR</span> &<br />
            <span className="text-engram-purple">Community Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe every child deserves access to quality early intervention services, regardless of their family's economic circumstances. Through strategic partnerships with corporations and NGOs, we're making therapy accessible to underserved communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8" data-aos="fade-right">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-engram-purple/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Corporate Partnerships</h3>
                  <p className="text-gray-600">We collaborate with forward-thinking companies to sponsor therapy sessions for children from low-income families.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-engram-purple/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">NGO Collaborations</h3>
                  <p className="text-gray-600">Working with established NGOs to identify and support children who need early intervention the most.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-engram-purple/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-engram-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-heading">Community Outreach</h3>
                  <p className="text-gray-600">Regular awareness programs and free screening camps in underserved areas across Mumbai and beyond.</p>
                </div>
              </div>
            </div>

            {/* Impact Numbers */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-engram-purple font-heading">150+</div>
                  <div className="text-sm text-gray-600">Children Supported via CSR</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-engram-purple font-heading">25+</div>
                  <div className="text-sm text-gray-600">Partner Organizations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Partners */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-6">Our Partners</h3>
              <div className="space-y-4">
                {partners.map((partner, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{partner.logo}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{partner.name}</div>
                      <div className="text-sm text-gray-600">{partner.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-engram-purple/5 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 font-heading mb-4">Want to Partner?</h3>
              <p className="text-gray-600 mb-6">
                Join us in making early intervention accessible to every child. Together, we can create lasting change in communities across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-engram-purple rounded-full"></div>
                  <span className="text-sm text-gray-600">Sponsored therapy sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-engram-purple rounded-full"></div>
                  <span className="text-sm text-gray-600">Employee volunteer programs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-engram-purple rounded-full"></div>
                  <span className="text-sm text-gray-600">Community screening camps</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="btn-primary">
            Partner with Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;