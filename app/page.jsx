import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustedBy from '@/components/TrustedBy';
import Marketing from '@/components/Marketing';
import Services from '@/components/Services';
import HowWeHelp from '@/components/HowWeHelp';
import CoreFeatures from '@/components/CoreFeatures';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Marketing />
      <Services />
      <HowWeHelp />
      <CoreFeatures />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  );
}