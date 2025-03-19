import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
// import { ModeToggle } from '../theme-toggle';

const MobileNav = () => {
  return (
    <div className="md:hidden my-auto">
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
      <Sheet>
        {/* <SheetTrigger>
          <Menu />
        </SheetTrigger> */}
        <SheetContent className="flex flex-col gap-4 rounded-b-2xl" side="top">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
          <ul className="items-center flex flex-col gap-4">
            <li>
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
            </li>
            {/* <li>
              <ModeToggle />
            </li> */}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
