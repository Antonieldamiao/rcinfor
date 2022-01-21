import { useState } from "react";
import {
  Container,
  CarouselSection,
  Image,
  CategorySection,
  CategoryContainer,
  CategoryLabel,
  PartnerSection,
  PartnerContainer,
  ServiceSection,
  TitlePartner,
  ContentTitlePartner,
  BestSellerSection,
  PartnerImg,
  CategoryImg,
  ContainerBlock,
  ContainerBlack,
  HistoryContainer,
  HistoryImage,
  Content,
} from "./styles";
import Header from "../../Components/header";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../../Components/footer";
import CardBook from "../../Components/cardBook";
import CardService from "../../Components/cardService"
import Modal from "../../Components/modal";
import im from "../../assets/img/loja.png"
import im1 from "../../assets/img/softcom.png"
import im2 from "../../assets/img/intelbras.png"
import im3 from "../../assets/img/martins.png"
import im4 from "../../assets/img/cpu.jpeg"
import im5 from "../../assets/img/acess.jpeg"
import im6 from "../../assets/img/proc.jpeg"
import im7 from "../../assets/img/emp.jpg"
import im8 from "../../assets/img/cerca.jpg"
import im9 from "../../assets/img/banner2.jpg"
import im10 from "../../assets/img/banner1.jpg"
import img from "../../assets/ico/impressoraY.png"
import img1 from "../../assets/ico/computador.png"
import img2 from "../../assets/ico/camera-de-seguranca.png"
import pane from "../../assets/img/loja.png"
import pane1 from "../../assets/img/lgT.png"
import bg from  '../../assets/img/bg.jpg'
function Home() {
  const carouselWidth = window.innerWidth - window.innerWidth / 3.5;

  const [state, setState] = useState(false);
  const [user, setUser] = useState({
    name: "André",
    email: "andre@email.com",
    password: "12345678",
    cpf: "123.456.789-10",
    gender: "Male",
    birthday: "2000-02-24",
  });
  const [modalState, setModalState] = useState({ property: " ", handle: null });

  function showModal(property) {
    setModalState({ property, handle: setUser });
    setState(true);
  }

  function hideModal() {
    setState(false);
  }


  return (
  
    <Container>
      <Header />
      <Modal
        property={modalState.property}
        value={user[modalState.property]}
        handle={modalState.handle}
        show={state}
        handleClose={hideModal}
      />
  
      <CarouselSection>
        <OwlCarousel
          className="owl-theme"
            width={carouselWidth}
          items={1}
          loop
          autoplay
          autoplaySpeed={1000}
          autoplayTimeout={5000}
        >
          <Image style={{ width: '100%' }} src={im9} />
          <Image style={{ width: '100%' }} src={im10} />
        </OwlCarousel>
      </CarouselSection>
 
      <ContentTitlePartner>
        <TitlePartner>Novidades</TitlePartner>
      </ContentTitlePartner>
      <BestSellerSection>
        <CardBook Description=""/>
        <CardBook Description=""/>
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />

      </BestSellerSection>
{/*     
      <ContentTitlePartner>
        <TitlePartner>Mais Vendidos</TitlePartner>
      </ContentTitlePartner>
      <BestSellerSection>
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />

      </BestSellerSection>
      
      <ContentTitlePartner>
        <TitlePartner>Ofertas</TitlePartner>
      </ContentTitlePartner>
      <BestSellerSection>
        <CardBook />
        <CardBook />
        <CardBook />
        <CardBook />

      </BestSellerSection>
   
    
      <ContentTitlePartner>
        <TitlePartner>Categoria</TitlePartner>
      </ContentTitlePartner>
      <CategorySection>

        <CategoryContainer>
          <CategoryImg src={im6} />
          <CategoryLabel>Processadores</CategoryLabel>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryImg src={im5} />
          <CategoryLabel>Acessórios</CategoryLabel>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryImg src={im4} />
          <CategoryLabel>Computadores</CategoryLabel>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryImg src={im7} />
          <CategoryLabel>Impressoras</CategoryLabel>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryImg src={im8} />
          <CategoryLabel>Segurança</CategoryLabel>
        </CategoryContainer>
      </CategorySection>

      <ContentTitlePartner>
        <TitlePartner>Serviços</TitlePartner>
      </ContentTitlePartner>
      <ServiceSection>

        <CardService
          img={img1}
          text="COMPUTADORES"
          cor="#f7e177"
          corText="#000000"
          title="✓ Montagem"
          title1="✓ Instalação"
          title2="✓ Manutenção" />
        <CardService
          img={img}
          text="IMPRESSORAS"
          corText="#f7e177"
          title="✓ Instalação"
          title1="✓ Manutenção"
          title2="✓ Multimarcas" />
        <CardService
          img={img2}
          cor="#f7e177"
          corText="#000000"
          text="SEGURANÇA ELETRÔNICA"
          title="✓ Instalação de Câmeras"
          title1="✓ Instalação de Cerca Eletrica"
          title2="✓ Instalação de Sensores"
          title3="✓ Manutenção" />
      </ServiceSection>

      <ContentTitlePartner>
      <TitlePartner>Quem somos</TitlePartner>
      </ContentTitlePartner>
    
      <HistoryContainer>
        <Content>
          
          <ContainerBlack>
            
          Nossa Loja foi criada 2001, trazendo o melhor do suporte, venda e tecnologia 
          para o vale do Piancó. Somos uma empresa que levamos a sério a satisfação do cliente, por isso nos empenhamos a dá o nosso melhor no dia à dia e sempre nos inovando.  
          Nossa assistencia tecnica é especializada em consertos e reparos de computadores, impressoras. Também trabalhamos com seguração eletronica como instalação de cerca eletrica, cameras e etc.
          venha conhecer nosso trabalho!
          </ContainerBlack>
          <ContainerBlock>
            <HistoryImage src={pane} />
          </ContainerBlock>
       
        </Content>
  
      </HistoryContainer>
   */}
      <Footer />
    </Container>
   
  );
}

export default Home;
