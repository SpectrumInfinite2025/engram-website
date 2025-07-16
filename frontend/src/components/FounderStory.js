import React from 'react';

const FounderStory = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-engram-purple/5 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative" data-aos="fade-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1592898919066-0a0ece865db1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDJ8MA&ixlib=rb-4.1.0&q=85"
                alt="Founder Shreya with child"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-engram-purple/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-engram-purple/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Right Content - Story */}
          <div className="space-y-6" data-aos="fade-left">
            <div className="inline-block bg-engram-purple/10 px-4 py-2 rounded-full">
              <span className="text-engram-purple font-medium">Founder's Vision</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading">
              Built with <span className="text-engram-purple">Compassion</span>,<br />
              Led by <span className="text-engram-purple">Experience</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Shreya started Engram with a simple yet powerful vision: to provide affordable, 
                accessible early intervention services across India. Her journey began when she 
                witnessed firsthand the transformative power of early therapy in children's lives.
              </p>
              
              <p>
                With over a decade of experience in child development and a deep understanding 
                of the challenges families face, Shreya built Engram to bridge the gap between 
                quality intervention services and those who need them most.
              </p>
              
              <p>
                Today, Engram stands as a testament to her belief that every child deserves 
                the opportunity to reach their full potential, regardless of their starting point.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-engram-purple font-heading">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-engram-purple font-heading">500+</div>
                <div className="text-sm text-gray-600">Children Supported</div>
              </div>
            </div>
            
            <button className="btn-primary">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;