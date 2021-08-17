import { Logo, LogoWrapper, Title } from "./styled"
import logo from "../../assets/logo.svg";

export const Header = () => {
    return (
        <LogoWrapper>
          <Logo src={logo} alt="" />
          <Title>movies&nbsp;browser</Title>
        </LogoWrapper>
    )
};
