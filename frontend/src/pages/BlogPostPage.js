import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Sample blog post content - in a real app, this would be fetched from an API
  const blogPost = {
    slug: 'early-signs-speech-delays',
    title: 'How to Detect Speech Delays Early: A Parent\'s Guide',
    content: `
      <p>Early detection of speech delays is crucial for a child's development. As parents, understanding the key milestones and warning signs can make all the difference in getting your child the support they need when they need it most.</p>

      <h2>Understanding Normal Speech Development</h2>
      <p>Before we dive into warning signs, it's important to understand what typical speech development looks like:</p>
      
      <h3>Birth to 12 months:</h3>
      <ul>
        <li>Crying, cooing, and babbling sounds</li>
        <li>First words typically appear around 10-12 months</li>
        <li>Understanding simple commands like "come here"</li>
      </ul>

      <h3>12-18 months:</h3>
      <ul>
        <li>Using 10-20 words consistently</li>
        <li>Following simple one-step directions</li>
        <li>Beginning to combine gestures with words</li>
      </ul>

      <h3>18-24 months:</h3>
      <ul>
        <li>Vocabulary explosion - learning new words rapidly</li>
        <li>Beginning to combine two words ("more milk")</li>
        <li>Understanding about 300 words</li>
      </ul>

      <h2>Warning Signs to Watch For</h2>
      <p>While every child develops at their own pace, certain signs may indicate the need for professional evaluation:</p>

      <h3>By 12 months:</h3>
      <ul>
        <li>Not responding to their name</li>
        <li>Not using gestures like waving or pointing</li>
        <li>Not babbling with different sounds</li>
      </ul>

      <h3>By 18 months:</h3>
      <ul>
        <li>Not saying any words</li>
        <li>Not understanding simple commands</li>
        <li>Not pointing to body parts when asked</li>
      </ul>

      <h3>By 24 months:</h3>
      <ul>
        <li>Using fewer than 50 words</li>
        <li>Not combining two words</li>
        <li>Difficulty being understood by family members</li>
      </ul>

      <h2>What Causes Speech Delays?</h2>
      <p>Speech delays can result from various factors:</p>
      <ul>
        <li><strong>Hearing problems:</strong> Even temporary hearing loss from ear infections can impact speech development</li>
        <li><strong>Developmental disorders:</strong> Conditions like autism spectrum disorder or intellectual disabilities</li>
        <li><strong>Physical challenges:</strong> Issues with the mouth, tongue, or palate</li>
        <li><strong>Environmental factors:</strong> Limited exposure to language or conversation</li>
      </ul>

      <h2>How to Support Your Child's Speech Development</h2>
      <p>Whether your child is developing typically or showing some delays, these strategies can help:</p>

      <h3>1. Talk Throughout the Day</h3>
      <p>Narrate your daily activities, describe what you're doing, and engage in conversations even if your child isn't responding verbally yet.</p>

      <h3>2. Read Together Daily</h3>
      <p>Reading exposes children to rich vocabulary and language patterns. Point to pictures, ask questions, and encourage participation.</p>

      <h3>3. Limit Screen Time</h3>
      <p>While educational content has its place, direct interaction with caregivers is more beneficial for language development.</p>

      <h3>4. Listen and Respond</h3>
      <p>When your child attempts to communicate, show interest and respond appropriately, even to babbling or gestures.</p>

      <h2>When to Seek Professional Help</h2>
      <p>If you notice any of the warning signs mentioned above, don't wait. Early intervention is key to helping children overcome speech delays. A speech-language pathologist can:</p>
      <ul>
        <li>Conduct a comprehensive assessment</li>
        <li>Identify specific areas of concern</li>
        <li>Develop a personalized intervention plan</li>
        <li>Provide strategies for home practice</li>
      </ul>

      <h2>The Benefits of Early Intervention</h2>
      <p>Research consistently shows that children who receive early speech therapy services show significant improvement in:</p>
      <ul>
        <li>Communication skills</li>
        <li>Social interaction</li>
        <li>School readiness</li>
        <li>Self-confidence</li>
        <li>Overall quality of life</li>
      </ul>

      <h2>Trust Your Instincts</h2>
      <p>As a parent, you know your child best. If something doesn't feel right about your child's speech development, trust your instincts and seek professional guidance. There's no harm in getting an assessment, and early intervention can make a tremendous difference in your child's future success.</p>

      <p>Remember, every child is unique, and with the right support at the right time, children with speech delays can develop strong communication skills and thrive in all areas of their lives.</p>
    `,
    author: 'Shreya Naik',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Speech Development',
    image: 'https://images.unsplash.com/photo-1620354599717-70353d8e0e20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxlYXJseSUyMGludGVydmVudGlvbnxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NTB8MA&ixlib=rb-4.1.0&q=85'
  };

  const relatedPosts = [
    {
      slug: 'multisensory-learning-benefits',
      title: 'What is Multisensory Learning and Why Does It Work?',
      category: 'Learning Strategies',
      readTime: '6 min read'
    },
    {
      slug: 'occupational-therapy-home-activities',
      title: '10 Simple OT Activities You Can Do at Home',
      category: 'Occupational Therapy',
      readTime: '5 min read'
    },
    {
      slug: 'assessment-what-to-expect',
      title: 'Your Child\'s First Assessment: What to Expect',
      category: 'Assessment',
      readTime: '6 min read'
    }
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
                <Link to="/blog" className="text-gray-500 hover:text-engram-purple transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </li>
              <li>
                <span className="text-engram-purple font-medium">Article</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8" data-aos="fade-up">
              <div className="inline-block bg-engram-purple text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                {blogPost.category}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-6">
                {blogPost.title}
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <span>By {blogPost.author}</span>
                </div>
                <div>•</div>
                <div>{formatDate(blogPost.date)}</div>
                <div>•</div>
                <div>{blogPost.readTime}</div>
              </div>
            </div>

            <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article 
                  className="prose prose-lg prose-purple max-w-none"
                  data-aos="fade-up"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />

                {/* Share Buttons */}
                <div className="border-t pt-8 mt-12" data-aos="fade-up">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Share this article</h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                      <span>Twitter</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Facebook</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-200">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="bg-gray-50 rounded-xl p-6 mt-12" data-aos="fade-up">
                  <div className="flex items-start space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1592898919066-0a0ece865db1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMGRldmVsb3BtZW50JTIwdGhlcmFweXxlbnwwfHx8cHVycGxlfDE3NTI2OTM1NDJ8MA&ixlib=rb-4.1.0&q=85"
                      alt={blogPost.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 font-heading mb-2">
                        {blogPost.author}
                      </h4>
                      <p className="text-gray-600 mb-3">
                        Founder & Lead Therapist at Engram. With over 10 years of experience in child development, 
                        Shreya is passionate about making early intervention accessible to every child.
                      </p>
                      <Link to="/about" className="text-engram-purple font-medium hover:text-engram-purple-dark transition-colors duration-200">
                        Learn more about our team →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-gray-50 rounded-xl p-6" data-aos="fade-up">
                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-4">
                      In This Article
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li><a href="#understanding" className="text-gray-600 hover:text-engram-purple transition-colors duration-200">Understanding Normal Development</a></li>
                      <li><a href="#warning-signs" className="text-gray-600 hover:text-engram-purple transition-colors duration-200">Warning Signs to Watch For</a></li>
                      <li><a href="#causes" className="text-gray-600 hover:text-engram-purple transition-colors duration-200">What Causes Speech Delays?</a></li>
                      <li><a href="#support" className="text-gray-600 hover:text-engram-purple transition-colors duration-200">How to Support Development</a></li>
                      <li><a href="#professional-help" className="text-gray-600 hover:text-engram-purple transition-colors duration-200">When to Seek Help</a></li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-engram-purple/5 rounded-xl p-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-lg font-bold text-gray-900 font-heading mb-3">
                      Need Professional Support?
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      If you're concerned about your child's speech development, our team is here to help.
                    </p>
                    <Link to="/services/speech-therapy" className="btn-primary w-full text-center block">
                      Learn About Speech Therapy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-8" data-aos="fade-up">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post, index) => (
                <Link
                  key={index}
                  to={`/blog/${post.slug}`}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="mb-3">
                    <span className="text-engram-purple font-medium text-sm">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 font-heading mb-3 group-hover:text-engram-purple transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="text-sm text-gray-500">
                    {post.readTime}
                  </div>
                </Link>
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
              Ready to Support Your Child's Development?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team of experts is here to help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Schedule a Consultation
              </Link>
              <Link to="/services/assessment" className="btn-secondary text-lg px-8 py-4">
                Book an Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;