import styled from "styled-components";

export const ComparativeAnalysisWrapper = styled.section`
  .title {
    margin-bottom: 50px;
  }
  .custom_table {
    max-width: 1150px;
    margin: 0 auto 70px;
    thead th,
    tbody td {
      padding: 0.75rem;
      &:first-child {
        text-align: left;
      }
    }
    thead th {
      background-color: rgba(var(--blackTurmeric));
      color: #fff;
      font-size: 18px;
      font-weight: 600;
      border: 1px solid rgba(var(--blackTurmeric));
      vertical-align: middle;
      text-align: center;
      &:nth-child(2) {
        background-color: #2166f3;
        border: 1px solid #2166f3;
      }
    }
    tbody th,
    tbody td {
      border: 1px solid #dee2e6;
    }
    tbody th {
      font-weight: 500;
      background-color: rgb(240, 240, 240);
    }
    tbody td {
      text-align: center;
      &:nth-child(2) {
        color: #048d00;
        font-weight: 600;
        span {
          color: rgba(var(--blackTurmeric));
        }
      }
    }
  }
`;
