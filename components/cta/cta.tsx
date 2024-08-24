import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="container mx-auto md:text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Ready to upgrade your business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help you achieve your goals and take
          your business to the next level.
        </p>
        <a
          href="mailto:example@example.com?subject=Inquiry&body=Hi%2C%0D%0A%0D%0A%5BTell%20us%20about%20your%20vision%20here%5D%0D%0A%0D%0A%5BDetails%20that%20could%20help%20us%20understand%20more%5D%0D%0A1.%20What%27s%20your%20top%20objective%3F%0D%0A2.%20When%20do%20you%20want%20it%20completed%3F%0D%0A3.%20What%27s%20your%20estimated%20investment%20budget%3F%0D%0A%0D%0AThe%20more%20details%20you%20can%20provide%2C%20the%20better%20we%20can%20understand%20your%20needs%20and%20see%20if%20we%27re%20a%20good%20fit.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg md:px-10 transition duration-150 ease-in-out w-full md:w-fit"
        >
          Get Started
          <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
