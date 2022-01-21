import Styled from "styled-components";

export const HeaderContent = Styled.div`
  background-color: #161616;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: "Geometric 415", sans-serif;
  
 
`;
export const SubHeaderContent = Styled.div`
  background-color: #161616;
  display: flex;
  border-radius:  0px 0px 10px 10px;
  padding:0px 30px 0px 30px;

`;
export const TextHeader = Styled.p`
margin: 0px;
  color: white;
  font-size: 25px;
  text-align: center;
 
`;
export const Container = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 
`;
export const Input = Styled.input`
width: 500px;
height: 12px;
border-radius:  5px 0px 0px 5px;
border: none;
outline:none;
padding: 10px;

`;
export const Button = Styled.button`
background: #FF0;
width: 80px;
height: 32px;
border-radius: 0px 5px 5px 0px;
border-left: 1px;
border: none;


`;