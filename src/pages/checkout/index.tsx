import { CheckoutContainer, CompleteOrder } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <p>Complete seu pedido</p>
      <CompleteOrder>
        <form>
          <p>Endereço de entrega</p>
          <p>infome o endereço onde deseja recereber o seu pedido</p>
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" />
        </form>
        <div>
          <p>Pagamento</p>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </CompleteOrder>
      <div>
        <p>Cafés selecionados</p>
        <div>
          <div>
            <p>Total de itens</p>
            <p>Entrega</p>
            <p>Total</p>
          </div>
          <button> Confirmar Pedido</button>
        </div>
      </div>
    </CheckoutContainer>
  );
}
