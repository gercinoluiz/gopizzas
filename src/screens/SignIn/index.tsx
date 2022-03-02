import { MyCustomInput } from '@src/components/MyCustomInput'
import React from 'react'
import { MyCustomButton } from '@components/MyCustomButton'
import {
     Container,
     Content,
     Title,
     Brand,
     ForgotPasswordButton,
     ForgotPasswordLabel,
} from './styles'
import { KeyboardAvoidingView, Platform } from 'react-native'
import brandImg from '@assets/brand.png'

export function SignIn() {
     return (
          <Container>
               <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
               >
                    <Content>
                         <Brand source={brandImg} />

                         <Title>Login</Title>
                         <MyCustomInput
                              type='secondary'
                              placeholder='E-mail'
                              autoCapitalize='none'
                              autoCorrect={false}
                         />

                         <MyCustomInput
                              type='secondary'
                              placeholder='Senha'
                              autoCapitalize='none'
                              autoCorrect={false}
                              secureTextEntry
                         />
                         <ForgotPasswordButton >
                              <ForgotPasswordLabel>
                                   Esqueci minha senha
                              </ForgotPasswordLabel>
                         </ForgotPasswordButton>

                         <MyCustomButton title='Entrar' type='secondary' />
                    </Content>
               </KeyboardAvoidingView>
          </Container>
     )
}
