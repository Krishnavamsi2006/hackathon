// src/pages/PremiumPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

type Plan = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

const PremiumPage: React.FC = () => {
  const navigate = useNavigate();

  const plans: Plan[] = [
    {
      title: 'Basic',
      price: 'Free',
      features: [
        'Create up to 3 journals',
        'Basic journal management',
        'Standard support',
        'Basic analytics',
      ],
    },
    {
      title: 'Premium',
      price: '$9.99/month',
      features: [
        'Unlimited journals',
        'Advanced journal management',
        'Priority support',
        'Advanced analytics',
        'AI-powered journal suggestions',
        'Custom templates',
        'Export to multiple formats',
      ],
      highlighted: true,
    },
    {
      title: 'Enterprise',
      price: '$29.99/month',
      features: [
        'All Premium features',
        'Team collaboration',
        'Custom branding',
        'API access',
        'Dedicated support',
        'Advanced security features',
        'Custom integrations',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
        <p className="text-xl text-gray-600">
          Select the perfect plan for your research needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
              plan.highlighted
                ? 'border-2 border-blue-500 transform md:scale-105 z-10'
                : 'border border-gray-200'
            }`}
          >
            <div className="p-6 bg-gradient-to-r from-blue-50 to-white">
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-1">
                {plan.title}
              </h2>
              <p className="text-3xl font-bold text-blue-600 text-center">{plan.price}</p>
            </div>

            <div className="p-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate('/signup')}
                className={`w-full mt-8 py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-gray-600">
        <p>All plans come with a 14-day free trial. No credit card required.</p>
        <p className="mt-2">
          Need help choosing?{' '}
          <button className="text-blue-600 hover:underline">Contact us</button>
        </p>
      </div>
    </div>
  );
};

export default PremiumPage;
