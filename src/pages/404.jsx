import React from "react";
import { Container } from "react-bootstrap";
import LinkCustom from "../component/Button/LinkCustom";
// import Base from "../core/Base";
import styled from "styled-components";

const ErrorComponent = () => {
  return (
    // <Base>
    <ErrorWrapper className="homeBanner innerBanner innerBannerImage banner">
      <Container className="textWrapper text-center">
        <Title className="title text-center fw900">404</Title>
        <SubTitle className="smallTitle text-center fw700">
          We Could Not Find Page You’re Looking
        </SubTitle>
        <Paragraph className="fw500">
          The link you’re trying to access is probably broken, or the page has
          been removed.
        </Paragraph>
        <LinkCustom
          BtnTransparent={false}
          linkUrl="/"
          titleText="Back to Home"
          colorChange=""
        />
      </Container>
    </ErrorWrapper>
    // </Base>
  );
};
export default ErrorComponent;

export const ErrorWrapper = styled.div`
  background-color: #f7f7f7;
  margin: 0 auto;
  padding: 10% 0;
  background-image: url(../images/eluminous-pvt-ltd_black.svg);
  background-blend-mode: soft-light;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 80%;
`;
export const Title = styled.h2`
  font: 200px / normal var(--inter);
`;
export const SubTitle = styled.h5`
  font: 24px / 1.1 var(--inter);
  margin: 0 auto 20px;
`;
export const Paragraph = styled.p`
  font: 18px / normal var(--inter);
  max-width: 600px;
  margin: 0 auto 30px;
  color: #555;
  letter-spacing: 0.5px;
  text-transform: capitalize;
`;
