import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import CoffeBanner from "../../assets/coffe-banner.svg";
import {
  BannerContainer,
  BenefitsDivision,
  TittlesDiv,
  BannerDivision,
  BannerSubTittle,
  BannerTittle,
  BenefitsText,
  Benefits,
  CoffeImg,
} from "./styles";

export function Home() {
  return (
    <div>
      <BannerContainer>
        <BannerDivision>
          <TittlesDiv>
            <BannerTittle>
              Encontre o café perfeito para qualquer hora do seu dia
            </BannerTittle>
            <BannerSubTittle>
              Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
              hora
            </BannerSubTittle>
          </TittlesDiv>
          <BenefitsDivision>
            <Benefits>
              <ShoppingCart size={32} />
              <BenefitsText>Compra simples e segura</BenefitsText>
            </Benefits>
            <Benefits>
              <Package size={32} />
              <BenefitsText>Embalagem mantém o café intacto</BenefitsText>
            </Benefits>
            <Benefits>
              <Timer size={32} />
              <BenefitsText>Entrega rápida e rastreada</BenefitsText>
            </Benefits>
            <Benefits>
              <Coffee size={32} />
              <BenefitsText>O café chega fresquinho até você</BenefitsText>
            </Benefits>
          </BenefitsDivision>
        </BannerDivision>
        <CoffeImg src={CoffeBanner} alt="" />
      </BannerContainer>
    </div>
  );
}
