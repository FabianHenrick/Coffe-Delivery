import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="home">
          <img src={Logo} alt="" />
        </NavLink>
        <NavLink to="/checkout" title="Carrinho de Compras">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
