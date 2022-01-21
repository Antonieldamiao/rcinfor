import { useState } from "react";

import {
  Container,
  BookContent,
  BookContainer,
  BookDescription,
  CardImage,
  Image,
  BookHeader,
  HeaderLabel,
  Sinopse,
  SinopseDescription,
  StarBox,
  Author,
  Box,
  Installment,
  Price,
  SellerBox,
  SellerLabel,
  MoreInstallment,
  Bag,
  Buy,
  Input,
  Resembling,
  CardFicha,
  GridContent,
  GridItem,
  Comment,
  CommentItem,
  UserItem,
  User,
  LabelUser,
  LabelComment,
  CommentButton,
  CommetInput
} from "./styles";

import { cepMask } from "../../Components/Utils/mask";
import { useHorizontalScroll } from "../../Components/Utils/horizontalScrollHook";
import CardBook from "../../Components/cardBook";

import { FaStar } from "react-icons/fa";

import Header from "../../Components/header";
import Footer from "../../Components/footer";

function Book() {
  const [state, setState] = useState("_____-__");

  function handleChange(event) {
    setState(cepMask(event.target.value));
  }

  const scrollRef = useHorizontalScroll();

  return (
    <Container>
      <Header />
      <BookContainer>
        <BookContent>
          <CardImage>
            <Image src="https://www.foliosociety.com/media/catalog/product/cache/d4b495b597bff8db585503487b67535d/a/h/ahb_book.png" />
          </CardImage>
        </BookContent>
        <BookContent>
          <BookHeader>
            <HeaderLabel>A Hero Born — Capa Dura</HeaderLabel>
            <StarBox>
              <Author>Anonymous</Author>
              <FaStar size="1.2vMax" color="yellow" />
              <FaStar size="1.2vMax" color="yellow" />
              <FaStar size="1.2vMax" color="yellow" />
              <FaStar size="1.2vMax" color="yellow" />
              <FaStar size="1.2vMax" color="gray" />
            </StarBox>
          </BookHeader>
          <BookDescription>
            <Sinopse>Sinopse</Sinopse>
            <SinopseDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SinopseDescription>
          </BookDescription>
        </BookContent>
        <BookContent>
          <SellerBox>
            <Price>R$ 70,00</Price>
            <Installment>até 6x sem juros no cartão</Installment>
            <MoreInstallment>ver mais</MoreInstallment>
            <Box>
              <SellerLabel>Calcular Frete</SellerLabel>
              <Input
                maxLength="9"
                value={state}
                onChange={handleChange}
                type="text"
              />
            </Box>
            <Installment
              style={{
                marginLeft: "2rem",
                marginBottom: ".5rem",
                marginTop: "-.5rem",
                color: "#4b4b4b",
              }}
            >
              {" "}
              R$ 20,00 reais - até 6 dias úteis{" "}
            </Installment>
            <SellerLabel>Em Estoque</SellerLabel>
            <Box>
              <SellerLabel>Quantidade</SellerLabel>
              <Input
                min="1"
                max="100"
                style={{ textAlign: "right" }}
                type="number"
              />
            </Box>
            <Buy>Comprar Agora</Buy>
            <Bag>Adicionar a Sacola</Bag>
          </SellerBox>
        </BookContent>
      </BookContainer>
      <BookContent style={{ margin: "6rem 0 2rem", maxWidth: "95%" }}>
        <HeaderLabel style={{ borderBottom: "1px solid #3f3f3f", paddingBottom: "1rem" }}>
          + Livros Semelhantes
        </HeaderLabel>
        <Resembling ref={scrollRef}>
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
          <CardBook />
          <CardBook />
        </Resembling>
      </BookContent>
      <BookContent style={{ margin: "-1rem 0 4rem", minWidth: "95%" }}>
        <HeaderLabel style={{ borderBottom: "1px solid #3f3f3f", paddingBottom: "1rem" }}>
          + Detalhes do Livro
        </HeaderLabel>
        <CardFicha>
          <GridContent>
            <GridItem style={{ fontWeight: 600 }}> ISBN </GridItem>
            <GridItem style={{ borderRight: "none" }}> 86879687</GridItem>
            <GridItem style={{ fontWeight: 600 }}> Nome </GridItem>
            <GridItem style={{ borderRight: "none" }}> A Hero Born </GridItem>
            <GridItem style={{ fontWeight: 600 }}> Dimenssões </GridItem>
            <GridItem style={{ borderRight: "none" }}>23x13x6</GridItem>
            <GridItem style={{ fontWeight: 600 }}> Peso </GridItem>
            <GridItem style={{ borderRight: "none" }}> 0,960 g </GridItem>
            <GridItem style={{ fontWeight: 600 }}> Autor </GridItem>
            <GridItem style={{ borderRight: "none" }}> Anonymous</GridItem>
            <GridItem style={{ fontWeight: 600 }}> Editora </GridItem>
            <GridItem style={{ borderRight: "none" }}> Martins Fontes</GridItem>
            <GridItem style={{ fontWeight: 600 }}> Tipo </GridItem>
            <GridItem style={{ borderRight: "none" }}> Capa Dura</GridItem>
            <GridItem style={{ fontWeight: 600 }}>
              {" "}
              Data de Publicação{" "}
            </GridItem>
            <GridItem style={{ borderRight: "none" }}> 13/12/2018 </GridItem>
            <GridItem style={{ fontWeight: 600 }}> Tipo de Papel </GridItem>
            <GridItem style={{ borderRight: "none" }}> Offset 63 g/m²</GridItem>
            <GridItem style={{ fontWeight: 600 }}> Idioma </GridItem>
            <GridItem style={{ borderRight: "none" }}> Japonês</GridItem>
            <GridItem style={{ borderBottom: "none", fontWeight: 600 }}>
              {" "}
              Gêneros{" "}
            </GridItem>
            <GridItem style={{ borderRight: "none", borderBottom: "none" }}>
              {" "}
              Fantasia | Ficção
            </GridItem>
          </GridContent>
        </CardFicha>
      </BookContent>
      <BookContent style={{ margin: "-1rem 0 4rem", width: "95%" }}>
        <HeaderLabel style={{ borderBottom: "1px solid #3f3f3f", paddingBottom: "1rem" }}>
          + Comentários
        </HeaderLabel>
        <Comment>
          <UserItem>
            <User src="https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg" />
            <LabelUser>João</LabelUser>
          </UserItem>
          <CommentItem>
            <LabelComment>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </LabelComment>
          </CommentItem>
          <CommentItem style={{ alignItems: "center" }}>
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="gray" />
          </CommentItem>
          <UserItem>
            <User src="https://icon-library.com/images/user-icon-png/user-icon-png-27.jpg" />
            <LabelUser>André</LabelUser>
          </UserItem>
          <CommentItem>
            <LabelComment>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </LabelComment>
          </CommentItem>
          <CommentItem style={{ alignItems: "center" }}>
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="yellow" />
            <FaStar size="1.2vMax" color="gray" />
          </CommentItem>
        </Comment>
        <CommetInput/>
        <CommentButton>Comentar</CommentButton>
      </BookContent>
      <Footer />
    </Container>
  );
}
export default Book;
