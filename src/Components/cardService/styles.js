import Styled from "styled-components";

export const BoxCard = Styled.div`
 
 color: white;
  border-radius: .2rem;
  flex-direction: column;
  align-items: center;
  width: 100% !important;
  font-family: "Geometric 415", sans-serif;
  padding: 1rem;
  max-height: 100%;
  align-items: justify;
  margin: 0rem;
  text-align:center;
  

  

 

`;

export const BoxButton = Styled.div`
 
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  text-align: center;
  min-height: 5.3rem;
`;



export const ContainerImg = Styled.div`

  text-align: center;
  width: 100%;
  
  padding: 0;
  :hover{
    border-radius: .2rem;
    transform: scale(1.2);
    transition-duration: 0.3s;
    
   
  }
  
 
 
  
`;

export const ImgProduct = Styled.img`

  
  width: 4rem;
  align-content: center;
  justify-content: center;
  
`;

export const TextPrice = Styled.p`
  color: green!important;
  text-align: left !important;
  margin: 5px;
  font-size: 20px;
  
`;

export const TitleCard = Styled.div`
   
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1.2vmax;
    color: #ffffff!important;
    text-transform: uppercase;
    text-align: justify !important;
    word-wrap: break-word;
    white-space: nowrap;
    padding: 0;
    margin: 40;
    justify-content: center;
`;

export const ContainerText = Styled.div`
  margin: 5px;
    width: 100%;
    flex-direction:column;
    font-size: 20px;

`;
