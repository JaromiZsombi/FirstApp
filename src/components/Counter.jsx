import React, { useState } from 'react'
import { Button, Spinner } from 'reactstrap';
import { MyImage } from './MyImage';

export const Counter = () => {
    const [nr, setNr] = useState(0)
    const [loading, setLoading]=useState(true)

    const decrement=()=>{
        setNr(nr-1)
        setLoading(true)
    }

    const increment=()=>{
        setNr(nr+1)
        setLoading(true)
    }

    return (
        <div>
            <div className='p-5 d-flex gap-2 justify-content-center'>
                <Button onClick={decrement} color="primary" outline>
                    -
                </Button>

                <Button color={nr < 0 ? "warning" : "success"}>
                    {nr}
                </Button>

                <Button onClick={increment} color="secondary" outline>
                    +
                </Button>
                {/*itt jelenjen meg egy kép, aminek az indexét a nr adja (>0) picsum oldalról*/}

            </div>

            <div className='d-flex justify-content-center'>

                {nr > 0 && <MyImage nr={nr} loading={loading} setLoading={setLoading}/>}
            </div>

        </div>
    )
}

