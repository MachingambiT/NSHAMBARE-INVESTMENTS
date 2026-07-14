import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
      alt: 'Elegant living room furniture',
      category: 'Manufacturing'
    },
    {
      src: 'https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&w=800',
      alt: 'Woodworking tools and craftsmanship',
      category: 'Workshop'
    },
    {
      src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
      alt: 'Modern chair design',
      category: 'Design'
    },
    {
      src: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=800',
      alt: 'Restored wooden table',
      category: 'Restoration'
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Craft in Focus</h2>
            <p className="mt-4 text-lg text-stone-600">
              Explore our portfolio of meticulously crafted and lovingly restored pieces.
            </p>
          </div>
          <a
            href="#contact"
            className="text-amber-700 font-medium hover:text-amber-800 transition-colors flex items-center gap-2"
          >
            Start your project
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}`}
            >
              <div className="aspect-[4/3] w-full h-full overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-amber-400 text-sm font-medium mb-2 tracking-wider uppercase">{img.category}</span>
                <p className="text-white text-xl font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
