import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Shreya Naik",
      role: "Founder & Lead Therapist",
      image: "https://images.unsplash.com/photo-1592898919066-0a0ece865db1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDJ8MA&ixlib=rb-4.1.0&q=85",
      description: "With over 10 years of experience in child development, Shreya founded Engram to make early intervention accessible to every child across India."
    }
  ];

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Compassionate Care",
      description: "Every child receives individualized attention with deep empathy and understanding."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Evidence-Based Methods",
      description: "Our interventions are grounded in the latest research and proven therapeutic approaches."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Family-Centered Approach",
      description: "We believe in empowering families to be active partners in their child's development journey."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Community Impact",
      description: "Through our CSR initiatives, we ensure every child has access to quality early intervention."
    }
  ];

  const milestones = [
    { year: "2018", event: "Engram founded in Vasai, Mumbai" },
    { year: "2019", event: "First 50 children successfully supported" },
    { year: "2020", event: "Launched CSR partnerships program" },
    { year: "2021", event: "Expanded services to include shadow teaching" },
    { year: "2022", event: "Reached 300+ families across Mumbai region" },
    { year: "2023", event: "Launched pan-India service model" },
    { year: "2024", event: "500+ children supported milestone achieved" }
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
                <span className="text-engram-purple font-medium">About</span>
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
              About <span className="text-engram-purple">Engram</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Empowering children and families through compassionate, evidence-based early intervention services across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                To provide accessible, high-quality early intervention services that unlock every child's potential, 
                regardless of their developmental starting point or family's economic circumstances.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that with the right support at the right time, every child can thrive and participate 
                fully in their community, education, and future opportunities.
              </p>
            </div>
            <div data-aos="fade-left">
              <div className="bg-engram-purple/5 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 font-heading mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where every child, regardless of their developmental needs, has access to the support, 
                  resources, and opportunities they need to reach their full potential and live independently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
              Our <span className="text-engram-purple">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Engram.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-engram-purple mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 font-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
                Meet Our <span className="text-engram-purple">Founder</span>
              </h2>
            </div>

            {teamMembers.map((member, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div data-aos="fade-left">
                  <h3 className="text-2xl font-bold text-gray-900 font-heading mb-2">
                    {member.name}
                  </h3>
                  <p className="text-engram-purple font-medium mb-6">{member.role}</p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      "Starting Engram was born from witnessing the transformative power of early intervention 
                      in my own practice. I saw too many families struggling to access quality services or 
                      navigate the complex world of developmental support."
                    </p>
                    <p>
                      "Our goal is simple: ensure that every child who needs support gets it, when they need it, 
                      without barriers of cost, location, or complexity. That's the Engram promise."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section-padding bg-engram-purple/5">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
              Our <span className="text-engram-purple">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small practice in Vasai to a pan-India movement for accessible early intervention.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-6 bg-white rounded-xl p-6 shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-engram-purple text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-4">
              Our <span className="text-engram-purple">Impact</span>
            </h2>
            <p className="text-xl text-gray-600">
              The numbers speak for themselves, but behind each statistic is a child whose life has been transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl font-bold text-engram-purple font-heading mb-2">500+</div>
              <div className="text-gray-600">Children Supported</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl font-bold text-engram-purple font-heading mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl font-bold text-engram-purple font-heading mb-2">25+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="text-4xl font-bold text-engram-purple font-heading mb-2">6</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-engram-purple/10 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're a parent seeking support for your child, a professional looking to collaborate, 
              or an organization interested in CSR partnerships, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Get In Touch
              </Link>
              <Link to="/services/speech-therapy" className="btn-secondary text-lg px-8 py-4">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;