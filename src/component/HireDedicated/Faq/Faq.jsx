import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

import { HiOutlineChevronDown } from "react-icons/hi";
import { HireTitle, HireSmallTitle } from "../../../styles/GlobalStyle.style";
import { Wrapper } from "./Faq.style";
const Faq = ({ faqsData }) => {
  return (
    <>
      <Wrapper className="greyBg">
        <Container>
          <HireTitle className="text-center">FAQ&rsquo;s</HireTitle>
          <Accordion defaultActiveKey="0">
            {faqsData.faqLists.map((faq, id) => {
              return (
                <Accordion.Item eventKey={faq.id} key={id}>
                  <Accordion.Header>
                    {faq.title} <HiOutlineChevronDown />
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.paragraph ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: faq.paragraph,
                        }}
                      ></div>
                    ) : (
                      ""
                    )}
                    <ul>
                      {faq.ulLists.map((ulList, faqId) => {
                        return ulList.list ? (
                          <li
                            key={faqId}
                            dangerouslySetInnerHTML={{
                              __html: ulList.list,
                            }}
                          ></li>
                        ) : (
                          ""
                        );
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Container>
      </Wrapper>
    </>
  );
};

export default Faq;
