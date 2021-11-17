import styled from 'styled-components';
import link from 'next/link';
export const HeaderContainer = styled.div`
  width: 80%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
`;
export const Logo = styled.text`
  font-family: DM Sans;
  font-weight: 700;
  font-style: normal;
  font-size: 26px;
  line-height: 33.85px;
  color: #f9f9f9;
`;
export const LinkNext = styled(link)``;
export const BoxLinks = styled.div`
  display: grid;
  grid-template-columns: 130px 130px 130px 130px;
`;
export const TextLink = styled.text`
  text-decoration: none;
  font-size: 18px;
  font-family: DM Sans;
  font-weight: 400;
  line-height: 23.44;
  color: #f9f9f9;
`;
