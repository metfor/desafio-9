import {
  BoxImage,
  BoxService,
  BoxServices,
  Line,
  MyImage,
  ServicesContainer,
  SubServices,
  Title,
} from './styled';

export function Services() {
  return (
    <ServicesContainer id="services">
      <Title>Serviços</Title>
      <BoxServices>
        <BoxService>
          <BoxImage>
            <MyImage
              src="/../public/code.png"
              width="56"
              height="56"
              alt="code"
            />
          </BoxImage>
          <SubServices>
            Criação <br /> de sites
          </SubServices>
          <Line />
        </BoxService>
        <BoxService>
          <BoxImage>
            <MyImage
              src="/../public/figma.png"
              width="56"
              height="56"
              alt="code"
            />
          </BoxImage>
          <SubServices>
            UI
            <br /> Designer
          </SubServices>
          <Line />
        </BoxService>
        <BoxService>
          <BoxImage>
            <MyImage
              src="/../public/smartphone.png"
              width="56"
              height="56"
              alt="code"
            />
          </BoxImage>
          <SubServices>
            Sites <br />
            Responsivos
          </SubServices>
          <Line />
        </BoxService>
      </BoxServices>
    </ServicesContainer>
  );
}
