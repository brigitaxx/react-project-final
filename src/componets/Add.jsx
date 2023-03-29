import React, { useState } from 'react'

import { Button, Input, TextField, Typography } from '@mui/material'
import axios from 'axios'


const Add = (props) => {
  var [Students, setStudents] = useState()
  console.log("add page props" + props.data)

  const inputHandler = (e) => {
    const { name, value } = e.target
    setStudents({ ...Students, [name]: value })
  }
  const readValues = () => {
    console.log('delete clicked')
    axios.post("http://localhost:3005/students", Input)
      .then((data) => {
        console.log(data)
        alert('success')
      })
  }


  return (
    <div>

      <TextField label="gener" name="gener" varient='outlined' value={Input.name} onChange={inputHandler} />
      <br></br>

      <TextField label="tittle" grade="tittle" varient='outlined' value={Input.grade} onChange={inputHandler} />
      <br></br>
      <Button varient='contained' onClick={readValues} color='success'>submit</Button>

    </div>

  )
}

export default Add
