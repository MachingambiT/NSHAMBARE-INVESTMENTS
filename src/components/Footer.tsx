export default function Footer() {
  return (
    <footer className="bg-stone-950 py-12 border-t border-stone-900 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white">
              NSHAMBARE
            </span>
            <span className="text-xs tracking-widest uppercase text-amber-500">
              Investments
            </span>
          </div>
          
          <p className="text-stone-500 text-sm">
            &copy; {new Date().getFullYear()} Nshambare Investments. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
