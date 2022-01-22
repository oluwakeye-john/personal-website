import { css } from "styled-components";

export const stripeButton = css`
  background-color: transparent;
  border: none;
  color: inherit;
  padding: 0;
  font-weight: inherit;
  font-family: ${({ theme }) => theme.fontFamilies.normal};
`;
