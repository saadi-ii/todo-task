"use client"

import React from 'react'
import Box from './Box'
import { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";


const CreateBox = () => {
    const [box, setBox] = useState([]);
    const [Visibility, setVisibility] = useState("hidden")
    const handleSubmit = async (e) => {
        e.preventDefault();

        const boxname = e.target.boxname.value;

        axios
            .post("http://localhost:7000/box/create-box", { boxname })
            .then(() => {
                setVisibility("hidden")
                location.reload()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        axios.get("http://localhost:7000/box/boxes").then((res) => {
            setBox(res.data.boxes)
        })
    }, [])

    return (
        <div className='flex gap-5 p-5'>
            {box.map((newbox) => {
                return <Box key={newbox._id} boxname={newbox.boxname} />
            })}
            <Box boxname="COMPLETE" />
            <div className='relative'>
                <div className='w-20 h-20 border-2 border-dotted rounded-2xl flex justify-center items-center'>
                    <FaPlus className='text-gray-600 size-5' onClick={() => setVisibility("visible")} />
                </div>
                <form onSubmit={handleSubmit} className={`absolute left-0 ${Visibility} flex flex-col justify-center items-center bg-gray-500 rounded-2xl p-5 text-xl gap-2`}>
                    <label htmlFor="caption">Create Box</label>
                    <input type="text" name="boxname" id="boxname" placeholder="Box Name" className="border-2 text-white py-1 px-3 rounded-2xl" />
                    <input type="submit" value="Submit" id="submit" className="bg-gray-900 w-fit py-2 px-5 text-white rounded-lg text-2xl" />
                </form>
            </div>
        </div>
    )
}

export default CreateBox
