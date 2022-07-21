import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import LinkCustom from "../Button/LinkCustom";
import { RiStarSFill } from "react-icons/ri";
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
  LogoWrapper2,
} from "./HomeBanner.style";
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
              <ParagraphWrap>{allData.paragraph}</ParagraphWrap>
              <LinkCustom
                BtnTransparent={false}
                linkUrl={allData.btnLink}
                titleText={allData.btnText}
                colorChange=""
              />
            </Col>
            <Col>
              <ImgWrapper>
                <Image
                  src={allData.imgSrc}
                  alt={allData.imgAlt}
                  width={624}
                  height={493}
                  layout="responsive"
                />
              </ImgWrapper>
            </Col>
          </Row>
        </Container>
      </HireDedicatedBannerWrapper>
    </>
  );
};

export default TopBanner;
