import { Box } from '@mui/material'
import React from 'react'
import Nav from './Nav'
import Topbanner from './Topbanner'
import NavBar from './NavBar'

export default function PageTemplate() {
  return (
    <Box sx={{display: "flex", flexDirection: "row"}}>
      <NavBar />
      {/* <Box sx={{position: "relative",left: "100%"}}><Topbanner /></Box> */}
    </Box>
  )
}
