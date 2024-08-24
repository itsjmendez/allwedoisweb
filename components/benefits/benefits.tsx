import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const benefits = [
  {
    title: 'Tailored Strategies',
    description:
      'Customized solutions designed to meet your unique business needs and goals.',
    image: '/benefit-2.png',
  },
  {
    title: 'Expert Team',
    description:
      'Our team of experienced professionals ensures top-notch service and support.',
    image: '/benefit-1.png',
  },
  {
    title: 'Proven Results',
    description:
      'Track record of success with measurable results that drive growth and revenue.',
    image: '/benefit-3.png',
  },
];

const Benefits = () => {
  return (
    <section className="relative py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-5xl font-bold md:text-center mb-8">
          Why we’re your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070f3] to-[#00cfff]">
            best choice
          </span>
        </h2>
        <div className="grid gap-10 grid-cols-1">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="w-full p-6 my-auto">
                <div className="flex items-start sm:justify-center">
                  <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4" />
                  <div className="">
                    <h3 className="text-xl md:text-3xl font-semibold">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 md:text-xl max-w-96">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full p-6">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  width={700} // Adjust width and height as needed
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
