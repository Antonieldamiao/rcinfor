import Styled from "styled-components";

export const BoxCard = Styled.div`
  display: grid;
  padding: 10px;
  flex-direction: column;
  grid-template-rows: 1fr 0.5fr;
  grid-template-columns: minmax(14rem, 2fr);
  object-fit: contain !important;
 // background: #ffffff;
  #c2bd2f
  border-radius: 5px;
  grid-gap: 5px;
  
  :hover{
    border-radius: 20px;

    opacity: 1;
    transition-duration: 0.3s;
   // background-color: #000000
   
  }
  
`;

export const BoxButton = Styled.div`

  
  align-items: center;
  overflow: hidden;
  text-align: center;
 
`;

export const BoxStar = Styled.div`
  display: flex;
  justify-content: space-between !important;
  width: 100px;
  margin: 1rem 0 1rem;
  padding: 0;
`;


export const ButtonDetail = Styled.button`
  border: none;
  background: none;
  outline: none;
  background-color: #f0f0f0;
  padding: 0;
}

`;
export const ButtonAddCart = Styled.button`
  //display: ${(props)=> props.visible ? "flex" : "none"};
  text-align: center;
  justify-content:center;
  align-items: center;
  background-color: blue;
  width: 100%;
  margin-top: 10px;
  min-height: 40px;
  border: none;
  border-radius: .2rem;

  color: #ffffff;
  font-weight: 600;
  outline: none;
  :hover{
    background: #8e921a;
  }
  :active{
      background-color: #8e921a;
      transform: translateY(4px);
  }

  @media only screen and (max-width:400px){
    min-height: 50px;
    font-size: 1.6rem;
  }
`;
export const ContainerImg = Styled.div`
width: 100%;
justify-content:center;
display: flex;
opacity: 0.8;
justify-content:center;
align-self: center;

:hover{
  ;
    opacity: 1;
   
  }

`;

export const ImgProduct = Styled.img`
display: flex;
height: 100%;
width: 100%;
object-fit: contain;
  
  @media only screen and (max-width: 400px){
    height: 50% !important;
width: 100% !important;
  }
`;

export const TextPrice = Styled.label`
display: flex;
color: #00ff00;
@media only screen and (max-width: 400px){
  font-size:20px;
}
`;



export const ContainerText = Styled.div`

color: #ffffff;
`;
///
{/* 

  
`;

export const ImgProduct = Styled.img`

height: 50%;
width: 80%;
object-fit: contain;
  
`;

export const TextPrice = Styled.label`
display: flex;
color: #00ff00;
font-size: 40px;

`;



export const ContainerText = Styled.div`
    display: flex;
color: #ffffff;
font-size: 7vh;
    word-wrap: break-word;
    

`;
*/}
