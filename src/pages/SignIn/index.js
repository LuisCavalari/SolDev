import React, { useState } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../api'
import { login } from "../../auth";
import { Link } from "react-router-dom";
import { Container } from './styles';
import ErrorMessage from '../../components/ErrorMessage'

export default function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remind, setRemind] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [error, setErros] = useState(false)
  const [erroMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    setDisabled(true)

    const response = await api.post('/user/signin',
      {
        email,
        password
      })
    const { token, error } = response.data
    if (error) {
      setErros(true)
      setErrorMessage(error)
      setDisabled(false)
    } else {
      login(token)
      window.location.href= "/"
    }
  }

  return (


    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        {
          error &&
          <ErrorMessage
            message={erroMessage}
            type="erro"
          />
        }
        <div className="input-area">
          <i className="fa fa-envelope"></i>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={disabled}
            placeholder="Email"
          />
        </div>

        <div className="input-area">
          <i className="fa fa-key"></i>
          <Input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            disabled={disabled}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div className="checkbox">
          <label htmlFor="rememberme">Lembrar senha</label>
          <Input
            type="checkbox"
            name="rememberme"
            disabled={disabled}
            value={remind}
            onChange={event => setRemind(event.target.value)}
          />
        </div>
        <Button
          type="submit"
          disabled={disabled}
        >
          Login
        </Button>
        <div className="row-between">
          <Link>
            teste
          </Link>
          <Link>
            teste
          </Link>
        </div>
      </form>
    </Container>

  );
}
