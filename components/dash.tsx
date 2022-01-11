import styled from "styled-components";

interface ISectionDash {
  text: string;
}

export const SectionDash = ({ text }: ISectionDash) => {
  return (
    <DashContainer>
      <YellowDash />
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

const YellowDash = styled(Dash)`
  margin-left: 0;
  margin-right: 5px;
  width: 57px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const DashText = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DashContainer = styled.div`
  display: flex;
  align-items: center;
`;
