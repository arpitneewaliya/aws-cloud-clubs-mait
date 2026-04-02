import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CommunitySection from "@/components/CommunitySection";

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-surface pt-24">
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
