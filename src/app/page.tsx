import { About } from "@/components/About";
import { Achievers } from "@/components/Achievers";
import { Admission } from "@/components/Admission";
import { AdmissionProcess } from "@/components/AdmissionProcess";
import { BatchSchedule } from "@/components/BatchSchedule";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { CounsellingCta } from "@/components/CounsellingCta";
import { Courses } from "@/components/Courses";
import { Facilities } from "@/components/Facilities";
import { Faculty } from "@/components/Faculty";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { LearningProcess } from "@/components/LearningProcess";
import { Parents } from "@/components/Parents";
import { Results } from "@/components/Results";
import { ResultsTicker } from "@/components/ResultsTicker";
import { Subjects } from "@/components/Subjects";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ResultsTicker />
      <TrustBar />
      <About />
      <Courses />
      <Subjects />
      <WhyChooseUs />
      <Parents />
      <LearningProcess />
      <AdmissionProcess />
      <Results />
      <Achievers />
      <Faculty />
      <Facilities />
      <BatchSchedule />
      <Testimonials />
      <CounsellingCta />
      <Admission />
      <Blog />
      <Faq />
      <Contact />
    </main>
  );
}
