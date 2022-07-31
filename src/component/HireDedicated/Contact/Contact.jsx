import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

import HireForm from "./Form/HireForm";
import { ContactWrapper, ImgBox, TextBox } from "./Contact.style";
const Contact = () => {
  // const filePath = window.location.origin + "/images/HireDedicated/";
  // const fileIconsPath = window.location.origin + "/images/HireDedicated/icons/";
  return (
    <>
      <ContactWrapper>
        <Container>
          <Row>
            <Col xxl={6}>
              <ImgBox>
                <Image
                  src="/images/HireDedicated/contact-bg.webp"
                  alt="Contact Banner"
                  className="w-100"
                  // layout="fill"
                  // layout="fill"
                  // objectFit="none"
                  // objectFit="contain"
                  // quality={100}
                  width={771}
                  height={927}
                  priority="true"
                />
                <TextBox></TextBox>
              </ImgBox>
            </Col>
            <Col
              xxl={6}
              className="d-flex align-items-center"
              name="hireDedicatedForm"
            >
              <HireForm />
            </Col>
          </Row>
        </Container>
      </ContactWrapper>
    </>
  );
};

export default Contact;
