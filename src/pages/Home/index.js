import React, { useState, useEffect } from 'react'

import { Wrapper, Card, Templates, Button, Form } from './styles'
import logo from '../../images/logo.png'

export default function Home() {
  const [templates, setTemplates] = useState([])
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  useEffect(() => {
    (async () => {
      const resp = await fetch('https://api.imgflip.com/get_memes')
      const { data: { memes } } = await resp.json()
      setTemplates(memes)
    })()
  }, [])

  return (
    <Wrapper>
      <img src={logo} alt="FunnyMemes" />

      <Card>
        <h2>Selecione um template:</h2>
        <Templates>
          {templates.map((template) => (
            <button 
              key={template.id}
              type="button"
              onClick={() => setSelectedTemplate(template)}
              className={template.id === selectedTemplate?.id ? 'selected' : ''}
            >
              <img src={template.url} alt={template.name}/>
            </button>
          ))}
        </Templates>

        {selectedTemplate && (
          <>
            <h2>Textos</h2>

            <Form>
              {(new Array(selectedTemplate.box_count)).fill('').map((_, index) => (
                <input
                  key={String(Math.random())}
                  placeholder={`Text #${index + 1}`}
                />
              ))}
    
              <Button type="submit" >FunnyMemes</Button>
            </Form>
          </>
        )}
      </Card>

    </Wrapper>

  )
}