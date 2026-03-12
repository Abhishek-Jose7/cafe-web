import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="visit" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Visit Us
          </h2>
          <p className="text-lg text-[#3b2b22]/80">
            We're waiting to serve you
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="aspect-video lg:aspect-square overflow-hidden bg-[#f5f5f5]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d73.015453!3d19.0217691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c32df42e411d%3A0x7bddbb7407db7124!2sOCD-Obsessive%20Coffee%20Disorder!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location map"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3
                  className="text-2xl text-[#111111] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Address
                </h3>
                <p className="text-[#3b2b22]/80">
                  OCD - Obsessive Coffee Disorder
                  <br />
                  Panvel, Navi Mumbai
                  <br />
                  Maharashtra 410206
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3
                  className="text-2xl text-[#111111] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Opening Hours
                </h3>
                <p className="text-[#3b2b22]/80">
                  Monday - Friday: 8:00 AM - 10:00 PM
                  <br />
                  Saturday - Sunday: 9:00 AM - 11:00 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3
                  className="text-2xl text-[#111111] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Contact
                </h3>
                <p className="text-[#3b2b22]/80">
                  +91 98765 43210
                  <br />
                  hello@ocdcoffee.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#111111] flex items-center justify-center flex-shrink-0">
                <Instagram className="text-white" size={24} />
              </div>
              <div>
                <h3
                  className="text-2xl text-[#111111] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Follow Us
                </h3>
                <a
                  href="https://www.instagram.com/ocdcafes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3b2b22]/80 hover:text-[#111111] transition-colors"
                >
                  @ocdcoffee
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
