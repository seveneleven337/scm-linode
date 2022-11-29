import {useState, useEffect, FC} from "react";
import TruckComponent from "../components/TruckComponent";
import { getTruckData } from "../controllers/TruckController";
import { Truck } from "../type/Truck";

const TruckContainer:FC=props=>{

    const [truckArray, setTruckArray] = useState<Array<Truck>|undefined>([]);

    useEffect(()=>{
        readTruckData();
    },[]); //only call function init

    async function readTruckData() {
        await getTruckData()
        .catch(console.error)
        .then(response=>{
            setTruckArray(response);
            console.log(JSON.stringify(response));
        })
    }

    return(
        <div>
            <h1>SCM Application</h1>
            <TruckComponent trucks={truckArray}/>
        </div>
    )
}

export default TruckContainer;