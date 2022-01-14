import { css } from "styled-components";

export const SectionHeading = css`
  color: #fff;
  font-weight: 300;
  font-size: 80px;
  line-height: 96.5%;
  margin: 0;

  font-family: ${({ theme }) => theme.fontFamilies.alt};

  ${({ theme }) => theme.media.lg} {
    font-size: 60px;
  }
`;
