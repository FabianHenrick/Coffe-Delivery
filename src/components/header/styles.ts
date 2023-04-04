import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;

  position: absolute;
  height: 104px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${(props) => props.theme["background-base"]};
`;
