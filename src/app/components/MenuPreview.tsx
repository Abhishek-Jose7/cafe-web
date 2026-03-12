import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuCategories = [
  {
    title: 'Coffee',
    items: [
      { name: 'Americano', price: '₹120' },
      { name: 'Cappuccino', price: '₹140' },
      { name: 'Café Latte', price: '₹150' },
      { name: 'Espresso', price: '₹100' },
      { name: 'Mocha', price: '₹160' },
      { name: 'Macchiato', price: '₹130' },
    ],
  },
  {
    title: 'Cold Brews',
    items: [
      { name: 'Classic Cold Brew', price: '₹180' },
      { name: 'Vietnamese Coffee', price: '₹190' },
      { name: 'Iced Latte', price: '₹170' },
      { name: 'Cold Mocha', price: '₹190' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Chocolate Brownie', price: '₹120' },
      { name: 'Cheesecake', price: '₹150' },
      { name: 'Cookie Selection', price: '₹80' },
      { name: 'Croissant', price: '₹90' },
    ],
  },
  {
    title: 'Quick Bites',
    items: [
      { name: 'Sandwich', price: '₹180' },
      { name: 'Panini', price: '₹200' },
      { name: 'Bagel', price: '₹140' },
      { name: 'Muffin', price: '₹100' },
    ],
  },
];

export function MenuPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(menuRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: menuRef.current,
          start: 'top 75%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="menu" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl text-[#111111] mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Our Menu
          </h2>
          <p className="text-lg text-[#3b2b22]/80">
            Crafted with care, served with love
          </p>
        </div>

        <div
          ref={menuRef}
          className="bg-[#111111] text-white p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {menuCategories.map((category, index) => (
              <div key={index}>
                <h3
                  className="text-2xl md:text-3xl mb-6 pb-3 border-b border-white/20"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-baseline">
                      <span className="text-white/90">{item.name}</span>
                      <span className="text-white/70 ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white text-[#111111] px-10 py-3 hover:bg-[#f5f5f5] transition-colors duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
