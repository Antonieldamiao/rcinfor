import {
  Container,
  Input,
  FormContent,
  Button,
  LabelInput,
 ContainerPicker,
 FooterContent

}
  from './styles'
import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
import SimpleHeader from '../../Components/simpleHeader';



function RegisterAccount() {

  const [value, onChange] = useState(new Date());
  const [TelePhone , OnchangeTelephone] = useState()

  function onChangeValue(event) {
    console.log(event.target.value);
    console.log(TelePhone)
  }

  return (
    <Container>
      <SimpleHeader/>
      <FormContent>
        <LabelInput>Nome Completo</LabelInput>
        <Input/>
        <LabelInput>CPF</LabelInput>
        <Input/>
        <LabelInput>E-mail</LabelInput>
        <Input/>
        <LabelInput>Data de Nascimento</LabelInput>
        <ContainerPicker>
          <DatePicker
            onChange={onChange}
            value={value}
          />
        </ContainerPicker>
        <LabelInput>Telefone</LabelInput>
        <Input/>
        <LabelInput>Sexo</LabelInput>
        <ContainerPicker onChange={onChangeValue}>
          <input type="radio" value="Male" name="gender" /> Masculino
          <input type="radio" value="Female" name="gender" /> Feminino
          <input type="radio" value="Other" name="gender" /> Outros
        </ContainerPicker>
        <LabelInput>Criar Senha</LabelInput>
        <Input/>
        <LabelInput>Confirmar Senha</LabelInput>
        <Input/>
        <ContainerPicker>
        <input type="checkbox" value="Other" name="gender" /> Desejo receber ofertas e promoções pelo e-mail
        </ContainerPicker>
        <Button>Criar conta</Button>
      </FormContent>
      <FooterContent></FooterContent>
    </Container>
  );
}
export default RegisterAccount;