import React from 'react';
import ServicePageLayout from '../components/ServicePageLayout';

const ParentCounselingPage = () => {
  const icon = (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const whoItsFor = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-4">Parent Counseling is for anyone who:</p>
      <ul className="space-y-4">
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Has recently received a diagnosis for their child and feels unsure what to do next</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Is experiencing stress, burnout, or emotional exhaustion</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Finds it hard to communicate with their child or manage daily routines</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Feels confused, angry, or sad but doesn't know who to talk to</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Wants to be a more aware, calm, and responsive parent</span>
        </li>
        <li className="flex items-start space-x-3">
          <div className="w-2 h-2 bg-engram-purple rounded-full mt-2"></div>
          <span className="text-gray-700">Feels judged or unsupported by society, family, or school systems</span>
        </li>
      </ul>
    </div>
  );

  const whatWeDo = (
    <div className="space-y-6">
      <p className="text-gray-700 mb-6">Our counselors work closely with parents and caregivers to address both emotional and practical challenges.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">One-on-One Counseling Sessions</h3>
          <p className="text-gray-700">Safe and confidential conversations with trained professionals</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Diagnosis Support</h3>
          <p className="text-gray-700">Understand what your child is experiencing—and what it does not mean</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stress & Burnout Relief</h3>
          <p className="text-gray-700">Learn tools to manage daily overwhelm and emotional overload</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Parenting Strategies</h3>
          <p className="text-gray-700">Techniques for managing behavior, improving connection, and reducing friction</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Communication Coaching</h3>
          <p className="text-gray-700">Learn how to talk so your child listens—and listen so your child talks</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Couples/Family Guidance</h3>
          <p className="text-gray-700">(Optional) Helping both parents or family members get on the same page</p>
        </div>
      </div>
      <p className="text-gray-700">We're not here to judge. We're here to walk beside you.</p>
    </div>
  );

  const outcomes = (
    <div className="space-y-4">
      <p className="text-gray-700 mb-4">With consistent counseling support, parents often experience:</p>
      <ul className="space-y-3">
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Reduced anxiety and emotional distress</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Greater clarity about their child's needs and journey</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Stronger emotional bond with their child</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">More peace and confidence in day-to-day parenting</span>
        </li>
        <li className="flex items-start space-x-3">
          <svg className="w-5 h-5 text-green-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="text-gray-700">Less guilt, fear, and self-doubt</span>
        </li>
      </ul>
    </div>
  );

  const testimonial = (
    <div>
      <blockquote className="text-lg text-gray-700 italic mb-4">
        "I used to break down in secret. I blamed myself. But after parent counseling at Engram, I've learned to breathe, accept, and show up better for my child—and myself."
      </blockquote>
      <div className="text-sm text-gray-600">
        — Parent, Mumbai
      </div>
    </div>
  );

  const faqs = [
    {
      question: "Is parent counseling only for moms?",
      answer: "Not at all. We welcome mothers, fathers, guardians, and grandparents. Anyone who is caring for a child and needs support is encouraged to come."
    },
    {
      question: "What if I don't know what to say?",
      answer: "You don't need to come with answers. Just come as you are. Our counselors are here to listen, guide, and help you unpack what you're feeling."
    },
    {
      question: "Will this help me manage my child's behavior?",
      answer: "Yes. Many behavioral patterns in children improve when parents feel calm, connected, and confident. We equip you with both mindset shifts and practical tools."
    },
    {
      question: "How many sessions do I need?",
      answer: "There's no fixed number. Some parents benefit from just a few sessions, others choose ongoing support. We'll build a plan that works for you."
    },
    {
      question: "Is this therapy or advice?",
      answer: "It's a bit of both. We offer professional therapeutic support and actionable guidance rooted in child development psychology."
    }
  ];

  return (
    <ServicePageLayout
      icon={icon}
      heroTitle="You're Not Alone in This"
      heroSubtitle="Helping parents navigate the emotional, mental, and everyday challenges of raising a child with developmental or learning needs."
      overview="Raising a child who learns or grows differently can feel overwhelming, confusing, and sometimes isolating. You're doing your best—but there are moments when doubt, guilt, or frustration take over. At Engram, we believe that supporting the child starts with supporting the parent. Our Parent Counseling sessions provide a safe, judgment-free space where you can talk, process, learn, and grow. We help you make sense of diagnoses, deal with emotional stress, build communication with your child, and become a more confident caregiver—mentally and emotionally."
      whoItsFor={whoItsFor}
      whatWeDo={whatWeDo}
      outcomes={outcomes}
      testimonial={testimonial}
      faqs={faqs}
      ctaTitle="Take Care of You, So You Can Care for Them"
      ctaButton="Book a Parent Counseling Session"
      breadcrumbTitle="Parent Counseling"
    />
  );
};

export default ParentCounselingPage;