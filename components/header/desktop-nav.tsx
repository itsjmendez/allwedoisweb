// import { ModeToggle } from '../theme-toggle';
import Link from 'next/link';

const DesktopNav = () => {
  return (
    <nav className="hidden md:flex items-center justify-between ">
      <ul className="flex space-x-8 items-center justify-center">
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
    </nav>
  );
};

export default DesktopNav;
