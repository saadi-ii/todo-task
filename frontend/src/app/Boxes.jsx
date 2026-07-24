"use client"

import React from 'react'
import Box from './Box'
import { useState, useEffect } from "react";
import axios from "axios";


const Boxes = () => {
    const [box, setBox] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:7000/box/boxes").then((res) => {
            setBox(res.data.boxes)
        })
    }, [])

    return (
        <div className='flex flex-col gap-5 p-5'>
            {box.map((newbox) => {
                return <Box key={newbox._id} boxname={newbox.boxname} />
            })}
            <Box boxname="COMPLETE" />
        </div>
    )
}

export default Boxes
