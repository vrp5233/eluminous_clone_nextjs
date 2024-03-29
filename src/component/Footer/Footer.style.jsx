import styled from "styled-components";
export const FooterWrapper = styled.section`
  padding-bottom: 0;
  .container {
    @media (max-width: ${({ theme }) => theme.media.deskstop1}) {
      max-width: 100%;
      padding: 0;
    }
  }
`;
export const GreyWrapper = styled.div`
  background-color: rgb(var(--grey));
  padding: 80px 150px;
  @media (max-width: ${({ theme }) => theme.media.deskstop1}) {
    padding: 80px 75px 50px;
  }
  a {
    transition: var(--trans_a3);
    &:hover {
      color: rgba(var(--blue));
    }
  }
`;
export const Wrap = styled.div`
  margin-bottom: 40px;
`;
export const Heading = styled.h6`
  font-size: 16px;
  color: rgba(var(--black));
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
  margin-bottom: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 29px;
    background-color: #2166f3;
  }
  a {
    all: unset;
    cursor: pointer;
    transition: all 0.3s;
  }
`;
export const LinkList = styled.ul`
  li {
    a {
      display: inline-block;
      font-size: 14px;
      color: #000;
      line-height: 28px;
      text-decoration: none;
    }
  }
`;

export const FooterLogoWrapper = styled.div`
  max-width: 372px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  div {
    width: 50% !important;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    a,
    span {
      display: inline-block;
      width: 100%;
      /* height: 100%; */
      text-align: center;
      position: relative;
      max-width: 130px;
    }
    img {
      width: 100%;
      margin: 0 auto !important;
    }
  }
`;
export const Clutch = styled.div`
  &:first-child {
    width: 100% !important;
    max-width: 100%;
    justify-content: center !important;
    /* padding: 12px 10px 5px 58px; */
    border-radius: 5px;
  }
  .content {
    display: flex;
  }
`;
export const MobileApp = styled.div`
  position: relative;
`;
export const ItFirms = styled.div``;
export const GoodFirms = styled.div`
  max-width: 210px;
  margin: 0 auto;
  display: block;
`;
export const Gartner = styled.div`
  margin-bottom: 0;
  text-align: center;
`;
export const Dmca = styled.div`
  flex: 0 0 100%;
  margin-top: 10px;
`;

export const CompanyInfo = styled.ul`
  font-size: 13px;
  line-height: 22px;
  color: #212529;
  li {
    margin-bottom: 10px;
    display: flex;
    svg {
      color: grey;
      font-size: 21px !important;
      margin-right: 16px;
      flex: 0 0 auto;
    }
    a {
      display: flex;
      align-items: center;
      color: rgba(var(--black));
      text-decoration: none;
    }
  }
`;

export const PartnerWrap = styled.div``;
export const ContactWrap = styled.div``;
export const CompanyMail = styled.div`
  font-size: 13px;
  line-height: 22px;
  color: #212529;
  max-width: 800px;
  flex-wrap: wrap;
  margin-bottom: 0;
  display: flex;
  a {
    display: flex;
    align-items: center;
    color: rgba(var(--black));
    text-decoration: none;
  }
`;
export const Mail = styled.div`
  /* width: 100%; */
  flex: 0 0 33.33%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  /* border-top: 1px solid #dbdbdb; */
  /* border-bottom: 1px solid #dbdbdb; */
  margin: 6px 0 12px;
  position: relative;
  /* padding: 12px 0; */
  &:first-child {
    padding-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 1px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:last-child:before {
    content: none;
  }
  b {
    width: 100%;
    color: #333;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-weight: 700;
  }
  li {
    display: block;
    width: 100%;
    a {
      display: inline-block;
      align-items: center;
      font-size: 12px;
      flex-wrap: wrap;
      line-height: 1.2;
      margin-bottom: 5px;
      svg {
        width: 23px;
        color: grey;
        font-size: 18px !important;
        margin-right: 8px;
        text-align: center;
      }
    }
  }
`;

// export const DigitalVirtual = styled.div`
//   margin-bottom: 10px;
//   display: flex;
//   & > div {
//     padding: 0;
//     margin: 0;
//     border: 0;
//   }
// `;
