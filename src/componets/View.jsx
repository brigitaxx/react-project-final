
import React, { useEffect, useState } from 'react'
import { TableContainer, TableHead, TableRow, TableCell, Table, TableBody, Button } from '@mui/material'
import axios from 'axios'

const View = () => {

  var[students,setStudents]=useState([])
  var[update,setupdate]=useState([])
  var[selected,setselected]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3005/students').then((data)=>{
      console.log(data.data)
      setStudents(students=data.data)
    }).catch((err)=>{
      console.log('error',err)
    })
  },[])

  const updateValue =(value) =>{
    setselected(value);
    setupdate(true);
  }

  return (

    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>tittle</TableCell>
            <TableCell>gener</TableCell>
            <TableCell>published</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((value,index)=>{
            return <TableRow key={index}>
              <TableCell>{value.tittle}</TableCell>
              <TableCell>{value.genere}</TableCell>
              <TableCell>{value.published}</TableCell>
              <Button onClick={()=>{updateValue(value)}}>pdate</Button>
              <Button>delete</Button>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </TableContainer>


  )
}

export default View
