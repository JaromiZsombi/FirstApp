import React, { useState } from 'react'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export const NewTodo = () => {

    const [descr, setDescr] = useState("")
    console.log(descr)
    const handleSubmit=()=>{

    }

    return (
        <div>

            <Form style={{display:"flex", gap:"5px"}}>
                <FormGroup style={{flex:1}}>
                    <Input
                        placeholder='new item'
                        type='shit'
                        onChange={(e)=>setDescr(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button onClick={handleSubmit}> Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}



