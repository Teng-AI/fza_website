"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display mb-6">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4 text-center">
              Contact us
            </h2>
            <p className="text-lg text-foreground/80 mb-4 text-center">
              Drop us a line for any inquries regarding press, partnerships, or involvement.
            </p>
            <p className="text-foreground/80 mb-8 text-center">
              Feel free to use the form below or email{" "}
              <a href="mailto:info@fuzhouamerica.com" className="text-primary hover:underline">
                info@fuzhouamerica.com
              </a>
            </p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                Thank you! Your submission has been received!
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-lg text-center">
                Oops! Something went wrong while submitting the form.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Home Base Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display text-foreground mb-4">
              Home base
            </h2>
            <p className="text-lg text-foreground/80">
              Find us at the heart of New York Chinatown
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-sm font-display tracking-wider text-foreground mb-2">OUR OFFICE</h3>
              <p className="text-foreground/80">
                43-28 158th St<br />
                Unit B<br />
                Flushing, NY 11358
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-display tracking-wider text-foreground mb-2">WORKING HOURS</h3>
              <p className="text-foreground/80">
                9AM - 5PM, Mon to Fri
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm font-display tracking-wider text-foreground mb-2">CONTACT</h3>
              <a href="mailto:info@fuzhouamerica.org" className="text-primary hover:underline">
                info@fuzhouamerica.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
