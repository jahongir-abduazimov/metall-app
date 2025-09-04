"use client"

import Container from '@/components/Container'
import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="bg-[url('/intro-bg.png')] bg-cover bg-center bg-no-repeat w-full">
        <Container>
          <div className="h-[50vh] flex items-end pt-[90px] pb-10">
            <div>
              <h1 className="text-white text-[40px] md:text-[56px] font-bold leading-tight">
                Contact
              </h1>
              <p className="text-white/70 text-lg mt-3 max-w-3xl">
                Have questions? We’d love to hear from you.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-blac">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
              <p className="text-black/80 mb-6">
                Fill out the form and we’ll get back to you shortly.
              </p>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="What’s this about?"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-black/80" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-black/10 border border-black/20 rounded-lg px-4 py-3 text-black placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-black/30"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black cursor-pointer text-white rounded-lg px-6 py-3 font-semibold hover:bg-black/70 transition"
                >
                  Send message
                </button>
                <p className="text-black/60 text-sm">
                  This form is for demonstration only and does not send emails.
                </p>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact details</h3>
              <ul className="space-y-3 text-black/80">
                <li>
                  <a
                    className="hover:underline"
                    href="mailto:contact@example.com"
                  >
                    contact@example.com
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </li>
                <li>123 Main Street, City, Country</li>
                <li className="pt-3 flex gap-4 text-sm">
                  <a className="underline" href="/privacy-policy">
                    Privacy Policy
                  </a>
                  <a className="underline" href="/terms">
                    Terms
                  </a>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-3">Business hours</h4>
                <p className="text-black/70">
                  Mon–Fri: 9:00–18:00 • Sat–Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Contact