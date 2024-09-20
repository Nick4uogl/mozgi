import Footer from "../components/Footer";
import Header from "../components/Header";
import SideNavigation from "../components/SideNavigation";

interface HomeProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<HomeProps> = ({ children }) => {
  return (
    <div className="wrapper flex flex-col h-screen w-full bg-grey-dark relative overflow-hidden">
      <Header />
      <SideNavigation />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
