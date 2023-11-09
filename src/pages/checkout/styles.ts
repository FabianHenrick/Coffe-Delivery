import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin-top: 8rem;
  display: flex;
`;

export const CompleteOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  padding: 40px;
  display: flex;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
`;
