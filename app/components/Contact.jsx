'use client';

import { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | validation

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Reset status when user starts typing after an error
    if (status === 'error' || status === 'validation') {
      setStatus('idle');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Auto-reset success message after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('validation');
      return;
    }
    
    if (!validateEmail(form.email)) {
      setStatus('validation');
      return;
    }
    
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm text-[#111] placeholder:text-muted ' +
    'focus:outline-none focus:border-accent transition-colors duration-200';

  return (
    <section id="contact" className="px-[5%] py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label">Contact</p>
          <h2 className="section-title mb-4">Let's build something<br />together.</h2>
          <p className="text-muted text-[1.1rem] max-w-2xl mx-auto">
            I'm currently available for full-time roles and freelance projects. Drop me a message
            or reach out on any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Links */}
          <div className="reveal delay-100">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-[#111] mb-6">Get in touch</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioConfig.links.email}`}
                  className="flex items-center gap-4 p-4 bg-bg border border-border rounded-xl
                    hover:border-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                    ✉
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#111]">Email</div>
                    <div className="text-sm text-muted">{portfolioConfig.links.email}</div>
                  </div>
                </a>
                
                <a
                  href={portfolioConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg border border-border rounded-xl
                    hover:border-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                    in
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#111]">LinkedIn</div>
                    <div className="text-sm text-muted">Connect with me</div>
                  </div>
                </a>
                
                <a
                  href={portfolioConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-bg border border-border rounded-xl
                    hover:border-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                    ⌥
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#111]">GitHub</div>
                    <div className="text-sm text-muted">View my work</div>
                  </div>
                </a>
                
                <a
                  href={portfolioConfig.resume}
                  download
                  className="flex items-center gap-4 p-4 bg-bg border border-border rounded-xl
                    hover:border-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-200">
                    ↓
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-[#111]">Resume</div>
                    <div className="text-sm text-muted">Download PDF</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        {/* Contact Form */}
          <div className="reveal delay-200">
            <div className="bg-surface border border-border rounded-2xl p-8">
              <h3 className="font-semibold text-xl text-[#111] mb-6">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-muted mb-1.5 block">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted mb-1.5 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-muted mb-1.5 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status === 'validation' && (
                  <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800">
                    Please fill in all fields correctly and ensure your email address is valid.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                    Something went wrong. Please try again later.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
