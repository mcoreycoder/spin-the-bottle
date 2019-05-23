import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import AddPerson from './AddPerson'
// import CirclePeople from './CirclePeople'
import styled from 'styled-components'


// const randomize = (people = []) => people[Math.floor(Math.random() * people.length)]
const selectPerson = (people = []) => {
  let rando = Math.floor(Math.random() * people.length)
  let personSelected = people[rando]
  console.log('personSelected', personSelected)
  // pickedPeople(personSelected, rando)
  return personSelected
}

// const pickedPeople = (personSelected, rando) => {
//   console.log(personSelected, rando)
//   setPeoplePicked([...peoplePicked, personSelected])
// }

const Circle = styled.ul`
position: relative;
border: 1px solid black;
padding: 0;
margin: 1em auto;
width: 20em;
height: 20em;
border-radius: 50%;
list-style: none;
overflow: hidden;
`

export default () => {
  const [people, setPeople] = useState(['peep 0', 'peep 1', 'peep 2', 'peep 3', 'peep 4', 'peep 5', 'peep 6', 'peep 7', 'peep 8', 'peep 9'])
  const [peoplePicked, setPeoplePicked] = useState([])

  // console.log to show current state
  console.log('people', people)
  console.log('peoplePicked', peoplePicked)

  return (
    <>
      <AddPerson
        onAdded={person => {
          setPeople([...people, person])
        }}
      />

      {/* {people.length > 0 && (
        <Button
          variant="contained"
          onClick={() => {
            // alert(randomize(people))
            let person = selectPerson(people)
             setPeoplePicked([...peoplePicked, person])
             setPeople([...people.filter((p) => p !== person)])
          }}
        >
          Spin The Bottle
        </Button>
      )} */}
{/* revised above to below so button is always shown */}
      <Button
        variant="contained"
        onClick={() => {
          // alert(randomize(people))
          let person = selectPerson(people)
          setPeoplePicked([...peoplePicked, person])
          setPeople([...people.filter((p) => p !== person)])
        }}
      >
        Spin The Bottle
        </Button>
      <hr />

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

      {/* <CirclePeople people={people => people} /> */}
      <Circle>
        {people.map((person, index) => (
          <li key={index}>
            <div>{person}</div>
          </li>
        ))}
      </Circle>
    </>
  )
}
