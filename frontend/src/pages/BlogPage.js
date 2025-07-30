import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const featuredPost = {
    slug: 'early-signs-speech-delays',
    title: 'How to Detect Speech Delays Early: A Parent\'s Guide',
    excerpt: 'Understanding the key milestones and warning signs that indicate your child might benefit from speech therapy intervention.',
    author: 'Shreya Naik',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Speech Development',
    image: 'https://images.unsplash.com/photo-1620354599717-70353d8e0e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85',
    featured: true
  };

  const blogPosts = [
    {
      slug: 'multisensory-learning-benefits',
      title: 'What is Multisensory Learning and Why Does It Work?',
      excerpt: 'Discover how engaging multiple senses can transform your child\'s learning experience and improve retention.',
      author: 'Dr. Priya Mehta',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Learning Strategies',
      image: 'https://images.unsplash.com/photo-1610747403711-9ed130ccb739?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'shadow-teaching-guide',
      title: 'Is Shadow Teaching Right for Your Child?',
      excerpt: 'Understanding when and how shadow teaching can support your child\'s educational journey and classroom success.',
      author: 'Amit Sharma',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Educational Support',
      image: 'https://images.unsplash.com/photo-1620354599216-65456f855323?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'occupational-therapy-home-activities',
      title: '10 Simple OT Activities You Can Do at Home',
      excerpt: 'Easy occupational therapy exercises to support your child\'s fine motor skills and sensory development.',
      author: 'Neha Patel',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Occupational Therapy',
      image: 'https://images.unsplash.com/photo-1590242987034-2ca1678bce65?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDN8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'parent-self-care-tips',
      title: 'Self-Care for Special Needs Parents: You Matter Too',
      excerpt: 'Practical strategies for managing stress, burnout, and emotional challenges while caring for a child with special needs.',
      author: 'Dr. Kavita Joshi',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Parent Support',
      image: 'https://images.unsplash.com/photo-1592898919066-0a0ece865db1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDJ8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'assessment-what-to-expect',
      title: 'Your Child\'s First Assessment: What to Expect',
      excerpt: 'A step-by-step guide to developmental assessments, helping you prepare for your child\'s evaluation.',
      author: 'Shreya Naik',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Assessment',
      image: 'https://images.unsplash.com/photo-1620354599717-70353d8e0e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
      slug: 'sensory-processing-explained',
      title: 'Understanding Sensory Processing Challenges',
      excerpt: 'Learn about sensory processing disorders and how they affect daily life, plus practical coping strategies.',
      author: 'Dr. Rajesh Kumar',
      date: '2023-12-10',
      readTime: '8 min read',
      category: 'Sensory Development',
      image: 'https://images.unsplash.com/photo-1610747403711-9ed130ccb739?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85'
    }
  ];

  const categories = [
    'All Posts',
    'Speech Development',
    'Learning Strategies',
    'Educational Support',
    'Occupational Therapy',
    'Parent Support',
    'Assessment',
    'Sensory Development'
  ];

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
                <span className="text-engram-purple font-medium">Blog</span>
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
              Parenting & <span className="text-engram-purple">Therapy Insights</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
              Evidence-based resources, practical guidance, and expert insights to support 
              your child's development journey and strengthen your family.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-8">Featured Article</h2>
            <div className="bg-gradient-to-r from-engram-purple/10 to-engram-purple/5 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-engram-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-engram-purple font-medium text-sm">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-heading mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{featuredPost.author}</span>
                      <span>•</span>
                      <span>{formatDate(featuredPost.date)}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="text-engram-purple font-medium hover:text-engram-purple-dark transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-gray-50 py-8">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 justify-center" data-aos="fade-up">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-engram-purple text-white' 
                    : 'bg-white text-gray-600 hover:bg-engram-purple hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
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
                  <h3 className="text-xl font-bold text-gray-900 font-heading mb-3 group-hover:text-engram-purple transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {formatDate(post.date)}
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="flex items-center text-engram-purple font-medium text-sm group-hover:text-engram-purple-dark transition-colors duration-300"
                    >
                      Read Full Article
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-engram-purple/10 to-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-heading mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get evidence-based parenting tips, therapy insights, and developmental guidance 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-engram-purple focus:border-transparent"
              />
              <button className="btn-primary px-8">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;