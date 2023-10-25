import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PageTemplate from "./PageTemplate";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "Sl No",
    width: 150,
  },
  {
    field: "roll",
    headerName: "Class Roll",
    width: 250,
  },
  {
    field: "name",
    headerName: "Student Name",
    width: 200,
  },
  {
    field: "marks",
    headerName: "Marks Obtained",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    roll: 360,
    name: "Snigdha Rahman",
    marks: 38,
  },
  {
    id: 2,
    roll: 361,
    name: "Mahiyat Tanzim",
    marks: 38,
  },
  {
    id: 3,
    roll: 398,
    name: "Abrar Hameem",
    marks: 38,
  },
];

export default function TutorialMarkSheet() {
  return (
    <Box
      sx={{
        height: "400px",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <PageTemplate />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          position: "relative",
          top: "25%",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "left",
            textDecoration: "underline rgb(81, 42, 255)",
          }}
          gutterBottom
        >
          Tutorial 1 Marks
        </Typography>
        <Box sx={{ margin: "auto", width: "60%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 100,
                },
              },
            }}
            pageSizeOptions={[100]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            position: "relative",
            top: "70%",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#ffeb3b",
              position: "absolute",
              right: "10%",
              bottom: "0",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4caf50",
              position: "absolute",
              right: "3%",
              bottom: "0",
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
