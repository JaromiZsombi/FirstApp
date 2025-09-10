import { useState } from "react";
import { quotesFromDatabase } from "../quote";
import { Button } from "reactstrap";

export const RandomQuote = () =>{
    const [quotes, setQuote] = useState("")
    console.log(quotes)

    const randomNum=()=>{
        const randomSzam = Math.abs(Math.round((Math.random())*quotesFromDatabase.length)-1)

        setQuote(quotesFromDatabase[randomSzam])
    }
    
    return(
        <div className="d-flex flex-column justify-content-center align-items-center">
            <Button onClick={randomNum}>Izédet</Button>
            <p>{quotes}</p>
        </div>
    )
  
}