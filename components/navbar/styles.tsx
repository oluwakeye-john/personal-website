import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  z-index: 5;
  padding: 3rem 11.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 14px;

  ${({ theme }) => theme.media.xxl} {
    padding: 3rem 8rem;
  }

  ${({ theme }) => theme.media.xl} {
    padding: 3rem 7rem;
  }

  ${({ theme }) => theme.media.lg} {
    padding: 1.5rem 4rem;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 1.5rem 1.5rem;
    flex-direction: column;
  }
`;

const HideOnMobile = css`
  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;

  ${HideOnMobile}
`;

export const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  ${({ theme }) => theme.media.lg} {
    width: 100%;
    order: 1;
    justify-content: space-between;
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;

  ${HideOnMobile}
`;

export const NavbarLeftItem = styled.div`
  margin-right: 5rem;
  cursor: pointer;
`;

export const NavbarCenterItem = styled.h2<{ dark?: boolean }>`
  font-weight: 900;
  line-height: 32px;
  font-size: ${({ theme }) => theme.fontSizes.h};
  font-family: ${({ theme }) => theme.fontFamilies.heading};
  letter-spacing: -0.1em;
  margin: 0;
  cursor: pointer;
  transition: 1.5s color;

  ${({ theme }) => theme.media.lg} {
    color: ${({ dark }) => (dark ? "#fff" : "#000")};
  }
`;

export const NavbarRightItem = styled.div`
  margin-left: 2.5rem;
  cursor: pointer;
`;

export const NavbarToggle = styled.div`
  display: none;
  ${({ theme }) => theme.media.lg} {
    display: block;
    cursor: pointer;
  }
`;
