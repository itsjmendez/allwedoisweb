import Image from 'next/image';
import { ClipboardCheck, Lightbulb, Rocket } from 'lucide-react';

const processSteps = [
  {
    title: 'Assessment',
    description:
      'We thoroughly analyze your current situation and goals, identifying key areas for improvement and growth opportunities.',
    icon: ClipboardCheck,
    color: 'bg-blue-500',
  },
  {
    title: 'Recommendation',
    description:
      'Our experts devise a tailored strategy for your success, outlining specific actions and timelines to achieve your objectives.',
    icon: Lightbulb,
    color: 'bg-yellow-500',
  },
  {
    title: 'Implementation',
    description:
      'We execute the plan with precision and constant optimization, ensuring that every step moves you closer to your desired outcomes.',
    icon: Rocket,
    color: 'bg-green-500',
  },
];

const ProcessSection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="md:text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            Our proven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070f3] to-[#00cfff]">
              process
            </span>
          </h2>
          <p className="md:text-xl text-gray-600 dark:text-gray-300 mx-auto">
            We follow a streamlined approach to ensure your success at every
            step.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex mb-12 last:mb-0">
              <div className="mr-8 flex flex-col items-center">
                <div className={`${step.color} rounded-full p-3 shadow-lg`}>
                  <step.icon size={32} className="text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl md:text-3xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="md:text-lg text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
