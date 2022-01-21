import {
  Container,
  HeaderContent,
  SubHeaderContent,
  TextHeader
} from './styles';
import Logo from '../logo'

function SimpleHeader() {
  return (
    <>
    <HeaderContent>
      <Container> <Logo/></Container>
    </HeaderContent>
          <SubHeaderContent>
          <TextHeader>A MULTI NORDESTINA</TextHeader>
        </SubHeaderContent>
        </>
  )
}

export default SimpleHeader;