import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { Button, Form, FormGroup, Input } from 'reactstrap'

export const NewTodo = ({handleAdd}) => {
    const [descr, setDescr] = useState("")

    console.log(descr)

    const handleSubmit=()=>{
        handleAdd(descr)
        setDescr("")

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
                    <Button onClick={handleSubmit} disabled={!descr}> Add</Button>
                </FormGroup>
            </Form>
        </div>
    )
}



