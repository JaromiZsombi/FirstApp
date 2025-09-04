import React, { useState } from 'react'
import { Spinner } from 'reactstrap';

export const MyImage = ({nr,loading,setLoading}) => {
    console.log(nr);
    return (
        <div>
            {loading &&
                <Spinner>
                    Loading...
                </Spinner>
            }
            <img src={`https://picsum.photos/id/${nr}/200/300`} className='img-fluid rounded thumbnail'
                onLoad={()=>setLoading(false)}
                onError={()=>setLoading(false)}
                style={{display: loading? "none" : "block"}}
            />
        </div>
    )
}
