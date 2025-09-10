import { useState } from "react"
import { frontendFrameworks} from "../frame"

export const Framework = () =>{
    const [frameWorks, setFrame] = useState(frontendFrameworks)
    console.log(frameWorks)


    return(
        <div className="d-flex justify-content-center">
            <ul>
                {frameWorks.map(obj=>
                    <li key={obj}>{obj}</li>
                )}
            </ul>
        </div>
    )

}