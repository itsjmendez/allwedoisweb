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
import { ModeToggle } from '../theme-toggle';

const MobileNav = () => {
  return (
    <div className="md:hidden my-auto">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
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
            <li>
              <ModeToggle />
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
