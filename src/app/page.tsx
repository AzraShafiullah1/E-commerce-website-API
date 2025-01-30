import Navbar         from  "@/components/Navbar";
import Banner         from  "@/components/Banner";
import HeroSection    from  "@/components/HeroSection";
import ProcessSection from  "@/components/ProcessSection";
import ProductList    from  "@/components/ProductList";
import Specialoffers  from  "@/components/Specialoffers";
import Card           from  "@/components/Card";
import Reservation    from  "@/components/Reservation";
import MenuItem       from "@/components/MenuItem";





export default function Home() {
  return (
     <div className="bg-cyan-400">
      <Navbar />
      <HeroSection />
      <Banner />
      <ProcessSection />
      <ProductList />
      <MenuItem />
      <Specialoffers />
      <Card />
      <Reservation />
    
      
    </div>
  
  );
}
