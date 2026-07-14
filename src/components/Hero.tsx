import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=2000"
          alt="Elegant custom furniture in a modern living space"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 text-amber-400 text-sm font-medium tracking-widest uppercase mb-6">
            Master Craftsmanship
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Furniture that tells a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">timeless story.</span>
          </h1>
          <p className="mt-4 text-xl text-stone-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Nshambare Investments specializes in bespoke furniture manufacturing and expert restoration. Elevate your space with uncompromising quality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-amber-500 hover:bg-amber-400 rounded-full transition-colors"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-stone-500 hover:border-white hover:bg-white/10 rounded-full transition-all group"
            >
              Get a Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
