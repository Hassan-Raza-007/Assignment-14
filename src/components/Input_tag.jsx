import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Input_tag = (props) => {
    const [inputvalue, Setinputvalue] = useState()
    const [list, setList] = useState([])

    const handlechange = (event) => {
        Setinputvalue(event.target.value)
    }
    const inputvaluehandle = () => {

        setList(prevList => [...prevList, inputvalue]);
        Setinputvalue('');
    }
    return (
        <>
            <div className='m-2'>
                <TextField onChange={handlechange}

                    value={inputvalue}
                    id="demo-helper-text-misaligned-no-helper" label="Task" className='w-1/2 bg-cyan-700 text-white' />

                <Button onClick={inputvaluehandle} variant="contained" size="large" className='h-12 '>
                    Submit
                </Button>
                <ul>
                   
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Input_tag