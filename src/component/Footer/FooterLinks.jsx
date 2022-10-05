import React from "react";
import Link from "next/link";
// import FooterLink from "./FooterLink";
import { Col } from "react-bootstrap";
import { Wrap, Heading, LinkList } from "./Footer.style";

function FooterLinks({ footerMenusDatasProps, xl, lg, md, sm }) {
  return (
    <>
      {footerMenusDatasProps.footerMenus.map((footerMenu, path) => {
        return (
          <>
            <Col xl={xl} lg={lg} md={md} sm={sm}>
              <Wrap>
                {footerMenu.path === "" ? (
                  <Heading>{footerMenu.title}</Heading>
                ) : (
                  <Heading>
                    <Link href={footerMenu.path}>
                      <a>{footerMenu.title}</a>
                    </Link>
                  </Heading>
                )}
                <LinkList>
                  {footerMenu.items.map((menu, path) => {
                    return (
                      <li key={path}>
                        <Link href={menu.path}>
                          <a
                            dangerouslySetInnerHTML={{
                              __html: menu.title,
                            }}
                          ></a>
                        </Link>
                      </li>
                    );
                  })}
                </LinkList>
              </Wrap>
            </Col>
          </>
        );
      })}
    </>
  );
}

export default FooterLinks;
