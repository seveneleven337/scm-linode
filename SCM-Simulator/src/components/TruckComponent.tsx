import {useState, useEffect, FC} from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Truck } from "../type/Truck";
import { getTruckData } from "../controllers/TruckController";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'licensePlate',
    headerName: 'License plate',
    width: 150,
    editable: true,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
  },
];

interface Props{
    trucks?:Array<Truck>
}

const TruckComponent:FC<Props>=props=>{

    return(
        <div>
            <h1>Table here</h1>
            {props.trucks&&props.trucks.length>0?(
                <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={props.trucks}
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

export default TruckComponent;