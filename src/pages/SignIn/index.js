import React from 'react';
import Input from '../../components/Input'
import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <h2>Login</h2>
      <form>
        <div className="input-area">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="input-area">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
          />
        </div>

      </form>
    </Container>
  );
}
