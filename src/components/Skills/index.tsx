import {
  ImgBox,
  SkilBox,
  SkilImg,
  SkillsContainer,
  SkilsBox,
  Title,
} from './styled';

export function Skills() {
  return (
    <SkillsContainer id="skills">
      <Title>Minhas skills</Title>
      <SkilsBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil1.png"
              width="70"
              height="80"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil2.png"
              width="70"
              height="80"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil3.png"
              width="80"
              height="80"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil4.png"
              width="80"
              height="80"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil5.png"
              width="80"
              height="80"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
        <SkilBox>
          <ImgBox>
            <SkilImg
              src="/../public/skil6.png"
              width="80"
              height="40"
              alt="skil"
            />
          </ImgBox>
        </SkilBox>
      </SkilsBox>
    </SkillsContainer>
  );
}
