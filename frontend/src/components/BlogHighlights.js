import React from 'react';

const BlogHighlights = () => {
  const blogPosts = [
    {
      title: "How to Detect Speech Delays Early",
      teaser: "Learn the key signs and milestones parents should watch for in their child's speech development.",
      category: "Speech Development",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1620354599717-70353d8e0e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "What is Multisensory Learning?",
      teaser: "Discover how engaging multiple senses can enhance learning outcomes for children with diverse needs.",
      category: "Learning Strategies",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1610747403711-9ed130ccb739?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Is Shadow Teaching Right for Your Child?",
      teaser: "Understanding when and how shadow teaching can support your child's educational journey.",
      category: "Educational Support",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1620354599216-65456f855323?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Parenting & <span className="text-engram-purple">Therapy Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based resources and practical guidance to support your child's development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-engram-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 group-hover:text-engram-purple transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {post.teaser}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <div className="flex items-center text-engram-purple font-medium text-sm group-hover:text-engram-purple-dark transition-colors duration-300">
                    Read More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button className="btn-primary">
            Visit Blog
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;