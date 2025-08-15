import About from '@/components/About/About';
import Benefits from '@/components/Benefits/Benefits';
import Hero from '@/components/Hero/Hero';
import OurWorks from '@/components/OurWorks/OurWorks';
import Reviews from '@/components/Reviews/Reviews';
import Servises from '@/components/Servises/Servises';
import Support from '@/components/Support/Support';
import Team from '@/components/Team/Team';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Servises />
      <Benefits />
      <Team />
      <OurWorks />
      <Reviews />
      <Support />
    </>
  );
};

export default Home;
