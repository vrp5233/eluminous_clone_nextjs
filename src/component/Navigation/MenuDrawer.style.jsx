import styled from "styled-components";

export const MobileMenuWrapper = styled.div`
  .MenuDrawer {
    width: 350px !important;
    padding: 60px 10px;
    display: none;
    & > div,
    & * div {
      height: 100% !important;
      min-height: 100% !important;
      max-width: 100% !important;
    }
    @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
      display: inline-block;
    }
  }
`;
export const OpenMenuButton = styled.button`
  all: unset;
  font-size: 26px;
  font-weight: 400;
  display: none;
  @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
    display: inline-block;
  }
`;
export const CloseMenuButton = styled(OpenMenuButton)`
  background-color: rgba(var(--blue));
  color: rgba(var(--white));
  padding: 0px 10px;
  height: 40px;
  width: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0px;
  top: 0;
`;
