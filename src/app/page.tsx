import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AccommodationsSection from '@/components/AccommodationsSection';
import DiningSection from '@/components/DiningSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import SpaSection from '@/components/SpaSection';
import SpotlightSection from '@/components/SpotlightSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AccommodationsSection />
      <DiningSection />
      <ActivitiesSection />
      <SpaSection />
      <SpotlightSection />
      <Footer />
    </main>
  );
}