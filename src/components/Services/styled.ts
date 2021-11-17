import styled from 'styled-components';
import image from 'next/image';
export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 1200px;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
  margin-top: -490px;
`;
export const Title = styled.text`
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 41.66;
  text-align: center;
  color: #f9f9f9;
`;
export const BoxServices = styled.div`
  margin-top: -590px;
  display: grid;
  grid-template-columns: 360px 360px 360px;
  grid-column-gap: 45px;
`;
export const BoxService = styled.div`
  cursor: pointer;
  width: 350px;
  height: 240px;
  background-color: #212121;
  border: 1px solid #333333;
  box-sizing: border-box;
  display: block;
  padding: 30px;
`;
export const Line = styled.div`
  height: 5px;
  width: 350px;
  background-color: #00df5e;
  margin-left: -30px;
  margin-top: 85px;
`;
export const MyImage = styled(image)``;
export const BoxImage = styled.div``;
export const SubServices = styled.text`
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 500;
  line-height: 28.66px;
  color: #828282;
`;
