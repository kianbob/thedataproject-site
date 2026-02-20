import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — TheDataProject.AI",
  description: "Get in touch with TheDataProject team.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-12">Have a question or want to get in touch? We&apos;d love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <form action="https://formspree.io/f/info@thedataproject.ai" method="POST" className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="First"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Last"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="bg-teal-700 hover:bg-teal-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-gray-600">
              <div className="flex gap-3">
                <span className="text-gray-400 mt-0.5">📍</span>
                <div>
                  <p className="font-medium text-gray-900">Address</p>
                  <p>131 Continental Drive<br />Suite 305<br />Newark, DE 19713</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 mt-0.5">📧</span>
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a href="mailto:info@thedataproject.ai" className="text-teal-700 hover:underline">info@thedataproject.ai</a>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-400 mt-0.5">📞</span>
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <a href="tel:+18055003255" className="text-teal-700 hover:underline">(805) 500-3255</a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-serif font-bold text-gray-900 mb-4">Follow Us</h2>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/thedataproject-ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-700 transition-colors">LinkedIn</a>
              <a href="https://facebook.com/thedataproject" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-700 transition-colors">Facebook</a>
              <a href="https://instagram.com/thedataproject" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-700 transition-colors">Instagram</a>
              <a href="https://x.com/thedataproject0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-teal-700 transition-colors">X</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
