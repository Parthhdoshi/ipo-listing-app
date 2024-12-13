import HeroSection from "./components/HeroSection";
import IPOList from "./components/IPOList";
import IPOTabs from "./components/IPOTabs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Open <span className="text-orange-500"> IPOs</span></h2>
          <IPOList />
        </div>
      </section>
      <IPOTabs />
    </main>
  );
}
