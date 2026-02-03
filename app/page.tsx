'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: '💻',
    },
    {
      title: 'Frontend Design',
      description: 'Beautiful, responsive UI designs that create amazing user experiences.',
      icon: '🎨',
    },
    {
      title: 'Performance Optimization',
      description: 'Speed optimization and SEO improvements for maximum impact.',
      icon: '⚡',
    },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Real Estate Dashboard',
      description: 'Interactive dashboard for property management and analytics',
      tags: ['Next.js', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'SaaS Application',
      description: 'Subscription-based application with user authentication',
      tags: ['React', 'Firebase', 'Stripe'],
    },
  ];

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Azmal Khan
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'services', 'hire', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-all duration-300 hover:text-primary ${
                  activeSection === item ? 'text-primary font-bold' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-3">
              {['home', 'services', 'hire', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-20 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full border-2 border-primary overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-accent/20 transition-all duration-500 hover:scale-105">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="text-xl sm:text-2xl font-semibold text-primary mb-4">
              Hi, I'm Azmal Khan 👋
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Professional Web Developer</span>
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Crafting Digital Excellence
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Based in India. I specialize in building stunning, responsive websites with cutting-edge technologies. Turning your ideas into exceptional digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => scrollToSection('hire')}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              About <span className="text-primary">Azmal Khan</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-background to-card border border-border rounded-2xl p-8 sm:p-12 hover:border-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate and skilled web developer from India with a strong foundation in modern web technologies. I specialize in creating beautiful, responsive, and high-performance websites that help businesses succeed online.
              </p>
              
              <p>
                With expertise in React, Next.js, and full-stack web development, I transform ideas into reality by combining clean code with stunning design. Every project I work on is crafted with attention to detail and a commitment to excellence.
              </p>

              <p>
                My approach is simple: listen to your needs, understand your vision, and deliver a website that not only looks amazing but also performs exceptionally well and ranks great on search engines. Whether you need a portfolio, e-commerce site, or a custom web application, I'm here to bring your vision to life.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="group">
                  <h3 className="text-primary font-bold text-lg mb-2 group-hover:text-accent transition-colors">My Expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Frontend Development (React, Next.js)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Responsive Design & Mobile First</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Performance Optimization & SEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span>Premium Animations & Interactions</span>
                    </li>
                  </ul>
                </div>
                <div className="group">
                  <h3 className="text-accent font-bold text-lg mb-2 group-hover:text-primary transition-colors">Why Work With Me</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>Quick turnaround without quality compromise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>Dedicated communication & support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>Competitive pricing for premium quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">→</span>
                      <span>Post-launch support & maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              My <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-background border border-border rounded-xl hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section
        id="hire"
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Why <span className="text-primary">Hire Me?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional web development services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Custom Websites</h3>
                  <p className="text-muted-foreground">Beautiful, responsive websites built from scratch tailored to your specific requirements</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Focused</h3>
                  <p className="text-muted-foreground">Optimized for speed, SEO, and user experience with the latest technologies</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Mobile Responsive</h3>
                  <p className="text-muted-foreground">All websites are fully responsive and work perfectly on all devices and screen sizes</p>
                </div>
              </div>

              <div className="flex gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                  <p className="text-muted-foreground">Quick turnaround times without compromising on quality and design excellence</p>
                </div>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30" />
                <div className="relative bg-gradient-to-br from-card to-background border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Call or WhatsApp</p>
                        <a href="tel:+918822968173" className="font-bold text-primary hover:text-accent transition-colors">
                          +91 8822968173
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-accent" size={20} />
                      <div>
                        <p className="text-sm text-muted-foreground">Email Me</p>
                        <a href="mailto:azmalkh4@gmail.com" className="font-bold text-accent hover:text-primary transition-colors">
                          azmalkh4@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Me a Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Ready to start your next project? Get in touch with me today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:azmalkh4@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    azmalkh4@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <a
                    href="tel:+918822968173"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +91 8822968173
                  </a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-700">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>
            © 2026 Azmal Khan. All rights reserved. | Professional Web Developer from India 🇮🇳
          </p>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes slide-in-from-top-4 {
          from {
            opacity: 0;
            transform: translateY(-16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-from-bottom-4 {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-from-left-4 {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-from-right-4 {
          from {
            opacity: 0;
            transform: translateX(16px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .slide-in-from-top-2 {
          animation: slide-in-from-top-4 0.3s ease-out forwards;
        }

        .slide-in-from-bottom-4 {
          animation: slide-in-from-bottom-4 0.5s ease-out forwards;
          opacity: 0;
        }

        .slide-in-from-left-4 {
          animation: slide-in-from-left-4 0.5s ease-out forwards;
          opacity: 0;
        }

        .slide-in-from-right-4 {
          animation: slide-in-from-right-4 0.5s ease-out forwards;
          opacity: 0;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
