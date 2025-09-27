import Blogs from '@/app/components/modules/home/blog';
import CloudHosting from '@/app/components/modules/home/cloud-hosting';
import DesingAndDevelopment from '@/app/components/modules/home/desing&development';
import Features from '@/app/components/modules/home/features';
import HomeBanner from '@/app/components/modules/home/HomeBanner';
import Projects from '@/app/components/modules/home/projects';
import Review from '@/app/components/modules/home/review';
import Solutions from '@/app/components/modules/home/solutions';
import Start from '@/app/components/modules/home/start-project';
import Teams from '@/app/components/modules/home/team';
import PricingAndPlans from '@/app/components/modules/pricingPlan';

function HomePage() {
  return (
    <>
      <HomeBanner />
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
