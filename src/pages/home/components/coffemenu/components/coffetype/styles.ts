import styled from "styled-components";

export const CardDivision = styled.div`
  width: 256px;
  height: 310px;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
`;

export const CoffeAmountDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 29px;

  height: 38px;
`;
