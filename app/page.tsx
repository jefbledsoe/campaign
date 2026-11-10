import Hero from "./components/Hero";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import StayConnected from "./components/StayConnected";
import ThankYouLetter from "./components/ThankYouLetter";
import Values from "./components/Values";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ThankYouLetter />
        <Values />
        <StayConnected />
      </main>
      <SiteFooter />
    </>
  );
}
