import {
  CartIcon,
  HeaderContainer,
  LocaleAndCart,
  LocaleMap,
  CoffeLogo,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { ShoppingCart, MapPin } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <CoffeLogo src={Logo} alt="" />
      </NavLink>
      <LocaleAndCart>
        <LocaleMap>
          <MapPin size={24} alt="" color={"#8047F8"} weight={"fill"} />
          <p>São Paulo,SP</p>
        </LocaleMap>
        <NavLink to="/checkout" title="Carrinho de Compras">
          <CartIcon>
            <ShoppingCart size={24} color={"#c47f17"} />
          </CartIcon>
        </NavLink>
      </LocaleAndCart>
    </HeaderContainer>
  );
}
