import { Features } from '../components/Features/Features';
import { Header } from '../components/Header/Header';
import {Hero} from '../components/Hero/Hero';
import { HowItWorks } from '../components/HowItWorks/HowItWorks';


export function LandingPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Features/>
      <HowItWorks />
    </div>
  );
}

