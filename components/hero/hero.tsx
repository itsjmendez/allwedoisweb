import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative md:h-[calc(100svh-80px)] bg-[rgb(0,87,255)] text-white overflow-hidden flex items-center justify-center">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      ></div>

      <div className="relative z-10 container py-6 md:py-0">
        <div className="bg-[rgb(0,87,255)] border md:border-2 border-white border-opacity-40 overflow-hidden">
          <div className="grid md:grid-cols-2 md:divide-x divide-white divide-opacity-40">
            <div className="space-y-6 p-8">
              <p className="text-xl font-light">Welcome to</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Next-Gen Digital Solution
              </h1>
              <p className="text-xl">
                Empowering businesses with cutting-edge technology and
                innovative strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="w-full sm:w-fit text-[rgb(0,87,255)]"
                >
                  <a
                    href="https://tally.so/r/wvKZrv"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get started by sending an inquiry email"
                  >
                    Get Started <ArrowRight size={16} className="ml-2" />
                  </a>
                </Button>
                {/* TODO: Add a link to our services */}
                {/* <Button
                  variant="outline"
                  className="bg-[rgb(0,87,255)] border-white w-full sm:w-fit hover:border-[rgb(0,87,255)]"
                  asChild
                >
                  <Link href={'#services'}>Explore Services</Link>
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/hero-vid-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm py-4 px-8 flex items-center justify-start gap-4 border-t border-white border-opacity-40 border-dashed">
            <div className="relative flex">
              <span className="absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </div>
            <p>Available to boost your business.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
