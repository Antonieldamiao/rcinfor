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
    <BoxCard onMouseOver={()=>{setBtnVisibility(true)}} onMouseOut={()=>{setBtnVisibility(false)}}>
          <ContainerImg>
            <ImgProduct  src="https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/b/x/bx8071512900k2.jpg" />
          </ContainerImg>
          <ContainerText>
          PROCESSADOR INTEL CORE I5-12600K, 10-CORE, 16-THREADS,
           3.7GHZ (4.9GHZ TURBO), CACHE 20MB, LGA1700, BX8071512600K"
           </ContainerText>
           <TextPrice>à vista R$2.349,07</TextPrice> 
        <ButtonAddCart >Comprar</ButtonAddCart>

    </BoxCard>
  );
}

export default CardBook;
