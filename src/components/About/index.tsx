import { AboutContainer, BoxButtons, BoxImage, ButtonContact, ButtonDownload, HelloBox, InitBox, MyImage, Text1, Title } from './styled'

export function About () {
  return (
        <AboutContainer>
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
        </AboutContainer>
  )
}
