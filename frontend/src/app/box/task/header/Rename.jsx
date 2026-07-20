import React from 'react'
import { GoPencil } from "react-icons/go";
import axios from 'axios';
import { useState } from 'react';

const Rename = ({ taskname,subtaskname }) => {
  const [Opacity, setOpacity] = useState("hidden")
  const handleSubmit = async (e) => {
    e.preventDefault();
    const rename = e.target.rename.value
    if (subtaskname === "") {
      axios.patch("http://localhost:7000/task/rename-task", {
        newtaskname: rename,
        taskname: taskname
      })
        .then(() => {
          setOpacity("hidden")
          location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      axios.patch("http://localhost:7000/subtask/rename-subtask", { 
        newsubtaskname:rename,
        subtaskname:subtaskname
       })
      .then(() => {
        setOpacity("hidden")
        location.reload()
      })
      .catch((err) => {
        location.reload()
        
      });
    }

  };


  return (
    <div className='relative'>
      <GoPencil onClick={() => setOpacity("visible")} />
      <form className={`${Opacity} absolute top-5 right-0 flex flex-col justify-center items-center`} onSubmit={handleSubmit}>
        <input type="text" name="rename" id='rename' placeholder='Rename' className='border px-2 rounded-xl border-gray-600 w-20 flex justify-center items-center' />
        <input type="submit" value="Submit" className='rounded-xl bg-gray-600 w-fit px-2 text-white mt-1' />
      </form>
    </div>
  )
}

export default Rename
