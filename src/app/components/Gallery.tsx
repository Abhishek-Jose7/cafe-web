import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    url: '/gallery/h.png',
    alt: 'Cafe ambiance',
  },
  {
    url: '/gallery/huh.png',
    alt: 'Coffee moments',
  },
    {
    url: '/gallery/f.png',
    alt: 'Cafe ambiance',
  },
  {
    url: '/gallery/g.png',
    alt: 'Coffee moments',
  },
    {
    url: '/gallery/lol.png',
    alt: 'Cafe ambiance',
  },
  {
    url: '/gallery/main2.png',
    alt: 'Coffee moments',
  },
];

export function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, index) => {
        gsap.from(img, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Café Gallery
          </h2>
          <p className="text-lg text-[#3b2b22]/80">
            Step inside our urban sanctuary
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className="aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
