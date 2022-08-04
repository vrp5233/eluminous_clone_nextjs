import React from "react";
import { HireReactData } from "../../data/hireDedicated/react";
import { HireReviewData } from "../../data/hireDedicated/review";
import { HireCaseStudiesData } from "../../data/hireDedicated/caseStudies";
import HeadMeta from "../../component/Navigation/HeadMeta";
import TopBanner from "../../component/HireDedicated/TopBanner/TopBanner";
import Expertise from "../../component/HireDedicated/Expertise/Expertise";
import WhyTech from "../../component/HireDedicated/WhyTech/WhyTech";
import ReviewSlider from "../../component/HireDedicated/ReviewSlider/ReviewSlider";
import CaseStudies from "../../component/CaseStudies/CaseStudies";
import Faq from "../../component/HireDedicated/Faq/Faq";
import Contact from "../../component/HireDedicated/Contact/Contact";
const HireDedicatedReact = () => {
  return (
    <>
      <HeadMeta allMeta={HireReactData} />
      <TopBanner allData={HireReactData} />
      <Expertise expertiseData={HireReactData} />
      <WhyTech whyTechData={HireReactData} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={HireReactData} />
      <Contact />
    </>
  );
};

export default HireDedicatedReact;
