import styled from 'styled-components'
import image from 'next/image'
export const AboutContainer = styled.div`
    width: 80%;
    margin-left:10% ;
    margin-right:10% ;
    
    margin-top: 100px;
`
export const Title = styled.text`
    font-family: DM Sans;
    font-size:36px;
    font-weight:700;
    line-height:46.87px;
    color:#f9f9f9;
`
export const Text1 = styled.text`
    font-family: DM Sans;
    font-size:18px;
    font-weight:500;
    line-height:23.44px;
    color:#828282;

`
export const ButtonDownload = styled.button`
    width: 143px;
    height: 42px;
    background-color:#00df5e;
    font-family: DM Sans;
    font-weight: 500;
    font-size:14px;
    
    color:#171717;
`
export const ButtonContact = styled.button`
    width: 143px;
    height: 42px;
    background-color:#171717;
    font-family: DM Sans;
    font-weight: 500;
    font-size:14px;
  
    color:#f9f9f9;
    border: 1px solid #333333;
    box-sizing: border-box;
`
export const InitBox = styled.div`
    display:flex;
    justify-content: space-between;

`
export const HelloBox = styled.div`
    display:grid;
    
    grid-row-gap: 28px ;
`
export const BoxButtons = styled.div`
    display:flex;
    justify-content: space-between;
`
export const MyImage = styled(image)``

export const BoxImage = styled.div`

`
