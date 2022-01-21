import Styled from "styled-components";
import img from "../../assets/img/bg.jpg";

export const Container = Styled.div`

 display: flex;
  flex-direction: column;
  background: #424242;
  background-attachment: fixed;
  background-size: 300% 300%;
  
  text-align: justify !important;
  min-height: ${(props) => 100 * props.theme.viewportHeightPercent}px;
  //overflow-x: hidden;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;

  @media only screen and (max-width: 600px) {
    
    min-height: 100%;
 
}
`;

export const CarouselSection = Styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  max-width: 100% !important;
  max-height: 30% !important;
`;

export const Image = Styled.img`
  width: auto;
  max-height: 400px !important;
  position: relative;
`;

export const HistoryImage = Styled.img`
  width: 100%;
  max-height: 100% !important;
  position: relative;
`;
export const CategorySection = Styled.div`
background: #f7e177;
  display: flex;
  position: relative;
  top: 0px;
  margin: 2rem 2rem;
  min-width: 100%;
  max-width: 100%;
  justify-content: center;
  border: 1px solid;
    border-color: #c2bd2f;
  border-radius: 100px 0px 0px 100px;
  :hover{
   
    transform: scale(1.0);
    transition-duration: 0.3s;
    
   
  }
`;

export const CategoryContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  border-radius: 50%;
  min-width: 150px;
  min-height: 150px;
  
  color: #fff;
  margin: .5rem 2rem ;

  :hover{
    border-radius: .2rem;
    transform: scale(1.2);
    transition-duration: 0.3s;
    
   
  }
`;
export const CategoryImg = Styled.img`

  
  border-radius: 50%;
  width: 150px;
  height: 150px;

`;

export const CategoryLabel = Styled.label`
position: absolute;
  font-size: 2rem;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  
`;

export const PartnerSection = Styled.div`
  display: flex;
  position: relative;
  top: 0px;
  margin: 2rem 2rem;
  width: 80%;
  justify-content: center;
  margin: 10px;
`;
export const PartnerContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  min-width: 170px;
  max-height: 220px;
  background-color: #1d1d1d;
  color: #fff;
  margin: .5rem 1.2rem ;
  @media only screen and (max-width: 400px) {

}
`;
export const HistoryContainer = Styled.div`
  display: flex;
  flex-direction: column;
//  background: #c2bd2f;
  position: relative;
  top: 0px;
  

`;
export const PartnerImg = Styled.img`
 
  max-width: 170px;
  max-height: 220px;

`;
export const TitlePartner = Styled.label`
color:#c2bd2f;
text-align: left;
font-size: 2rem;
`;
export const ContentTitlePartner = Styled.div`
display: flex;
width: 93%;
margin: 4rem 2rem 0;
`;
export const BestSellerSection = Styled.div`
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 2fr));
    grid-gap: 50px;
    word-wrap: break-word;
    min-height: 25vh;
    position: relative;
    left: 0;
    justify-self: center !important;
    justify-content: space-evenly !important;
    align-self: center;
    min-width: 80%;
    max-width: 90%;

    @media only screen and (max-width: 400px) {

      grid-template-columns: 0.8fr;
     
     width: 90% !important;
     height: 100% !important;
     overflow-y: scroll;
      
  }
   

`;
export const ServiceSection = Styled.div`
background: #000000;
    display: flex;
    width: 100%;
    margin: 2rem 2rem 2rem;
    height: 15rem;
    position: relative;
    left: 0;
    justify-self: center !important;
    justify-content: space-evenly !important;
    align-self: center;
    
    

`;
export const ContainerBlock = Styled.div`
    
    width: 50%;
    border: 1px solid;
    border-left: 0px;
    border-color: #c2bd2f;
    height: 30rem;
    align-self: flex-end;
    justify-content: center !important;

`;
export const Content = Styled.div`
    display: flex;
    align-content: space-evenly;
    width: 100%;
    
    #ffce01
#f7e177
#0474b3
#02784a
#252326


`;
export const ContainerBlack = Styled.div`
  background: #252326;
    font-size: 1.5rem;
    max-width: 50%;
    color: #ffffff;
    height: 25rem;
    padding: 40px;
    justify-self: center !important;
   border: 1px  solid;
   border-right: 0px;
    border-color: #c2bd2f;
    border-radius: 50px 0px 0px 50px;
    

`;
