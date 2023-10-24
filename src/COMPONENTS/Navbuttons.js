import React from 'react'
import Button from '@mui/material/Button';
export default function Navbuttons() {
  return (
    <div className="navButton">
       <Button 
       sx={{
        background : "#C9CEFF",
        color : "black",
        fontWeight : "bold",
        borderRadius : 5,
        width : 180,
        marginBottom : 3,
        ":hover":{
            background : "#FF9900",
            color:"white"
        }
    }}
       variant="contained">Dashboard</Button><br/>
       <Button 
       sx={{
        background : "#C9CEFF",
        color : "black",
        fontWeight : "bold",
        borderRadius : 5,
        width : 180,
        marginBottom : 3,
        ":hover":{
            background : "#FF9900",
            color:"white"
        }
    }}
       variant="contained">View Courses</Button><br/>
      <Button 
       sx={{
        background : "#C9CEFF",
        color : "black",
        fontWeight : "bold",
        borderRadius : 5,
        width : 180,
        marginBottom : 3,
        ":hover":{
            background : "#FF9900",
            color:"white"
        }
    }}
       variant="contained">Submit Request</Button><br/>
      <Button 
       sx={{
        background : "#C9CEFF",
        color : "black",
        fontWeight : "bold",
        borderRadius : 5,
        width : 180,
        marginBottom : 15,
        ":hover":{
            background : "#FF9900",
            color:"white"
        }

    }}
       variant="contained">Result Statistics</Button><br/>
    <Button 
       sx={{
        background : "red",
        color : "white",
        fontWeight : "bold",
        borderRadius : 5,
        width : 100,
        ":hover":{
            background : "red",
            color:"white",
            boxShadow : 10
        }

    }}
       variant="contained">Log Out</Button>
    </div>
  )
}
