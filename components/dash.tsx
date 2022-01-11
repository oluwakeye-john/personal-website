import styled from "styled-components";

interface ISectionDash {
  text: string;
  rightDash?: boolean;
}

export const SectionDash = ({ text, rightDash }: ISectionDash) => {
  return (
    <DashContainer right={rightDash}>
      <YellowDash right={rightDash} />
      <DashText>{text}</DashText>
    </DashContainer>
  );
};

export const Dash = styled.div`
  height: 2px;
  width: 40px;
  background-color: #000;
  margin-left: 10px;
`;

const YellowDash = styled(Dash)<{ right?: boolean }>`
  margin-left: ${({ right }) => (right ? "5px" : 0)};
  margin-right: ${({ right }) => (right ? 0 : "5px")};
  width: 57px;
  order: ${({ right }) => (right ? 3 : 1)};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const DashText = styled.span`
  font-size: 14px;
  font-weight: 500;
  order: 2;
`;

const DashContainer = styled.div<{ right?: boolean }>`
  display: flex;
  align-items: center;
`;
