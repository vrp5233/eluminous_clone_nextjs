import React from "react";
import {
  ComparativeAnalysisWrapper,
  HireTitle,
} from "./ComparativeAnalysis.style";
const ComparativeAnalysis = () => {
  return (
    <>
      <ComparativeAnalysisWrapper>
        <HireTitle>Comparative Analysis</HireTitle>
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
              <tr>
                <th scope="row">Time to get right developers</th>
                <td>1 day - 2 weeks</td>
                <td>4 - 12 weeks</td>
                <td>1 - 12 weeks</td>
              </tr>
              <tr>
                <th>Time to start a project</th>
                <td>1 day - 2 weeks</td>
                <td>1 - 12 weeks</td>
                <td>2 - 10 weeks</td>
              </tr>
              <tr>
                <th scope="row">Acquisition cost</th>
                <td>0</td>
                <td>0</td>
                <td>$9,000 - $25,000</td>
              </tr>
              <tr>
                <th>Recurring cost of training &amp; benefits</th>
                <td>0</td>
                <td>0</td>
                <td>$5,000 - $10,000</td>
              </tr>
              <tr>
                <th>Pricing (weekly Average)</th>
                <td>1.5x</td>
                <td>1x</td>
                <td>4x</td>
              </tr>
              <tr>
                <th>Time to scale size of team</th>
                <td>1 day - 2 weeks</td>
                <td>1 - 12 weeks</td>
                <td>4 - 16 weeks</td>
              </tr>
              <tr>
                <th>Project failure risk</th>
                <td>
                  Extremely Low <br />
                  <span style={{ color: "#2d3e62" }}>
                    We have <b>97% </b>Success Ratio
                  </span>
                </td>
                <td>Very High</td>
                <td>Low</td>
              </tr>
              <tr>
                <th>Termination costs</th>
                <td>NONE</td>
                <td>None</td>
                <td>High</td>
              </tr>
              <tr>
                <th>Developers backed by a delivery team</th>
                <td>YES</td>
                <td>No</td>
                <td>Some</td>
              </tr>
              <tr>
                <th>Dedicated resources</th>
                <td>YES</td>
                <td>No</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Agile Development methodology</th>
                <td>YES</td>
                <td>No</td>
                <td>Some</td>
              </tr>
              <tr>
                <th>Quality assuarance</th>
                <td>YES</td>
                <td>Some</td>
                <td>No</td>
              </tr>
              <tr>
                <th>Impact due to turnover</th>
                <td>NONE</td>
                <td>High</td>
                <td>High</td>
              </tr>
              <tr>
                <th>Structured training programs</th>
                <td>YES</td>
                <td>No</td>
                <td>Some</td>
              </tr>
              <tr>
                <th>Communications</th>
                <td>Seamless</td>
                <td>Uncertain</td>
                <td>Seamless</td>
              </tr>
              <tr>
                <th>Assured work rigor</th>
                <td>40 hrs/week</td>
                <td>Uncertain</td>
                <td>40 hrs/week</td>
              </tr>
              <tr>
                <th>Tools and professional environment</th>
                <td>Best-in-Class</td>
                <td>No</td>
                <td>Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ComparativeAnalysisWrapper>
    </>
  );
};

export default ComparativeAnalysis;
