"use client"

import React from 'react'
import Box from './Box'
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";


const CreateBox = () => {
    const containerRef = useRef(null);



    const [box, setBox] = useState([]);
    const [Visibility, setVisibility] = useState("hidden")
    const [Fetch, setFetch] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();

        const boxname = e.target.boxname.value;

        axios
            .post("http://localhost:7000/box/create-box", { boxname })
            .then(() => {
                setVisibility("hidden")
                setFetch(true)
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    };

    useEffect(() => {
        console.log('helo world')
        axios.get("http://localhost:7000/box/boxes").then((res) => {
            setBox(res.data.boxes)
        })
    }, [Fetch])

    return (
        <div className='flex gap-5 p-5 overflow-x-scroll h-172 ' ref={containerRef} onClick={async () => {
                setVisibility("hidden")
        }}>
            {box.map((newbox) => {
                return <Box key={newbox._id} boxname={newbox.boxname} />
            })}
            <Box boxname="COMPLETE" />
            <div className='relative ' onClick={(e) => {
                setVisibility("visible");
                e.stopPropagation()
            }}>
                <div className='w-20 h-20 border-2 border-dotted rounded-2xl flex justify-center items-center' onClick={async () => {
                    setVisibility("visible");
                    containerRef.current?.scrollTo({
                        left: await containerRef.current.scrollWidth,
                        behavior: "smooth",
                    });
                }} >
                    <FaPlus className='text-gray-600 size-5' />
                </div>
                <form onSubmit={handleSubmit} className={`w-80 absolute left-0 ${Visibility} flex flex-col justify-center items-center bg-gray-500 rounded-2xl p-5 text-xl gap-2`}>
                    <label htmlFor="caption">Create Box</label>
                    <input type="text" name="boxname" id="boxname" placeholder="Box Name" className="border-2 text-white py-1 px-3 rounded-2xl" />
                    <input type="submit" value="Submit" id="submit" className="bg-gray-900 w-fit py-2 px-5 text-white rounded-lg text-2xl" />
                </form>
            </div>
        </div>
    )
}

export default CreateBox
