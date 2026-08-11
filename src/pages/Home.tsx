import PageShell from "../components/layout/PageShell";
import Hero from "../components/sections/Hero";
import TrustStats from "../components/sections/TrustStats";
import WhyDifferent from "../components/sections/WhyDifferent";
import CourseShowcase from "../components/sections/CourseShowcase";
import AboutTeaser from "../components/sections/AboutTeaser";
import Testimonials from "../components/sections/Testimonials";
import NewsBlog from "../components/sections/NewsBlog";
import RegisterCta from "../components/sections/RegisterCta";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustStats />
      <WhyDifferent />
      <CourseShowcase />
      <AboutTeaser />
      <Testimonials />
      <NewsBlog />
      <RegisterCta />
    </PageShell>
  );
}
