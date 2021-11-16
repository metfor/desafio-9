import styled from 'styled-components'
export const ProjectsContainer = styled.div`
    margin-top:127px;
    display: grid;
    
    grid-template-columns: 1200px ;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: center;
`
export const Title = styled.text`
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 700;
    line-height:41.66px;
    text-align: center;
    color: #f9f9f9;
`
export const BoxProjects = styled.div`
  margin-top:30px;
  display:grid;
  grid-template-columns: 360px 360px 360px;
  grid-column-gap: 45px;
  grid-row-gap: 27px;
`
export const BoxProject = styled.div`
    
    width: 350px;
    height: 240px;
    background-color:#212121;

`
export const ImgProject = styled.div`
    margin-top:20px;
    margin-left: 25px;
    width: 300px;
    height: 130px;
    background-color: #171717;
`
export const TitleProject = styled.h1`
    font-family: DM Sans;
    font-size:18px;
    line-height:23.44px;
    text-align:center;
    font-weight:500;
    margin-left:-40%;
    color: #ffffff;
       `

export const SubProject = styled.text`
    font-family: DM Sans;
    font-size: 14px;
    font-weight: 400;
    line-height:18.23px;
    text-align:center;
    color:#828282;
    margin-left: 35px;

`
