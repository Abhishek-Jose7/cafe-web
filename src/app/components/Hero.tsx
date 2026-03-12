import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
      })
        .from(
          subtitleRef.current,
          {
            opacity: 0,
            duration: 1,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url('/main.png')`,
          backgroundPosition: 'center 20%',
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl text-white mb-10"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          OCD – Obsessive Coffee Disorder
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/90 mb-14 tracking-wide"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Craft Coffee • Fresh Bakes • Cozy Vibes
        </p>
        <button
          ref={ctaRef}
          onClick={scrollToMenu}
          className="bg-white text-[#111111] px-12 py-5 text-lg tracking-widest uppercase hover:bg-[#f5f5f5] transition-all duration-300 transform hover:scale-105"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Explore Menu
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
