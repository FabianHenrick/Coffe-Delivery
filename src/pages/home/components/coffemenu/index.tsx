import styled from "styled-components";
import { CoffeCard } from "./components/coffetype";
import { CoffeList, MenuDiv } from "./styled";
export function CoffeMenu() {
  return (
    <MenuDiv>
      <h1>Nossos cafés</h1>
      <CoffeList>
        <CoffeCard
          coffeIcon={"../../../../assets/coffeCardImgs/traditional.png"}
          coffeName={"Expresso Tradicional"}
          coffeDesc={"O tradicional café feito com água quente e grãos moídos"}
        />

        <CoffeCard
          coffeName={"Expresso Tradicional"}
          coffeDesc={"O tradicional café feito com água quente e grãos moídos"}
        />
      </CoffeList>
    </MenuDiv>
  );
}
