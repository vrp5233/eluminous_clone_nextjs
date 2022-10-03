import React from "react";
import { Container, Table, Col } from "react-bootstrap";
import LinkCustom from "../../Button/LinkCustom";
import { HireTitle } from "../../../styles/GlobalStyle.style";
import { ComparativeAnalysisWrapper } from "./ComparativeAnalysis.style";
import { ComparativeAnalysisData } from "../../../data/hireDedicated/ComparativeAnalysisData";
const ComparativeAnalysis = () => {
  return (
    <>
      <ComparativeAnalysisWrapper>
        <HireTitle className="text-center title">Comparative Analysis</HireTitle>
        <Container>
          <div className="table-responsive">
            <table className="table table-bordered custom_table">
              <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">eLuminous</th>
                  <th
                    scope="col"
                    style={{ borderRight: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    Freelance Developers
                  </th>
                  <th scope="col">In-house Developers</th>
                </tr>
              </thead>
              <tbody style={{ border: "0" }}>
                {ComparativeAnalysisData.tbodies.map((tbody, index) => {
                  return (
                    <tr key={index}>
                      <th
                        dangerouslySetInnerHTML={{
                          __html: tbody.parameter,
                        }}
                      ></th>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: tbody.eLuminous,
                        }}
                      ></td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: tbody.freelance,
                        }}
                      ></td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: tbody.inhouse,
                        }}
                      ></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <LinkCustom
            BtnTransparent={false}
            linkUrl={ComparativeAnalysisData.btnLink}
            titleText={ComparativeAnalysisData.btnText}
            ParentClass="text-center"
          />
        </Container>
      </ComparativeAnalysisWrapper>
    </>
  );
};

export default ComparativeAnalysis;
