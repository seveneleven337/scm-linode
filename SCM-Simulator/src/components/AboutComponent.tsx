import { FC, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import { getAuthor, getKeyValues, setKeyValues} from "../controllers/AboutController";

const AboutComponent:FC=()=>{
    setKeyValues();
    const myArray = JSON.parse(getKeyValues() || '{}');

    function getValues(){
        return(
                myArray.map((pair: any, index:number) => {
                    return <div>{Object.keys(pair)}: {pair[Object.keys(pair)[0]]}</div>
                })
            )
    }

    
    return(
        <div>
            key {getAuthor()};
            {getValues()};
            
        </div>
    )
}

export default AboutComponent;

