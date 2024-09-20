export default function Footer() {
  return (
    <footer>
      <div className="border-t text-center p-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} All We Do Is Web. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
