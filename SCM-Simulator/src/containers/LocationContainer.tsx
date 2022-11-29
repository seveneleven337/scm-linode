import {useState, useEffect, FC} from "react";
import LocationComponent from "../components/LocationComponent";
import { getLocationData } from "../controllers/LocationController";

const LocationContainer:FC=props=>{

    const [locationArray, setLocationArray] = useState<Array<Location>|undefined>([]);

    async function readLocationData() {
        await getLocationData()
        .catch(console.error)
        .then(response=>{
            setLocationArray(response);
            console.log(JSON.stringify(response));
        })
    }

    useEffect(()=>{
        readLocationData();
    },[]);

    return(
        <div>
            <h1>Test</h1>
            <LocationComponent locations={locationArray}/>
        </div>
    )
}

export default LocationContainer;