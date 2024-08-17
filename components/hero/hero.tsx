import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="h-svh w-full relative">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <video
          className="w-full h-full object-cover rounded-lg"
          controls={false}
          loop
          muted
          autoPlay
        >
          <source src="/hero-vid-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="px-4 pb-6 absolute items-start justify-center bottom-0 md:bottom-1/4 flex flex-col gap-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Sell more, increase leads, and be found online
        </h1>
        <p className="text-white">
          While you focus on your product or service, we will bring incredible
          online experiences to your customers.
        </p>
        <Button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear w-full md:w-fit">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Hero;
