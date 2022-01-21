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

export const BagItem = Styled.div`
  display: grid;
  grid-template-columns: 20% 50% 10% 8% 12%;
  align-items: center;
  position: relative;
  width: 90%;
  top: 1rem;
  margin: 4rem 0 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
`;

export const ItemImages = Styled.img`
  max-width: 200px;
`;

export const ItemLabel = Styled.label`
  font-size: 1.3rem;
`;

export const ItemQnt = Styled.input`
  font-size: 1.3rem;
  max-width: 2rem !important;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  border: none;
  background: none;
  outline: none;
  padding: .5rem .5rem;
  margin: 0rem 1rem;
  text-align: right;
  :focus{
    background-color: #fff;
    border: 1px solid #aaa;
  }
  ::-webkit-inner-spin-button{
    opacity:.5;
    cursor: pointer;
    margin-left: .3rem;
    margin-right: -.3rem;
  }
`;

export const ExcludeBtn = Styled.button`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #464646;
  margin: 1rem 0;
  padding: .8rem 1rem;
  background-color: #ffd900;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10rem;
  font-weight: 600;
  :hover{
    background-color: #e0bf00;
  }
  :active{
      background-color: #e0bf00;
      transform: translateY(4px);
  }
`;

export const DoneBuy = Styled.button`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #efefef;
  margin: 1rem 4rem 5rem;
  padding: .8rem 4rem;
  background-color: #049002;
  border: none;
  outline: none;
  border-radius: 10rem;
  font-weight: 600;
  align-self: flex-end;
  :hover{
    background-color: #216823;
  }
  :active{
    background-color: #216823;
    transform: translateY(4px);
  }
`;
export const Item = Styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 90%;
  margin: 2rem 0;
`;
export const Label = Styled.label`
  font-size: 1.3rem;
  margin: 0 1rem;
`;