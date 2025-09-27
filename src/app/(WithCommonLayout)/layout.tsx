import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
export default HomePageLayout;
