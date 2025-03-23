import DeliveryCalculator from "@/components/homeComponents/calculator";
import Delivery from "@/components/homeComponents/delivery";
import StoreSlider from "@/components/homeComponents/popularStores";
import Services from "@/components/homeComponents/services";
import Stats from "@/components/homeComponents/stats";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Delivery />
      <Stats />
      <DeliveryCalculator />
      <Services />
      <StoreSlider />
    </div>
  );
}
