import React from "react";
import { banner } from "../../data/hireDedicated/angularjs/banner";
import { expertiseIns } from "../../data/hireDedicated/angularjs/expertise";
import { whyTechs } from "../../data/hireDedicated/angularjs/whyTechs";
import { faqs } from "../../data/hireDedicated/angularjs/faqs";
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
const HireDedicatedAngular = () => {
  return (
    <>
      <HeadMeta allMeta={banner} />
      <TopBanner allData={banner} />/
      <Expertise expertiseData={expertiseIns} />
      <WhyTech whyTechData={whyTechs} />
      <ReviewSlider ReviewSliderData={HireReviewData} />
      <CaseStudies CaseStudyData={HireCaseStudiesData} />
      <Faq faqsData={faqs} />
      <Contact />
    </>
  );
};

export default HireDedicatedAngular;
