import './App.css';
import React, {useEffect, useState} from 'react';
import { generate as id } from 'shortid'
import axios from "axios";
// import MUIDataTable from "mui-datatables";
import { DataGrid } from '@mui/x-data-grid';

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import MaterialTable from "material-table";

function App() {
  /* const numbers = [1,2,3,4,5];
  const names = ['Dorian', 'Laura', 'Alex'];

  return (
    <ul>
      {
        names.map(name => {
          return <li key={id()}>{name} {id()}</li>
        })
      }
    </ul>
  ) */


  //==================================================================
  //PRIMERA DATATABLE=================================================
  //==================================================================
  /* const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]; */

  {/*< div style={{ height: 400, width: '80%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      // checkboxSelection
    />
  </div> */}
  return(
    <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
      </div>
  )
    //==================================================================
  //PRIMERA DATATABLE=================================================
  //==================================================================

  


  }

export default App;
