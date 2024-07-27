import Advantage from "./components/Advantage";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import UsPhilosophy from "./components/UsPhilosophy";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <UsPhilosophy />
      <Advantage />
      <h5 className="bg-[#AF7859] mb-8 text-center text-white font-extrabold text-2xl py-2">
        Наши услуги
      </h5>
      <OurServices />
      <CardGrid />
      <Footer />
    </>
  );
}

export default App;
