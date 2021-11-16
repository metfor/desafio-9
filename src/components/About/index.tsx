import { AboutContainer, AboutText, BoxAbout, BoxButtons, BoxCircle, BoxContact, BoxContacts, BoxImage, ButtonContact, ButtonDownload, HelloBox, InitBox, MyImage, Text1, Text2, TextContact, TextContact2, Title } from './styled'

export function About () {
  return (
        <AboutContainer id="sobre">
            <InitBox>
                <HelloBox>
                    <Title>
                        Olá, eu sou o<br/>Iuri Silva :)
                    </Title>
                    <Text1>
                    Desenvolvedor Front-End & UI Designer
                    </Text1>
                    <BoxButtons>
                       <ButtonDownload>Download CV</ButtonDownload>
                       <ButtonContact>Entre em contato</ButtonContact>
                    </BoxButtons>
                </HelloBox>
                <BoxImage>
                <MyImage
                    src="/../public/image1.png"
                    width="300"
                    height="254.47"
                    alt="man"
                /></BoxImage>
            </InitBox>
            <BoxAbout>
                <AboutText>Sobre mim</AboutText>
                <Text2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure <br/>dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident</Text2>
                <BoxContacts>
                    <BoxContact>
                        <BoxCircle>
                            <MyImage
                                src="/../public/smile.png"
                                width="32"
                                height="32"
                                alt="smile"
                            />
                        </BoxCircle>
                        <TextContact>Meu Nome</TextContact>
                        <TextContact2>Iuri Silva</TextContact2>
                    </BoxContact>
                    <BoxContact>
                        <BoxCircle>
                            <MyImage
                                src="/../public/mail.png"
                                width="32"
                                height="32"
                                alt="mail"
                            />
                        </BoxCircle>
                        <TextContact>E-mail</TextContact>
                        <TextContact2>iuricold99@gmail.com</TextContact2>
                    </BoxContact>
                    <BoxContact>
                        <BoxCircle>
                            <MyImage
                                src="/../public/instagram.png"
                                width="32"
                                height="32"
                                alt="instagram"
                            />
                        </BoxCircle>
                        <TextContact>Instagram</TextContact>
                        <TextContact2>@iuricode</TextContact2>
                    </BoxContact>
                    <BoxContact>
                        <BoxCircle>
                            <MyImage
                                src="/../public/phone.png"
                                width="32"
                                height="32"
                                alt="phone"
                            />
                        </BoxCircle>
                        <TextContact>Telefone</TextContact>
                        <TextContact2>(14) 9999-9999</TextContact2>
                    </BoxContact>
                </BoxContacts>
            </BoxAbout>
        </AboutContainer>
  )
}
