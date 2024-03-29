import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import LinkCustom from "../../Button/LinkCustom";
import { RiStarSFill } from "react-icons/ri";

import { AniMationLogo, CircleWrapper } from "../WhyTech/WhyTech.style";
import {
  HireDedicatedBannerWrapper,
  TitleWrap,
  SmallTitleWrap,
  ParagraphWrap,
  ImgWrapper,
  ClutchReview,
  ClutchLogoRate,
  StarWrap,
  List,
} from "./TopBanner.style";
const TopBanner = ({ allData }) => {
  // const filePath = window.location.origin + "/images/";
  return (
    <>
      <HireDedicatedBannerWrapper>
        <Container>
          <Row>
            <Col>
              <TitleWrap className="blue">
                {allData.title}
                <span className="blackTurmeric fw400 d-block text-uppercase">
                  {allData.titleSpan}
                </span>
              </TitleWrap>
              {allData.smallTitle ? (
                <SmallTitleWrap
                  dangerouslySetInnerHTML={{
                    __html: allData.smallTitle,
                  }}
                ></SmallTitleWrap>
              ) : (
                ""
              )}
              <ParagraphWrap
                dangerouslySetInnerHTML={{
                  __html: allData.paragraph,
                }}
              ></ParagraphWrap>
              <LinkCustom
                BtnTransparent={false}
                linkUrl={allData.btnLink}
                titleText={allData.btnText}
                className=""
                activeClass="active"
                spy={true}
                smooth={true}
                offset={500}
                duration={6000}
                delay={6000}
              />
            </Col>
            <Col>
              <ImgWrapper>
                <AniMationLogo HireDedicatedTopBanner={true}>
                  <div className="logo d-flex justify-content-center align-items-center">
                    <Image
                      src={allData.imgLogo}
                      alt={allData.imgLogoAlt}
                      className="img-fluid"
                      width={89}
                      height={95}
                      // layout="fill"
                      priority={true}
                      layout="responsive"
                      sizes="320 640 750"
                    />
                  </div>
                  <CircleWrapper>
                    {[1, 2, 3, 4].map((value, index) => {
                      return <div className="circle" key={index}></div>;
                    })}
                  </CircleWrapper>
                </AniMationLogo>
                <Image
                  src={allData.imgSrc}
                  alt={allData.imgAlt}
                  width={624}
                  height={493}
                  layout="responsive"
                  priority={true}
                />
                <ClutchReview>
                  <ClutchLogoRate className="d-flex align-items-center justify-content-between">
                    <Image
                      src="/images/HireDedicated/clutch.webp"
                      alt="Clutch"
                      width={65}
                      height={19}
                    />
                    <StarWrap className="d-flex align-items-center">
                      <span>5.0</span>
                      <ul className="d-flex">
                        {[1, 2, 3, 4, 5].map((value, index) => {
                          return (
                            <li key={index}>
                              <RiStarSFill />
                            </li>
                          );
                        })}
                      </ul>
                    </StarWrap>
                  </ClutchLogoRate>
                  <p className="p-0">{allData.clutchReviewText}</p>
                </ClutchReview>
                <List>
                  {allData.listMenus.map((listMenu, id) => {
                    return (
                      <li
                        className="d-flex justify-content-center align-items-center"
                        key={id}
                      >
                        <span className="d-flex flex-column">
                          <div className="icon">
                            {/* <object
                              data={listMenu.img}
                              className="w-100"
                              width={61}
                              height={50}
                            /> */}
                            <Image
                              src={listMenu.img}
                              className="w-100"
                              alt="Clutch"
                              width={60}
                              height={60}
                              layout="fixed"
                              priority={true}
                            />
                          </div>
                          <div className="text fw600 black p-0 text-center">
                            {listMenu.title}
                          </div>
                        </span>
                      </li>
                    );
                  })}
                </List>
              </ImgWrapper>
            </Col>
          </Row>
        </Container>
      </HireDedicatedBannerWrapper>
    </>
  );
};

export default TopBanner;
