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
          href="mailto:example@example.com?subject=Inquiry&body=Hi%2C%0D%0A%0D%0A%5BTell%20us%20about%20your%20vision%20here%5D%0D%0A%0D%0A%5BDetails%20that%20could%20help%20us%20understand%20more%5D%0D%0A1.%20What%27s%20your%20top%20objective%3F%0D%0A2.%20When%20do%20you%20want%20it%20completed%3F%0D%0A3.%20What%27s%20your%20estimated%20investment%20budget%3F%0D%0A%0D%0AThe%20more%20details%20you%20can%20provide%2C%20the%20better%20we%20can%20understand%20your%20needs%20and%20see%20if%20we%27re%20a%20good%20fit.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D"
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
