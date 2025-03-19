// import { ModeToggle } from '../theme-toggle';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center justify-between ">
      <ul className="flex space-x-8 items-center justify-center">
        {/* TODO: add links */}
        {/* <li>
          <Link href="#home" className="hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-blue-500">
            Services
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-blue-500">
            Contact
          </Link>
        </li> */}
        <li>
          <Button
            asChild
            size="sm"
            className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] py-2 bg-[rgb(0,87,255)] rounded-md text-white font-light transition duration-200 ease-linear tracking-normal"
          >
            <a
              href="https://tally.so/r/wvKZrv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get started by sending an inquiry email"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </li>
        {/* TODO: add theme toggle */}
        {/* <li>
          <ModeToggle />
        </li> */}
      </ul>
    </nav>
  );
};

export default DesktopNav;
