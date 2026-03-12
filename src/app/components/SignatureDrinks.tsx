import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const drinks = [
  {
    name: 'Vietnamese Coffee',
    description: 'Rich, bold coffee with sweet condensed milk',
    image: '/items/l.png',
  },
  {
    name: 'Hot Chocolate',
    description: 'Decadent cocoa with whipped cream',
    image: '/items/g.png',
  },
  {
    name: 'Warm Chocolate Pudding',
    description: 'Soft chocolate pudding topped with vanilla ice cream',
    image: '/items/2025-10-28 (4).png',
  },
  {
    name: 'Chocolate Truffle Cake',
    description: 'Rich layered chocolate cake with smooth ganache',
    image: '/items/2025-10-28 (3).png',
  },
];

export function SignatureDrinks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
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
    <section ref={sectionRef} className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Signature Specials
          </h2>
          <p className="text-lg text-[#3b2b22]/80">
            From bold brews to decadent desserts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinks.map((drink, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-white overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-2xl text-[#111111] mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {drink.name}
                </h3>
                <p className="text-[#3b2b22]/70">{drink.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
