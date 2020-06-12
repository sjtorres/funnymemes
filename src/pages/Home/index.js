import React from 'react'

import { Wrapper, Card, Templates, Button, Form } from './styles'
import logo from '../../images/logo.png'

export default function Home() {
  return (
    <Wrapper>
      <img src={logo} alt="FunnyMemes" />

      <Card>
        <h2>Selecione um template:</h2>
        <Templates>
          <button type="Button">
            <img src="" alt="Template 1" />
          </button>
          <button type="Button">
            <img src="" alt="Template 2" />
          </button>
          <button type="Button">
            <img src="" alt="Template 3" />
          </button>
          <button type="Button">
            <img src="" alt="Template 3" />
          </button>
        </Templates>

        <h2>Textos</h2>

        <Form>
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />
          <input placeholder="Texto #1" />

          <Button type="submit" >FunnyMemes</Button>
        </Form>
      </Card>

    </Wrapper>

  )
}