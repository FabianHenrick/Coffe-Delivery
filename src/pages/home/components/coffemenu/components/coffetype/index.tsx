import { ShoppingCartSimple } from "phosphor-react";
import { CardDivision, CoffeAmountDiv } from "./styles";
export function CoffeCard(props: any) {
  return (
    <CardDivision>
      <img src="../../../../assets/coffeCardImgs/traditional.png" alt=""></img>
      <p>Tradicional</p>
      <h3>{props.coffeName}</h3>
      <p>{props.coffeDesc}</p>
      <CoffeAmountDiv>
        <div>
          <p>R$9,90</p>
        </div>
        <button>
          <ShoppingCartSimple />
        </button>
      </CoffeAmountDiv>
    </CardDivision>
  );
}
