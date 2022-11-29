import {server} from "./settings";

export async function getLocationData(): Promise<any>{
    const response = await fetch(server + "/api/location")
    if(!response.ok){
        throw new Error(response.statusText);
    }else{
        return response.json();
    }
}