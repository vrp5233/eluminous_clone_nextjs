import React from "react";
import { banner } from "../../data/hireDedicated/reactjs/banner";
import { expertiseIns } from "../../data/hireDedicated/reactjs/expertise";
import { whyTechs } from "../../data/hireDedicated/reactjs/whyTechs";
import { faqs } from "../../data/hireDedicated/reactjs/faqs";
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
      <HeadMeta allMeta={banner} />
      <TopBanner allData={banner} />
      <Expertise expertiseData={expertiseIns} />
      <WhyTech whyTechData={whyTechs} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={faqs} />
      <Contact />
    </>
  );
};

export default HireDedicatedReact;
