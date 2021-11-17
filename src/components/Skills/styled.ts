import styled from 'styled-components';
import image from 'next/image';
export const SkillsContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  display: grid;
  grid-template-columns: 1200px;
`;
export const Title = styled.text`
  font-family: DM Sans;
  font-weight: 700;
  font-size: 32px;
  line-height: 41.66px;
  text-align: center;
  color: #f9f9f9;
`;
export const SkilsBox = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
`;
export const SkilBox = styled.div`
  width: 150px;
  height: 150px;
  background: #212121;
  border: 1px solid #333333;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SkilImg = styled(image)``;
export const ImgBox = styled.div``;
