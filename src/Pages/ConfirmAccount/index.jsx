import {
  Container,
  Input,
  FormContent,
  Button,
  LabelInput,
 FooterContent,
 SubContainer
}
  from './styles'
import React, { useState } from 'react';
import SimpleHeader from '../../Components/simpleHeader';

function ConfirmAccount() {

  const [TelePhone , OnchangeTelephone] = useState()

  function onChangeValue(event) {
    console.log(event.target.value);
    console.log(TelePhone)
  }
//colocar o FooterContent para ficar no final da pagina
  return (
    <>
    <Container>
      <SimpleHeader/>
      <SubContainer>
      <LabelInput>Insira o código enviado para o E-mail: ********@gmail.com</LabelInput>
      <FormContent>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        
      </FormContent>
      <Button>Confirmar Conta</Button>
      </SubContainer>
    </Container>
   
    </>
  );
}
export default ConfirmAccount;