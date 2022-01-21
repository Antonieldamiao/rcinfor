import {
  Container,
  BagItem,
  ExcludeBtn,
  ItemImages,
  ItemLabel,
  ItemQnt,
  DoneBuy,
  Item,
  Label,
} from "./styles";
import Header from "../../Components/header";
import Footer from "../../Components/footer";

export default function RegisterAccount() {
  return (
    <Container>
      <Header />
      <BagItem>
        <ItemImages src="https://www.foliosociety.com/media/catalog/product/cache/d4b495b597bff8db585503487b67535d/a/h/ahb_book.png" />
        <ItemLabel>A Hero Born</ItemLabel>
        <ItemLabel>R$ 70,00</ItemLabel>
        <ItemQnt type="number" value="3" />
        <ExcludeBtn>Remover</ExcludeBtn>
      </BagItem>
      <BagItem>
        <ItemImages src="https://www.foliosociety.com/media/catalog/product/cache/d4b495b597bff8db585503487b67535d/a/h/ahb_book.png" />
        <ItemLabel>A Hero Born</ItemLabel>
        <ItemLabel>R$ 70,00</ItemLabel>
        <ItemQnt type="number" value="3" />
        <ExcludeBtn>Remover</ExcludeBtn>
      </BagItem>
      <Item>
        <Label>Valor Total:</Label>
        <Label>R$140,00</Label>
      </Item>
      <DoneBuy>Concluir</DoneBuy>
      <Footer/>
  </Container>
  )
}