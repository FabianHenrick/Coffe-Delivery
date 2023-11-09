import styled from "styled-components";

export const BannerContainer = styled.header`
  display: flex;
  height: 544px;
  padding: 160px;
`;
export const BannerDivision = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TittlesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 16px;
  width: auto;
  height: 192px;
`;
export const BannerTittle = styled.h1`
  margin-top: 80px;
  width: 650px;
  height: 124px;

  /* Title/Title XL */

  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  /* or 62px */

  /* Base/Title */

  color: #272221;

  /* Inside auto layout */

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const BannerSubTittle = styled.p`
  width: 588px;
  height: 52px;

  /* Text/Regular L */

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */

  /* Base/Subtitle */
  margin-top: -20px;
  color: #403937;
  font-stretch: 100;

  /* Inside auto layout */

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

export const BenefitsDivision = styled.div`
  display: grid;
  padding-top: 25%;
  gap: 16px;
  grid-template-columns: 235px 200px;
  width: 567px;
  height: 84px;
`;
export const Benefits = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 12px;
  width: 294px;
  height: 32px;
`;

export const BenefitsText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #574f4d;
  flex: none;
  order: 1;
  flex-grow: 1;
`;

export const BenefitsDiv = styled.div`
  display: flex;
`;

export const CoffeImg = styled.img`
  width: 476px;
  height: 360px;
  margin: 80px 30px 0px;
`;
