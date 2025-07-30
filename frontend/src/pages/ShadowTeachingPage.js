import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const ShadowTeachingPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">Shadow teaching works best for children who:</p>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Struggle to follow instructions or keep up in school</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Have difficulty with attention, social skills, or transitions between activities</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Need frequent reminders or repeated explanations during class</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Have special education needs or are waiting for a formal diagnosis</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Benefit from having a familiar adult to guide them in school settings</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-6">Our trained shadow teachers work closely with your child, their teachers, and you as a parent to provide consistent, compassionate classroom support.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Classroom Support</h3>
          <p className="text-gray-700">Sitting alongside your child to help them understand lessons, stay organized, and participate meaningfully</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Guidance</h3>
          <p className="text-gray-700">Breaking down complex concepts into smaller, manageable tasks</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Behavioral Support</h3>
          <p className="text-gray-700">Helping with emotional regulation, reducing anxiety, and building classroom confidence</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Integration</h3>
          <p className="text-gray-700">Supporting your child during group activities, playtime, and transitions</p>
        </div>
      </div>
      <p className="text-gray-700">Shadow teachers are more than assistants—they're champions for your child's growth.</p>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">With consistent shadow teaching, children often:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Feel more confident in class</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Build better peer relationships</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Follow instructions and routines more smoothly</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Reduce classroom disruptions or emotional outbursts</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Begin participating independently over time</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "Before shadow support, my daughter was anxious every morning. Now she goes to school with a smile, and we finally see her potential shine."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Vasai
      </div>
    </div>
  );

  const faqs = [
    {
      question: "Is a shadow teacher the same as a special educator?",
      answer: "Not exactly. A special educator plans and delivers therapy outside school. A shadow teacher supports your child in real-time inside the classroom, helping them apply what they've learned."
    },
    {
      question: "Will the school allow a shadow teacher?",
      answer: "Most schools are open to shadow teachers once they understand the benefits. We also offer support to help parents talk to school authorities if needed."
    },
    {
      question: "Does a shadow teacher attend school daily?",
      answer: "Yes. Depending on your child's needs, we recommend full-day or half-day support throughout the academic year."
    },
    {
      question: "Will my child become dependent on a shadow teacher?",
      answer: "The goal is the opposite. Our focus is on building independence. Over time, many children reduce their reliance and begin functioning on their own."
    },
    {
      question: "How do I know if my child really needs one?",
      answer: "If school feels overwhelming for your child, if they often get scolded or left out, or if they're falling behind socially or academically—a shadow teacher can make a big difference."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="Support That Stays With Them"
      heroSubtitle="Helping children succeed in school with one-on-one classroom support from trained shadow teachers."
      overview="Shadow teaching is one-on-one in-school support designed to help children who learn differently. A shadow teacher stays with your child during school hours, guiding them through lessons, helping them focus, encouraging them to participate, and making sure they don't feel left behind. It bridges the gap between what's being taught in class and how your child learns best. Whether your child has ADHD, autism, learning delays, or simply needs more attention than the classroom can offer, a shadow teacher can be the calm, steady support that makes school feel safe and manageable."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Give Your Child the Classroom Confidence They Deserve"
      ctaButton="Talk to Us About Shadow Teaching"
      breadcrumbTitle="Shadow Teaching"
    />
  );
};

export default ShadowTeachingPage;