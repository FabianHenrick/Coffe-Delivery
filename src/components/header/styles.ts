import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 160px;
  gap: 820px;
  height: 104px;
  left: 0px;
  right: 0px;
  top: 0px;
  background: ${(props) => props.theme["background-base"]};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme["purple-product"]};
`;

export const LocaleMap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 143px;
  height: 38px;

  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  display: flex;
  background: ${(props) => props.theme["purple-light"]};
`;

export const CartIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 4px;

  width: 38px;
  height: 38px;

  /* Brand/Yellow Light */
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  background: ${(props) => props.theme["yellow-light"]};
`;
export const LocaleAndCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const CoffeLogo = styled.img`
  flex-grow
  width: 84.95px;
  height: 40px;
`;
