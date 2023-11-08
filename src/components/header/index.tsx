import { HeaderContainer } from "./styles";
import LogoCoffe from "srcassetsLogo.svg";
export function header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffe}></img>
    </HeaderContainer>
  );
}
