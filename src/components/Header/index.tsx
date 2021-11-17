import { BoxLinks, HeaderContainer, LinkNext, Logo, TextLink } from './styled';

export function Header() {
  return (
    <HeaderContainer>
      <Logo>Portfólio</Logo>
      <BoxLinks>
        <TextLink>
          <LinkNext href="#sobre">Sobre mim</LinkNext>
        </TextLink>
        <TextLink>
          <LinkNext href="#Projects">Projetos</LinkNext>
        </TextLink>
        <TextLink>
          <LinkNext href="#services">Serviços</LinkNext>
        </TextLink>
        <TextLink>
          <LinkNext href="#skills">Minhas skills</LinkNext>
        </TextLink>
      </BoxLinks>
    </HeaderContainer>
  );
}
