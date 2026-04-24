import React, { ElementRef, useRef } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { SocialList } from "../../../components/SocialList";
import { S } from "./Contacts_Styled";
import emailjs from '@emailjs/browser';

export const Contacts:React.FC = () => {
  
  const form = useRef<ElementRef<'form'>>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    if (!form.current) return

     emailjs
      .sendForm('service_8v3dqos', 'template_p22zvfc', form.current, {
        publicKey: 'yINXHbCbyJM7_tD-G',
      })
      .then(
  () => {
    alert('Message sent!');
    form.current?.reset(); 
  },
  (error) => {
    console.log('FAILED...', error.text);
  },
);
  };
  return (
    <S.StyledContacts id={"contacts"}>
      <Container>
        <S.StyledFlexWrapper justify={"space-between"} align={"flex-start"} wrap="wrap">
          <S.StyledSocialBlock>
            <SectionTitle>Connect with me:</SectionTitle>
            <S.SocialListWrapper>
              <S.StyledText>Satisfied with me? Please contact me</S.StyledText>
              <SocialList />
            </S.SocialListWrapper>
          </S.StyledSocialBlock>

          <S.StyledMailBlock ref={form} onSubmit={sendEmail}>
            <S.TitleForm>Contact me, let’s make magic together</S.TitleForm>
            <S.StyledInput required placeholder={"Name:"}  name="user_name"/>
            <S.StyledInput required placeholder={"Email:"} name="user_email"/>
            <S.StyledInput required placeholder={"Message:"} as={"textarea"} name="message"/>

            <Button title="Send" type="submit" variant="primary" width="175px" />
          </S.StyledMailBlock>
        </S.StyledFlexWrapper>
      </Container>
    </S.StyledContacts>
  );
};

