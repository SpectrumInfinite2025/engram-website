import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const OccupationalTherapyPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10V9a2 2 0 012-2h2a2 2 0 012 2v1M9 10H4a2 2 0 00-2 2v2a2 2 0 002 2h5m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0h5a2 2 0 002-2v-2a2 2 0 00-2-2h-5" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Signs Your Child May Benefit:</h3>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Struggles to hold pencils, tie shoelaces, brush teeth, or button clothes</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Delayed in gross motor milestones like running, jumping, or climbing stairs</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Has sensory sensitivities to textures, light, sound, or movement</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Difficulty with coordination, balance, or motor planning</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Exhibits frequent tantrums, difficulty regulating emotions, or social withdrawal</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-6">Our pediatric OT services at Engram are tailored to meet each child's individual developmental goals through engaging, child-led exercises and parent guidance:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Individualized Therapy Sessions</h3>
          <p className="text-gray-700">Hands-on, experiential exercises focusing on motor control, sensory processing, and adaptive skills.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sensory Integration Activities</h3>
          <p className="text-gray-700">Structured play and movement activities designed to build tolerance to sensory input and promote regulation.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Living Skill Development</h3>
          <p className="text-gray-700">Helping children master tasks like dressing, feeding, hygiene, and handwriting through consistent practice.</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Home & School Partnering</h3>
          <p className="text-gray-700">Collaborating with parents and educators to reinforce therapy goals across environments.</p>
        </div>
      </div>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">Engram's OT program helps children achieve meaningful progress:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Enhanced fine motor and coordination ability</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Greater sensory tolerance and emotional regulation</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Increased independence in self-care and school activities</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Improved confidence, focus, and classroom participation</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "OT at Engram helped my daughter learn to hold a pencil, tie her shoes, and regulate her sensory sensitivities—her focus and confidence have soared."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Vasai
      </div>
    </div>
  );

  const faqs = [
    {
      question: "What age is best for occupational therapy?",
      answer: "OT can support children as young as toddlerhood through adolescence—especially if developmental milestones are delayed or sensory challenges interfere with daily activities."
    },
    {
      question: "How does OT differ from speech therapy?",
      answer: "While speech therapy focuses on language and communication skills, occupational therapy targets the foundational motor, sensory, and adaptive skills that support daily functioning and learning."
    },
    {
      question: "What is a typical session like?",
      answer: "Sessions may include tasks such as writing, dressing practice, sensory play, coordination games, and motor planning exercises—always adapted to your child's preferences and stage."
    },
    {
      question: "How long will therapy take?",
      answer: "Duration varies depending on age, needs, and progress. Consistent sessions and parental reinforcement at home accelerate progress. Therapists regularly reassess goals and celebrate milestones."
    },
    {
      question: "How do parents support OT at home?",
      answer: "Simple daily practices—like using therapy putty, playing balance games, practicing fine motor tasks, and building routines—can amplify your child's gains under therapist guidance."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="Building Skills for Life"
      heroSubtitle="Expert occupational therapy to enhance motor skills, sensory processing, and daily independence."
      overview="Occupational Therapy (OT) is a specialized intervention led by certified pediatric occupational therapists. It focuses on helping children develop essential skills—like fine/gross motor control, sensory integration, and self-care routines—so they can participate confidently in daily life, play, school, and social settings. By combining targeted exercises with engaging activities, OT fosters independence and emotional resilience in children with developmental delays or sensory challenges."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Book an Occupational Therapy Assessment"
      ctaButton="Book a Free OT Assessment"
      breadcrumbTitle="Occupational Therapy"
    />
  );
};

export default OccupationalTherapyPage;