import Styled from "styled-components";

export const HeaderContent = Styled.div`
  background: linear-gradient(#c2bd2f 0%, #c2bd2f 5.48%, #424242 100%); ;
  //background-color: #c2bd2f;
  //opacity: 0.5;
  //color: #ffff00 !important;
  width: 100%;
  min-height: 70px;
  
  display: flex;
  //border: 1px solid;
  border-width: 0px 0px 1px 0px;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Geometric 415", sans-serif;
 margin-bottom: 20px;
  z-index: 10;

  @media only screen and (max-width: 600px) {
  
    justify-content: center;
    flex-direction: column;
 
}
 
`;
export const SubHeaderContent = Styled.div`
  background-color: #161616;
  display: flex;
  border-radius:  0px 0px 10px 10px;
  padding:0px 30px 0px 30px;

`;
export const TextHeader = Styled.p`
margin: 0px;


  text-align: center;
 
`;
export const TextLinkHeader = Styled.p`
  margin: 5px;
  color: #ffffff;
  font-size: 20px;
 // text-shadow: 1px 0 white,-1px 0  white;
  
  
 
`;
export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
 
  
`;
export const Containerleft = Styled.div`
  display: flex;
  padding: 10px;
 // background: red;
  justify-content: center !important;
  align-items: center;


`;
export const ContainerRight = Styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;

`;
export const Input = Styled.input`
width: 500px;
height: 12px;
border-radius:  5px 0px 0px 5px;
border: solid;
border-width: 1px; 
outline:none;
padding: 10px;

`;
export const Button = Styled.button`
background: #000000;
width: 80px;
height: 32px;
border-radius: 0px 5px 5px 0px;
border-left: 1px;
border: none;


`;