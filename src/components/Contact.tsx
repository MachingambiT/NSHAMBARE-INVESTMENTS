import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Let's Discuss Your Next Project</h2>
              <p className="text-stone-400 text-lg mb-10 max-w-md">
                Whether you need a custom piece manufactured or a cherished heirloom restored, we are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                    <Phone className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Call Us</p>
                    <p className="text-lg font-medium">+263 77 133 1203</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                    <Mail className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Email Us</p>
                    <p className="text-lg font-medium">info@nshambare.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center group-hover:bg-amber-700 transition-colors">
                    <MapPin className="w-5 h-5 text-stone-300 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400">Visit Our Workshop</p>
                    <p className="text-lg font-medium">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-stone-800 p-8 rounded-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all"
                    placeholder="+263 77 133 1203"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-stone-900 border border-stone-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-700 focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/263771331203"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-stone-900 text-white text-sm font-medium py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with us on WhatsApp
        </span>
      </a>
    </>
  );
}
