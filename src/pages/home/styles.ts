import styled from "styled-components";

export const BannerContainer = styled.header`
  display: flex;
  width: 100vw;
  height: 544px;
  padding: 94px 160px;
  gap: 56px;
`;
export const BannerDivision = styled.div`
  display: grid;
  flex-direction: column;
`;
export const TittlesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 34vw;
  height: 192px;
  padding: 0px;
`;
export const BannerTittle = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-size: 48px;
  font-weight: 800;
  line-height: 130%;
  color: #272221;
`;

export const BannerSubTittle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: #403937;
  font-stretch: 100;
`;

export const BenefitsDivision = styled.div`
  display: grid;
  padding-top: 66px;
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
`;
