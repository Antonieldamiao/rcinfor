import {useState} from "react";

import {
  BoxCard,
  BoxButton,
  ButtonDetail,
  ButtonAddCart,
  ContainerImg,
  TitleCard,
  ImgProduct,
  BoxStar,
  TextPrice,
  ContainerText
} from "./styles";
import { FaStar } from "react-icons/fa";

function CardBook(props) {

  const [btnVisibility, setBtnVisibility] = useState(false);

  return (
    <BoxCard style={ {background: props.cor}} onMouseOver={()=>{setBtnVisibility(true)}} onMouseOut={()=>{setBtnVisibility(false)}}>
      <ContainerImg>
            <ImgProduct  src={props.img} />
          </ContainerImg>
          <ContainerText  style={ {color: props.corText}}>
         {props.text}
           </ContainerText>
           <ContainerText>
           <TextPrice>{props.title}</TextPrice> 
           <TextPrice> {props.title1}</TextPrice> 
           <TextPrice> {props.title2}</TextPrice> 
           <TextPrice> {props.title3}</TextPrice> 
           </ContainerText>

    </BoxCard>
  );
}

export default CardBook;
