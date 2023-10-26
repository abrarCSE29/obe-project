import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Pageheader() {
  return (
    <Box>
      <Typography
          variant="h3"
          sx={{ textAlign: "left", textDecoration: "underline rgb(81, 42, 255)" }}
          gutterBottom
        >
          Dashboard
        </Typography>
    </Box>
  )
}
