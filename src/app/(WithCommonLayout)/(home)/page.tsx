import BannerSlider from '@/components/modules/home/BannerSlider';
import Blogs from '@/components/modules/home/blog';
import CloudHosting from '@/components/modules/home/cloud-hosting';
import DesingAndDevelopment from '@/components/modules/home/desing&development';
import Features from '@/components/modules/home/features';
import Projects from '@/components/modules/home/projects';
import Review from '@/components/modules/home/review';
import Solutions from '@/components/modules/home/solutions';
import Start from '@/components/modules/home/start-project';
import Teams from '@/components/modules/home/team';
import PricingAndPlans from '@/components/modules/pricingPlan';

function HomePage() {
  return (
    <>
      <BannerSlider />
      <Solutions />
      <CloudHosting />
      <DesingAndDevelopment />
      <Features />
      <Teams />
      <Projects />
      <Review />
      <PricingAndPlans />
      <Blogs />
      <Start />
    </>
  );
}
export default HomePage;
