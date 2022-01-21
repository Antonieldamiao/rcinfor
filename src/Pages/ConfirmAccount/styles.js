import Styled from "styled-components";

export const Container = Styled.div`
font-family: "Geometric 415", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  min-height: ${(props) => 100 * props.theme.viewportHeightPercent}px;
  overflow-x: hidden;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;

export const HeaderContent = Styled.div`
  background-color: #161616;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;

  font-family: "Geometric 415", sans-serif;
  align-items: center;
  
 
`;
export const SubHeaderContent = Styled.div`
  background-color: #161616;
  display: flex;
  border-radius:  0px 0px 15px 15px;
  padding:0px 30px 0px 30px;

`;
export const SubContainer = Styled.div`
margin: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;
export const TextHeader = Styled.p`
margin: 0px;
  color: white;
  font-size: 20px;
  text-align: center;
 
`;
export const Input = Styled.input`
width: 20px;
height: 20px;
border-radius:  5px 5px 5px 5px;
font-family: "Geometric 415", sans-serif;
font-size:25px;
padding: 10px;
margin: 10px;

`;
export const Button = Styled.button`
align-self: center;
font-family: "Geometric 415", sans-serif;
background: #228B22;
color: white;
width: 150px;
height: 32px;
border-radius: 10px 0px 10px 0px;
border: 1px;
margin: 10px;
font-size: 16px;
`;

export const FormContent = Styled.div`
  display: flex;
 align-content: center;
  justify-content: space-between;
  padding: 20px 20px 20px;
  
`;
export const LabelInput = Styled.label`
 margin: 10px;
  font-size: 24px;
  text-align: left;
 
`;
export const ContainerPicker = Styled.div`
 padding: 10px;

`;
export const FooterContent = Styled.div`
  background-color: #161616;
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 11rem;
  flex-direction: column;
  font-family: "Geometric 415", sans-serif;
  align-items: center;
  align-content: end

  
 
`;