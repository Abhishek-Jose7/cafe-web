import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureDrinks } from './components/SignatureDrinks';
import { MenuPreview } from './components/MenuPreview';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SignatureDrinks />
      <MenuPreview />
      <Gallery />
      <Location />
      <Footer />
    </div>
  );
}
