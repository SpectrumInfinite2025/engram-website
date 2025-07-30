import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const MultisensoryLearningPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">This method works well for children who:</p>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Struggle with reading, writing, or spelling</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Have difficulty sitting still or focusing in class</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Need a more playful or active approach to understand concepts</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Are diagnosed with ADHD, dyslexia, or other learning differences</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Learn better when lessons include movement, sound, or hands-on activities</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-6">At Engram, we design customized multisensory learning sessions that bring lessons to life. Some of the ways we teach include:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Tactile Learning</h3>
          <p className="text-gray-700">Using textured materials like sand, foam letters, or clay to help children feel and form words or numbers</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Tools</h3>
          <p className="text-gray-700">Flashcards, colorful charts, and illustrated stories that strengthen memory</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Auditory Engagement</h3>
          <p className="text-gray-700">Rhymes, music, and storytelling to improve listening and language skills</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Movement-Based Activities</h3>
          <p className="text-gray-700">Learning while walking, clapping, or dancing to keep the body and brain active</p>
        </div>
      </div>
      <p className="text-gray-700">Each activity is personalized based on how your child learns best.</p>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">With our multisensory approach, children often experience:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Better memory and retention of concepts</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Increased attention span and interest in learning</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Stronger reading and writing skills</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">A sense of accomplishment and confidence in the classroom</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">More joyful and stress-free learning</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "My son would zone out in every class until we discovered multisensory learning at Engram. He now remembers stories, spells better, and actually enjoys study time."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Mumbai
      </div>
    </div>
  );

  const faqs = [
    {
      question: "Is this the same as tutoring?",
      answer: "No. Multisensory learning is not just about teaching content—it's about how your child learns. It's designed to support different learning styles, especially for kids who don't benefit from traditional tutoring."
    },
    {
      question: "Does this work for kids without learning issues?",
      answer: "Absolutely. Any child can benefit. It's just more effective for those who struggle with attention, focus, or retaining lessons."
    },
    {
      question: "How often should my child attend these sessions?",
      answer: "We usually recommend 1–2 sessions per week to start, and adjust based on progress and goals."
    },
    {
      question: "Will my child have to do homework?",
      answer: "We keep it light and playful. Sometimes we share short activities or games for home that continue the learning in a fun way."
    },
    {
      question: "Can this help with school performance?",
      answer: "Yes! Many children show improvement in classroom participation, comprehension, and self-confidence."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="Learning Through Every Sense"
      heroSubtitle="We use sight, sound, touch, and movement to make learning easier, engaging, and long-lasting."
      overview="Multisensory learning is an approach that helps children absorb and understand information using more than one sense at a time. Instead of just listening or reading, kids learn through touching, moving, seeing, and hearing. This method makes learning more engaging and easier to remember—especially for children who struggle with attention, focus, or traditional classroom methods. It's not just effective—it's fun too."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Let's Make Learning Fun Again"
      ctaButton="Book a Multisensory Learning Session"
      breadcrumbTitle="Multisensory Learning"
    />
  );
};

export default MultisensoryLearningPage;