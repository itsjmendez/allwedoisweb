import { Button } from '../ui/button';

const Hero = () => {
  return (
    <div className="h-svh w-full relative">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-black/80"></div>
        <video
          className="w-full h-full object-cover"
          controls={false}
          loop
          muted
          autoPlay
        >
          <source src="/hero-vid-1.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 flex flex-col md:items-center justify-center gap-4 md:text-center px-4 pb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Sell more, increase leads, and be found online
        </h1>
        <p className="text-white">
          While you focus on your product or service, we will bring incredible
          online experiences to your customers.
        </p>
        <a
          href="mailto:example@example.com?subject=Hello&body=This is a test email"
          target="_blank"
          rel="noreferrer"
        >
          <Button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear w-fit">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
