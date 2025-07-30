import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const SpeechTherapyPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Signs Your Child May Benefit:</h3>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Not saying any meaningful words by <strong>18–24 months</strong>, or using fewer than 50 words by age 2.</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Difficulty being understood—strangers hear less than 50% of their speech by age 2, or under 75% by age 3.</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Persistent mispronunciations or difficulty with sounds like "s," "r," or "th."</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Limited vocabulary, combining words incorrectly, or frustration when trying to express needs.</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Avoiding talking altogether or showing signs of social communication difficulties.</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">One-on-One Speech Sessions</h3>
        <p className="text-gray-700">Focused articulation practice and support tailored to your child's developmental stage.</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Play-Based Articulation & Phonetics</h3>
        <p className="text-gray-700">Using games and interactive exercises to encourage clear speech sounds—ideal for toddlers and preschoolers.</p>
      </div>
      <div className="bg-gray-50 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Parent Involvement Strategy</h3>
        <p className="text-gray-700">You become your child's best practice partner at home. We coach you on daily interaction techniques to support speech development.</p>
      </div>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">With consistent therapy and active parental support, children often experience:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Improved speech clarity and more accurate pronunciation</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Better conversational confidence and social interaction skills</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Reduced frustration when communicating, leading to enhanced emotional well-being</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Greater readiness for classroom and peer-group participation</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "Within just a few months, my child went from using two words to full sentences that strangers could understand. The change in confidence has been incredible."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Vasai
      </div>
    </div>
  );

  const faqs = [
    {
      question: "At what age should I consider speech therapy for my child?",
      answer: "By age 2, most children use at least 50 words and start combining phrases. If speech is significantly behind or unclear by then, consider evaluation."
    },
    {
      question: "What's the difference between speech delay and speech disorder?",
      answer: "A delay means development following the typical pattern but slower; a disorder indicates atypical speech sound production or language patterns—identified by therapists."
    },
    {
      question: "How long will speech therapy take?",
      answer: "Duration depends on your child's age, needs, and progress. Therapy may span several months or sometimes years, with regular assessments guiding the plan. Parental involvement speeds results."
    },
    {
      question: "How do sessions typically work?",
      answer: "Initial sessions include assessment of expressive/receptive skills. Therapy involves fun, targeted speech-building activities and home practice revisions. Goals are developed collaboratively."
    },
    {
      question: "What can I do at home to support therapy?",
      answer: "You play a vital role. Speak clearly, read together, naming objects daily, encourage imitation games, and practice assigned sounds in everyday routines. Keep a positive, patient environment."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="Helping Children Find Their Voice"
      heroSubtitle="Personalized speech therapy for clearer communication and growing confidence."
      overview="Speech therapy is a development-focused intervention delivered by certified speech-language pathologists. It helps children improve their ability to form sounds, understand language, and communicate effectively. Early support in areas like pronunciation, vocabulary, and conversational skills can significantly enhance social, academic, and emotional outcomes by reducing frustration and building confidence."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Ready to Get Started?"
      ctaButton="Book a Speech Assessment"
      breadcrumbTitle="Speech Therapy"
    />
  );
};

export default SpeechTherapyPage;