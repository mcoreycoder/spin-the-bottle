import React, { useState } from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

const Form = styled.form`
  padding: 16px;
  border: solid blue;
  width: 30%
`

const FormGroup = styled.div``

export default ({ onAdded }) => {
  const [name, setName] = useState('')

  return (
    <>
      <Form
        onSubmit={e => {
          e.preventDefault()
          onAdded(name)
          setName('')
        }}
      >
        <FormGroup>
          <TextField label="Name" margin="normal" /*fullWidth*/ value={name} onChange={e => setName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </FormGroup>
      </Form>
      
    </>
  )
}
