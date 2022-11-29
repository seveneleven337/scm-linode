import {useState, useEffect, FC} from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getLocationData } from "../controllers/LocationController";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'lat',
    headerName: 'Latitude',
    width: 150,
    editable: true,
  },
  {
    field: 'longField',
    headerName: 'Longitude',
    width: 150,
    editable: true,
  },
  {
    field: 'maxHrCap',
    headerName: 'Max hr cap',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
  {
    field: 'no',
    headerName: 'Numero',
    width: 150,
    editable: true,
  },
  {
    field: 'processingCost',
    headerName: 'Processing cost',
    width: 150,
    editable: true,
  },
  {
    field: 'sla',
    headerName: 'Sla',
    width: 150,
    editable: true,
  },
];

interface Props{
  locations?:Array<Location>
}

const LocationComponent:FC<Props>=props=>{
    
    
    return(
        <div>
            <h1>Table</h1>
            {props.locations&&props.locations.length>0?(
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.locations}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                />
            </Box>
            ):<p>no data</p>}
        </div>
    )
}

export default LocationComponent;