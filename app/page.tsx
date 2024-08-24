import Hero from '@/components/hero/hero';
import Features from '@/components/features/features';
import Benefits from '@/components/benefits/benefits';
import ProcessSection from '@/components/process/process';
import FAQSection from '@/components/faq/faq';
import CTASection from '@/components/cta/cta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Benefits />
      <ProcessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
