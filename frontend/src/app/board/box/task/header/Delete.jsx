import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

const Rename = ({ taskname, subtaskname, boxname,size }) => {
  const [Opacity, setOpacity] = useState("hidden")

  const formref = useRef(null)


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        formref.current &&
        !formref.current.contains(e.target)
      ) {
        setOpacity("hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);


  const handleSubmit = async () => {
    if (subtaskname === "" && taskname === "") {
      console.log("Box");
      
      axios.delete("http://localhost:7000/box/delete-box", {
        params: {
          boxname: boxname
        }
      })
        .then((e) => {
          setOpacity("hidden")
          alert("Deleted Successfully")
          location.reload()
        })
        .catch((err) => {
          console.error(err)
        });
    }
    else if (subtaskname === "") {
      axios.delete("http://localhost:7000/task/delete-task", {
        params: {
          boxname: boxname,
          taskname: taskname
        }
      })
        .then((e) => {
          setOpacity("hidden")
          alert("Deleted Successfully")
          location.reload()
        })
        .catch((err) => {
          console.error(err)
        });
    }
    else {
      axios.delete("http://localhost:7000/subtask/delete-subtask", {
        params: {
          taskname: taskname,
          subtaskname: subtaskname
        }
      })
        .then(() => {
          setOpacity("hidden")
          alert("Deleted Successfully")
          location.reload()
        })
        .catch((err) => {
          location.reload()
        });
    }

  };


  return (
    <div className='relative'>
      <MdDeleteOutline onClick={() => setOpacity("visible")} />
      <div ref={formref} className={`${Opacity} p-1 w-30 absolute top-7 right-0 rounded-2xl flex flex-col justify-center items-center border border-gray-400 bg-gray-100 z-10`}>
        <div>Are You Sure</div>
        <button onClick={handleSubmit} className={`bg-red-700 text-white rounded-2xl px-2 `}>Delete</button>
      </div>
    </div>
  )
}

export default Rename
