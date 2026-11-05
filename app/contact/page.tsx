import FloatingNav from "@/components/common/FloatingNav";
import EventFooter from "@/components/common/EventFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactCountdown from "@/components/contact/ContactCountdown";
import FAQ from "@/components/contact/FAQ";
import Animations from "@/components/Animations";

export const metadata = { title: "Contact — SuccessWikis" };

export default function Contact() {
  return (
    <>
      <Animations />
      <FloatingNav />
      <main className="contact-page">
        <ContactHero />
        <ContactCountdown />
        <FAQ />
      </main>
      <EventFooter />
    </>
  );
}
