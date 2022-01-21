import Styled from "styled-components";

export const Container = Styled.div`
  font-family: "Geometric 415", sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  min-height: ${(props) => 100 * props.theme.viewportHeightPercent}px;
  overflow-x: hidden;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
`;
export const BookContainer = Styled.div`
  font-family: "Geometric 415", sans-serif;
  display: grid;
  grid-template-columns: 30% 40% 30%;
  overflow-x: hidden;
  justify-content: center;
  position: relative;
  width: 95%;
  top: 0;
  left: 0;
  margin: 6rem 0rem 1rem;
`;
export const BookContent = Styled.div`
  font-family: "Geometric 415", sans-serif;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  justify-content: flex-start;
  position: relative;
  top: 0;
  left: 0;
`;

export const CardImage = Styled.div`
  padding: -1rem -5rem;
`;

export const Image = Styled.img`
  min-width: 120px;
  width: 30rem;
  margin: 0 -5rem;
`;

export const BookHeader = Styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 2rem 1rem 0;
  
`;

export const HeaderLabel = Styled.label`
  font-family: inherit;
  font-size: 2rem;
  color: #464646;
`;

export const StarBox = Styled.div`
  display: flex;
  align-items: center;
  margin-top: .2rem;
`;

export const Author = Styled.label`
  font-family: inherit;
  font-size: .8rem;
  color: #464646;
  margin-right: 2rem;
`;

export const Sinopse = Styled.label`
  font-family: inherit;
  font-size: 1.8rem;
  color: #464646;
  margin: 2rem 1rem 0;
`;

export const SinopseDescription = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  color: #464646;
  margin: 2rem 1rem 0;
`;

export const BookDescription = Styled.div`
  font-family: "Geometric 415", sans-serif;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: flex-start;
  position: relative;
  top: 0;
  left: 0;
  width:95%;
  text-align: justify;
  margin-top: 2rem;
`;

export const SellerBox = Styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: flex-start;
  position: relative;
  top: 0;
  left: 0;
  width: 90%;
`;

export const Price = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 2rem;
  color: #216823;
  margin: 2rem 1rem 0;
`;

export const Installment = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  color: #464646;
  margin: .8rem 1rem 0;
  
`;
export const MoreInstallment = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.2rem;
  color: #216823;
  margin: 0 1rem;
`;

export const SellerLabel = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #464646;
  margin: 0 1rem;
`;
export const Box = Styled.label`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #464646;
  margin: 1rem 0;
`;

export const Input = Styled.input`
  background: none;
  border: 1px solid #666666;
  outline: none;
  padding: .5rem .3rem;
  border-radius: .2rem;
`;

export const Bag = Styled.button`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #fff;
  margin: 1rem 0;
  background-color: #049002;
  width: 100%;
  padding: .8rem;
  border: none;
  outline: none;
  border-radius: 10px 0px 10px 0px;
  font-weight: 600;
  :hover{
    background-color: #216823;
  }
  :active{
      background-color: #216823;
      transform: translateY(4px);
  }
`;
export const Buy = Styled.button`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #464646;
  margin: 1rem 0;
  padding: .8rem;
  background-color: #ffd900;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px 0px 10px 0px;
  font-weight: 600;
  :hover{
    background-color: #e0bf00;
  }
  :active{
      background-color: #e0bf00;
      transform: translateY(4px);
  }
`;

export const Resembling = Styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  height: 22rem;
  :hover{
    overflow-x: auto;
    ::-webkit-scrollbar {
      height: .3rem;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 1rem;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const CardFicha = Styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  color: #464646;
  @media(max-width: 600px){
    margin-top: 0;
  }
`;

export const GridContent = Styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  background: none;
  padding: 1rem;
`;

export const GridItem = Styled.div`
  display:flex;
  font-family: 'Yanone Kaffeesatz', sans-serif !important;
  font-weight: 300;
  padding: 10px 20px;
  font-size: 1.25rem;
  flex-direction: column;
  border-right: 1px solid #424242;
  border-bottom: 1px solid #424242;
`;

export const Comment = Styled.div`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  background: none;
  padding: 1rem;
  align-content: center;
`;

export const CommentItem = Styled.div`
  display:flex;
  font-family: 'Yanone Kaffeesatz', sans-serif !important;
  justify-content: center;
  font-weight: 300;
  padding: 10px 20px;
  font-size: 1.25rem;
  border-bottom: 1px solid #424242;
  text-align: justify;
  margin-top: 2rem;
`;

export const UserItem = Styled.div`
  display:flex;
  font-family: 'Yanone Kaffeesatz', sans-serif !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  padding: 10px 20px;
  font-size: 1.25rem;
  border-bottom: 1px solid #424242;
  margin-top: 2rem;
`;

export const User = Styled.img`
  min-width: 60px;
  width: 6rem;
  margin: 0;
`;
export const LabelUser = Styled.label`  
  font-size: 1. 5rem;
  color: #464646;
  margin-top: .5rem;
`;

export const LabelComment = Styled.label`  
  font-size: 1.2rem;
  font-weight: 400px;
  color: #464646;
  margin-top: .5rem;
`;

export const CommetInput = Styled.textarea`
  font-family: 'Yanone Kaffeesatz', sans-serif !important;
  background: none;
  border: 1px solid #666666;
  outline: none;
  padding: 1rem 1rem;
  border-radius: .2rem;
  width: 90%;
  min-height: 7rem;
  height: auto;
  font-size: 1.2rem;
  font-weight: 300;
  align-self: center;
  :focus{
    background-color: #fff;
  }
`;

export const CommentButton = Styled.button`
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 1.3rem;
  color: #464646;
  margin: 1rem 0;
  padding: .5rem 3rem;
  background-color: #ffd900;
  width: max-content;
  border: none;
  outline: none;
 border-radius: 10px 0px 10px 0px;
  font-weight: 600;
  align-self: flex-end;
  margin-right: 3rem;
  :hover{
    background-color: #e0bf00;
  }
  :active{
      background-color: #e0bf00;
      transform: translateY(4px);
  }
`;