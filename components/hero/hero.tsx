import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="h-svh w-full relative">
      {/* Custom Gradient Effects */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-[498px] gradient-parent">
        <div className="gradient-layer-1"></div>
        <div className="gradient-layer-2"></div>
        <div className="gradient-layer-3"></div>
      </div>
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <video
          className="w-full h-full object-cover"
          controls={false}
          loop
          muted
          autoPlay
          playsInline
        >
          <source src="/hero-vid-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col md:items-center justify-end md:justify-center gap-4 md:text-center px-6 pb-6 z-20">
        <h1 className="text-3xl md:text-5xl font-bold">
          Sell more, increase leads, and be found online
        </h1>
        <p className="text-white md:text-lg">
          Scale your business with integrated marketing and technology
          solutions.
        </p>
        <a
          href="mailto:example@example.com?subject=Inquiry&body=Hi%2C%0D%0A%0D%0A%5BTell%20us%20about%20your%20vision%20here%5D%0D%0A%0D%0A%5BDetails%20that%20could%20help%20us%20understand%20more%5D%0D%0A1.%20What%27s%20your%20top%20objective%3F%0D%0A2.%20When%20do%20you%20want%20it%20completed%3F%0D%0A3.%20What%27s%20your%20estimated%20investment%20budget%3F%0D%0A%0D%0AThe%20more%20details%20you%20can%20provide%2C%20the%20better%20we%20can%20understand%20your%20needs%20and%20see%20if%20we%27re%20a%20good%20fit.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear border border-white border-dashed md:border-none w-full md:w-fit text-md flex flex-row gap-2">
            Get started <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
