import {
  AttendentContent,
  ContainerFooter,
  FooterSection1,
  FooterSection2,
  TextFoot,
  ContentTextIcon,
  TitleFootContainer,
  linkSocial,
} from './styles'

import { FaEnvelope, FaRegClock, FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebookSquare, FaMapMarkedAlt } from 'react-icons/fa';
//https://www.lojavirtual.com.br/wp-content/uploads/2017/09/pagseguro.png
function Footer() {
  return (
    <>
      <FooterSection1>
        {/*Footer horario*/} 
        <ContainerFooter>
          <TitleFootContainer> Horario de Funcionamento</TitleFootContainer>
          <AttendentContent>
            <div>
              <ContentTextIcon>
                <div> <FaRegClock size="1.8vMax" /></div>
                <TextFoot>segunda à sexta das 7hrs às 17hrs
                  <br />
                  sábado das 7hrs às 12hrs
                </TextFoot>

              </ContentTextIcon>

            </div>
          </AttendentContent>
        </ContainerFooter>
{/*Footer Atendimento*/} 
        <ContainerFooter>
          <TitleFootContainer> Contato</TitleFootContainer>
          <AttendentContent>
            <div>
              <ContentTextIcon>
                <FaEnvelope size="1.8vMax" />
                <TextFoot>email@gmail.com</TextFoot>
              </ContentTextIcon>

            </div>

            <div>
              <ContentTextIcon>
                <div> <FaPhoneAlt size="1.8vMax" /></div>
                <TextFoot>3451-3834 </TextFoot>
                <div> <FaWhatsapp size="1.8vMax" /></div>
                <TextFoot>3451-3834</TextFoot>

              </ContentTextIcon>
            </div>

          </AttendentContent>
        </ContainerFooter>
 {/*Footer localização*/} 
        <ContainerFooter>
          <TitleFootContainer> localização</TitleFootContainer>
          <AttendentContent>
            <div>
              <ContentTextIcon>
                <FaMapMarkedAlt size="1.8vMax" />
                <TextFoot>Av. Getúlio varga, 475 - Itaporanga-PB</TextFoot>

              </ContentTextIcon>
            </div>
{/*Footer redes socias*/} 
          </AttendentContent>
        </ContainerFooter>
        <ContainerFooter>
          <TitleFootContainer> Redes Sociais</TitleFootContainer>
          <AttendentContent>
            <div>
              <linkSocial href="https://www.instagram.com/rcinformatic/">
                <ContentTextIcon>
                  <FaInstagram size="1.8vMax" />
                  <TextFoot>rcinformatic</TextFoot>
                </ContentTextIcon>
              </linkSocial>
              <linkSocial href=" https://www.facebook.com/RC-Inform%C3%A1tica-Itaporanga-PB-613065512500173">
                <ContentTextIcon>
                  < FaFacebookSquare size="1.8vMax" />
                  <TextFoot>R&C Informática Itaporanga - PB</TextFoot>

                </ContentTextIcon>
              </linkSocial>
            </div>

          </AttendentContent>
        </ContainerFooter>
      </FooterSection1>

    </>
  );
}

export default Footer;