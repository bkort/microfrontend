import React from 'react'
import NavBar from './components/NavBar'

export default function Root(props) {
  return (
    <>
      <NavBar />
      <section>{props.name} is mounted!</section>
    </>
  )
}
