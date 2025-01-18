const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="border-t text-center p-6">
        <p className="text-sm">
          &copy; {currentYear} All We Do Is Web. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
