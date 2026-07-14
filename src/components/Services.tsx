import { Hammer, Sofa, PenTool } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Custom Manufacturing',
      description: 'We design and build bespoke furniture pieces tailored to your exact specifications, ensuring perfect fit and unmatched quality.',
      icon: Sofa,
    },
    {
      title: 'Expert Repair & Restoration',
      description: 'Breathe new life into your beloved furniture. Our artisans restore antique and damaged pieces to their former glory.',
      icon: Hammer,
    },
    {
      title: 'Design Consultation',
      description: 'Collaborate with our design team to create spaces that reflect your personal style and functional needs.',
      icon: PenTool,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
          <p className="mt-4 text-lg text-stone-600">
            From raw timber to refined elegance, we bring decades of craftsmanship to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-amber-700/30 hover:bg-stone-100/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-700/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
