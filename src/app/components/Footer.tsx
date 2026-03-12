import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              OCD
            </h3>
            <p className="text-white/70">
              Obsessive Coffee Disorder
              <br />
              Where passion meets perfection
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <button
                  onClick={() =>
                    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="hover:text-white transition-colors"
                >
                  Visit Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Connect With Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2026 OCD – Obsessive Coffee Disorder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
