import styled from "styled-components";

export const ContentWrapper = styled.div<{ active?: boolean }>`
  width: ${({ active }) => (active ? "100%" : 0)};
  height: ${({ active }) => (active ? "100%" : 0)};
  overflow: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const ContentWrapperWithOpacity = styled(ContentWrapper)`
  transition: opacity 0.5s;
`;
