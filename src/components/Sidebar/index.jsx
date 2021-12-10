import { Wrapper } from "./styles";
import logo from "../../assets/logo.png";

export function Sidebar(){
  return (
    <Wrapper>
      <div>
        <a><img src={logo} alt="logo" />
        Spotify
        </a>
      </div>
    </Wrapper>
  )
}