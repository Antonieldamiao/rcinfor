import {
  Button,
  Container,
  Containerleft,
  ContainerRight,
  HeaderContent,
  Input,
  SubHeaderContent,
  TextHeader,
  TextLinkHeader
} from './styles';
import Icon from '@material-ui/core/Icon';
import Logo from '../logo'

function Header(props) {
  return (
    <>
      <HeaderContent>
        <Containerleft>
          <Logo />
        </Containerleft>
        <Container>
         
        </Container>
        <ContainerRight>
        <TextLinkHeader>Quem somos</TextLinkHeader>
          <TextLinkHeader>Contato</TextLinkHeader>
        </ContainerRight>
      </HeaderContent>

    </>
  )
}

export default Header;