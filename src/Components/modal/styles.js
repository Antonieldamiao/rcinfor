
import styled from "styled-components";

export const ModalContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Conatiner = styled.div`
  max-width: 61%;
  background-color: rgb(80, 80, 80);
  position: fixed;
  border-radius: 10px;
  padding: 5vh 5vw 6vh 5vw;
  @media screen and (max-width: 670px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const InputEdit = styled.input`
  outline: none;
  border: 1px solid #a3a3a3;
  height: 28px;
  font-size: 1rem;
  color: #fff;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background: none;
  margin: 0 10px 0 10px;
  padding: 0 5px 0 5px;
  border-radius: 2px;
  transition: 500ms;
  :focus {
    border-color: #f7c316;
  }
`;

export const LabelEdit = styled.label`
  color: #fff;
  font-size: 1rem;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  font-size: 1rem;
  background-color: #f7c316;
  margin: 20px;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  color: #4d4d4d;
  transition: 500ms;
  :hover,
  :active {
    opacity: 0.8;
  }
`;