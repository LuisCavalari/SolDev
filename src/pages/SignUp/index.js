import React, { useState, useEffect } from 'react';
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../api'
import ErroMessage from "../../components/ErrorMessage";
import { Container, Row } from './styles';

export default function SignUp({history}) {

  const [stateList, setStateList] = useState([])
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordConfirmed, setIsPasswordConfirmed] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadStates() {
      const response = await api.get('/states')

      const { error: stateError, states } = response.data
      if (stateError) {
        setError(stateError)
      } else {
        setStateList(states)
      }
    }
    loadStates()
  }, [])

  useEffect(() => {
    if (password === confirmPassword) {
      setIsPasswordConfirmed(true)
    } else {
      setIsPasswordConfirmed(false)
    }
  }, [password, confirmPassword])


  async function handleSubmit(event) {
    event.preventDefault()

    if (!isPasswordConfirmed) {
      setError('Senhas não coincidem')
      return
    }

    const response = await api.post('/user/signup', {
      email,
      state,
      name,
      password
    })

    const { error: registerError } = response.data

    if (registerError) {
      setError(registerError)
    } else {
      history.push('/signin')
    }

  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h2>Cadastro</h2>
        {error &&
          <ErroMessage message={error} />
        }
        <Row>
          <i className="fa fa-user"></i>
          <Input
            placeholder="Nome"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <i className="fa fa-envelope"></i>
          <Input
            placeholder="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </Row>
        <Row>
          <i className="fa fa-key"></i>
          <Input
            placeholder="Digite sua senha"
            value={password}
            type="password"
            onChange={event => setPassword(event.target.value)}
          />
          <Input
            placeholder="Confirme sua senha"
            type="password"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
        </Row>
        <Row align="flex-start">
          <i className="fa fa-globe"></i>
          <select
            onChange={event => setState(event.target.value)}
            value="1"
            required>
            <option defaultValue='1' disabled >Estado</option>
            {stateList.map(state =>
              <option key={state._id} value={state.name}>
                {state.name}
              </option>
            )}
          </select>
        </Row>
        <Row>
          <Button type="submit" >
            Cadastrar-se
          </Button>
        </Row>
      </form>
    </Container>
  );
}
