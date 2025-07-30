import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const AssessmentPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h2m0-12h2a2 2 0 012 2v8a2 2 0 01-2 2H9m0-12V3a2 2 0 012-2h2a2 2 0 012 2v2M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">Assessment is recommended if:</p>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Your child isn't meeting key developmental milestones</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Teachers have raised concerns about attention, learning, or behavior</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">You notice signs of speech delays, motor issues, or sensory sensitivities</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Your child seems withdrawn, anxious, or unusually aggressive</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">You feel something's not right—but can't put your finger on it</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">You want to understand your child's strengths and challenges before starting therapy</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-6">Our assessment process is gentle, child-friendly, and designed to put both you and your child at ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Initial Consultation</h3>
          <p className="text-gray-700">A sit-down with you to understand your concerns and observations</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Developmental Screening</h3>
          <p className="text-gray-700">Checking your child's progress in key areas like motor skills, language, cognition, and behavior</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Standardized Tests (If Required)</h3>
          <p className="text-gray-700">Used selectively for deeper evaluation</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Play-Based Observation</h3>
          <p className="text-gray-700">We engage your child in structured play to observe how they learn, interact, and respond</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Report & Discussion</h3>
          <p className="text-gray-700">You receive a detailed report and a one-on-one discussion to understand the results and plan next steps</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Guidance on What's Next</h3>
          <p className="text-gray-700">Whether your child needs therapy, academic support, or just continued observation—we'll help you decide</p>
        </div>
      </div>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">After an assessment, you'll have:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">A clear picture of your child's current developmental stage</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Identification of potential concerns (if any)</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Confidence to move forward with the right kind of support</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Peace of mind that you're no longer guessing—you're acting</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "We were lost in a fog of 'maybes' until Engram's assessment helped us see clearly. We finally knew what our son needed, and how to support him."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Virar
      </div>
    </div>
  );

  const faqs = [
    {
      question: "At what age can I get my child assessed?",
      answer: "Assessments can begin as early as 18 months if you notice delays. It's never too early to ask questions about your child's development."
    },
    {
      question: "Will this give me a diagnosis?",
      answer: "Not always. Assessments can show areas of concern, but formal diagnoses (like autism, ADHD) may require additional testing from specialists. We guide you through that if needed."
    },
    {
      question: "Is it stressful for the child?",
      answer: "Not at all. Most assessments feel like guided play sessions. Our team creates a warm, non-pressuring environment."
    },
    {
      question: "Can I be present during the assessment?",
      answer: "Yes, in most cases. For younger children, your presence can make them feel more comfortable."
    },
    {
      question: "What happens after the assessment?",
      answer: "You'll get a written report and a discussion with our team. If support is recommended, we'll create a personalized plan."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="Clarity Begins With Understanding"
      heroSubtitle="Early developmental assessments that help uncover how your child learns, grows, and interacts with the world."
      overview="Sometimes, the hardest part of helping your child is not knowing what's really going on. Are they just developing a little late—or is it something more? Are they struggling to speak because they're shy—or do they need speech support? At Engram, we help you move from confusion to clarity. Our assessment process looks at your child's developmental, cognitive, motor, language, and social-emotional skills to help you understand how they're growing—and where they might need support. When you have answers, you can make better decisions. That's what our assessments are here for."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Let's Clear the Doubt Together"
      ctaButton="Book a Developmental Assessment Today"
      breadcrumbTitle="Assessment"
    />
  );
};

export default AssessmentPage;