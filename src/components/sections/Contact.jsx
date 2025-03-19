import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center py-10"
    >
      <RevealOnScroll>
        <div className="px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <p className="text-lg text-gray-300 mb-2">
              📧 <strong>Email:</strong> <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a>
            </p>

            <p className="text-lg text-gray-300">
              📞 <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
