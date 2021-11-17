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
    border:none;
    color:#171717;
    cursor: pointer;
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
    cursor: pointer;
    
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
/* part2 */

export const BoxAbout = styled.div`
    margin-top: 169px;
    display:grid;
    justify-content: center;
    grid-row-gap: 28px;
    grid-template-rows: 38px 250px;

`
export const AboutText = styled.text`
    
    font-family: DM Sans;
    font-size:32px;
    font-weight:700;
    line-height:41.66px;
    text-align:center;
    color:#f9f9f9;

`
export const Text2 = styled.text`
    font-family: DM Sans;
    font-size:18px;
    font-weight:400;
    text-align:center;
    line-height:32px;
    color:#828282;
`
export const BoxCircle = styled.div`
    background-color:#212121;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`
export const BoxContacts = styled.div`
    display: flex;
    justify-content: space-between;
    
`
export const BoxContact = styled.div`
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        
`
export const TextContact = styled.text`
        margin-top: 10px;
        font-family: DM Sans;
        font-size:18px;
        font-weight:700;
        line-height:23.44px;
        color:#f9f9f9;
        text-align:center;
        
`
export const TextContact2 = styled.text`
margin-top:10px;
    font-family: DM Sans;
    font-size: 16px;
    font-weight:400;
    line-height:20.83px;
    color:#828282;
    text-align:center;
  
`
