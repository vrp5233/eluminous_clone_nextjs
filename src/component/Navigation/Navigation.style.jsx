import styled from "styled-components";

export const NavigationToolbarWrapper = styled.div`
  padding: 7px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: #414549;
  line-height: 1.2;
  letter-spacing: 0.6px;
  svg {
    font-size: 20px;
    margin-right: 6px;
  }
`;

export const BarWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
    display: flex;
    column-gap: 25px;
    align-items: center;
  }
`;

export const NavigationWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9990;
  background-color: rgba(var(--white));
  background-color: ${({ bg }) => bg};
  transition: var(--trans_a3);
  &.is-sticky {
    background-color: rgba(var(--white));
    -webkit-box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    box-shadow: 0 2px 17px rgb(0 0 0 / 11%);
    transition: var(--trans);
  }
  nav {
    padding: 0;
  }
  nav:hover {
  }
  .container {
    max-width: 1730px;
    @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
      & > nav {
        display: none;
      }
    }
  }
  .navbar-brand {
    max-width: 220px;
    @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
      max-width: 180px;
    }
    img {
    }
  }
  .menusList {
    display: flex;
    transition: var(--trans_a3);
    @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
      display: block;
      margin-bottom: 80px;
    }
    .menu-items {
      position: relative;
      padding: 0 18px;
      @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
        padding: 0 12px;
      }
      @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
        padding: 0 10px;
      }
      @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
        border-bottom: 1px solid rgba(var(--grey));
        &:last-child {
          border: 0;
        }
      }
      & > a {
        /* padding: 0 10px 0 0; */
        position: relative;
      }
      & > button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        width: 100%;
        svg {
          transition: var(--trans_a3);
          font-size: 22px;
          width: auto;
          color: rgba(var(--black3));
        }
        &:hover svg {
          transform: rotate(180deg);
          color: rgba(var(--blue));
        }
      }
      & > a,
      & > button {
        font: 600 18px/75px "Inter", sans-serif;
        color: rgba(var(--black));
        text-transform: capitalize;
        border-bottom: 5px solid transparent;
        text-decoration: none;
        transition: var(--trans_a3);
        display: block;
        @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
          font: 600 16px/75px "Inter", sans-serif;
        }
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          text-align: left;
          line-height: 36px;
          font-size: 16px;
          padding: 5px 0;
          &:last-child {
            padding-bottom: 0;
          }
        }
      }
      &:hover > a,
      &:hover > button,
      &.active a,
      &.active button {
        text-decoration: none;
        border-bottom-color: #2166f3;
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          border-color: transparent;
        }
      }
      .dropdownMenu,
      .mega__menu {
        position: absolute;
        width: 300px;
        top: 47px;
        left: -20px;
        padding: 20px 0;
        opacity: 0;
        visibility: hidden;
        transition: var(--trans_a3);
        transform: translateY(100px);
        z-index: 9999;
        background-color: #fff;
        border-top: 1px solid #e3e3e3;
        box-shadow: 0 12px 20px rgb(0 0 0 / 10%);
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          position: static;
          display: none;
          box-shadow: none;
          &.show {
            transform: translate(0);
          }
        }
        .sub__menu__items,
        .sub__sub__menu__items {
          padding: 0 30px;
          position: relative;
          @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
            padding: 0 10px;
          }
          & > a {
            border: 0;
            text-transform: capitalize;
            position: relative;
            margin-right: 0;
            line-height: 18px;
            margin-bottom: 6px;
            padding-bottom: 5px;
            font-weight: 400;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 0;
            display: inline-block;
            color: #000;
            font-size: 16px;
            padding-left: 0;
            &:hover,
            &:hover,
            &.active a,
            &.active button {
              color: #2166f3;
            }
          }
          .btn_wrap {
            a {
              font-size: 16px;
              padding: 10px;
              svg {
                display: none;
              }
            }
          }
        }
      }
      &:hover > .dropdownMenu,
      &:hover > .mega__menu {
        display: block;
        visibility: visible;
        opacity: 1;
        transform: translateY(33px);
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          transform: translateY(0px);
        }
      }
      .dropdownMenu.show,
      .mega__menu.show {
        display: block;
        visibility: visible;
        opacity: 1;
        transform: translateY(33px);
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          transform: translateY(0px);
        }
      }
    }
    .mega__menu__wrapper {
      position: static;
      .mega__menu {
        left: 0;
        right: 0;
        min-width: 100vw;
        padding: 50px 0;
        z-index: 0;
        @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
          padding: 20px 0;
          min-width: 100%;
        }
        .container {
          max-width: 1700px !important;
          margin: 0 auto;
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
            display: block;
            padding: 0;
          }
          .menu__wrapper {
            flex: 0 0 calc(20% - 0px);
            padding: 0 10px;
            width: 100%;
            h5 {
              font-weight: 600;
              color: #000;
              text-transform: uppercase;
              font-size: 18px;
              @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
                margin: 0 0 10px;
              }
            }
            .dropdownMenu2 {
              @media (max-width: ${({ theme }) => theme.media.ipad1199}) {
                display: block;
                padding: 0;
                margin-bottom: 30px;
              }
              .sub__sub__menu__items {
                padding: 0;
              }
            }
          }
        }
      }
    }
  }
  .btn_wrap {
    a {
      min-width: 250px;
      min-height: 52px;
      font-size: 18px;
      padding: 0 10px;
      @media (max-width: ${({ theme }) => theme.media.deskstop1600}) {
        min-width: 210px;
      }
      @media (max-width: ${({ theme }) => theme.media.deskstop1440}) {
        font-size: 16px;
        min-width: 180px;
      }
    }
  }
`;
