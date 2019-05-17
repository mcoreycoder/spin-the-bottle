import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddPerson from './AddPerson'

const randomize = (people = []) => people[Math.floor(Math.random() * people.length)]

export default () => {
  const [people, setPeople] = useState([])

  return (
    <>
      <AddPerson
        onAdded={person => {
          setPeople([...people, person])
        }}
      />

      {people.length > 0 && (
        <Button
          variant="contained"
          onClick={() => {
            alert(randomize(people))
          }}
        >
          Pick
        </Button>
      )}

      {people.map((person, index) => (
        <div key={index}>
          <span>{person}</span>{' '}
          <Button
            variant="contained"
            mini
            onClick={e => {
              setPeople([...people.filter((p, i) => i !== index)])
            }}
          >
            Delete
          </Button>
        </div>
      ))}
    </>
  )
}
