import { css } from "styled-components";

export const Container1 = css`
  padding: 3rem 11.3rem;

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

1;

export const Container2 = css`
  padding: 0.5rem 6.2rem;

  ${({ theme }) => theme.media.lg} {
    padding: 0 1.5rem;
  }
`;

export const Container3 = css`
  padding: 1rem 6.9rem;

  ${({ theme }) => theme.media.lg} {
    padding: 1rem 0;
  }
`;

export const Container4 = css`
  padding: 1rem 1.8rem;

  ${({ theme }) => theme.media.lg} {
    padding: 1rem 0;
  }
`;
