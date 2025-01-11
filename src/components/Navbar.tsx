import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import { GeistSans } from 'geist/font/sans';

export const CCAjaxLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarComponent = () => {
  return (
    <Navbar 
      shouldHideOnScroll
      className={`bg-gray-800 text-white ${GeistSans.className}`}
    >
      {/* Brand Section */}
      <NavbarBrand className="flex-grow-0">
        <CCAjaxLogo />
        <p className="font-bold text-white">CCAJAX</p>
      </NavbarBrand>

      {/* Right-aligned Links */}
      <NavbarContent className="hidden sm:flex gap-6 flex-grow justify-end" justify="end">
        <NavbarItem>
          <Link 
            href="/" 
            className="relative glow-link text-white hover:text-gray-300 font-normal font-geist"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/service"  
            className="relative glow-link text-white hover:text-gray-300 font-normal font-geist"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/insights" 
            className="relative glow-link text-white hover:text-gray-300 font-normal font-geist"
          >
            CCA Insights
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/contact" 
            className="relative glow-link text-white hover:text-gray-300 font-normal font-geist"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;