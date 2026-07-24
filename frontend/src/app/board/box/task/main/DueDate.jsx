"use client"
import {useState,useRef, useEffect} from 'react'
import {FiCalendar} from "react-icons/fi";
import axios from 'axios';

const Assignee = ({ taskname,boxname, subtaskname }) => {
  const [Visibility, setVisibility] = useState("hidden")
  const [GetPriority, setGetPriority] = useState("")

    const formref = useRef(null)


    const fetchPrority  =() => {
      if (boxname==="") {
        axios.get("http://localhost:7000/subtask/getdate-subtask",{
        params:{
          taskname:taskname,
          subtaskname:subtaskname
        }
      }).then((e)=>{
        setGetPriority(e.data)
      })
      return 
      }
      else{
        axios.get("http://localhost:7000/task/getdate-task",{
        params:{
          taskname:taskname,
          boxname:boxname
        }
      }).then((e)=>{
        setGetPriority(e.data)
      })
      }
    }
    useEffect(() => { 
      fetchPrority()
    }, [taskname])
  
    
  
    
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          formref.current &&
          !formref.current.contains(e.target)
        ) {
          setVisibility("hidden");
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () =>
        document.removeEventListener(
          "mousedown",
          handleClickOutside
        );
    }, []);
  
  const HandleSubmit =  (e) => {
    e.preventDefault();
    let duedate = e.target.datetime.value
    console.log(duedate);
    
    
    
    
    if (subtaskname === "") {
      console.log("ksdhf");
      
      axios.patch("http://localhost:7000/task/date-task", {
        taskname: taskname,
        boxname: boxname,
        date: duedate
      })
        .then(() => {
          setVisibility("hidden")
          fetchPrority()
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      axios.patch("http://localhost:7000/subtask/date-subtask", { 
        subtaskname:subtaskname,
        taskname: taskname,
        date: duedate
       })
      .then(() => {
        setVisibility("hidden")
        fetchPrority()
      })
      .catch((err) => {
        setVisibility("hidden")
      });
    }

  };



  return (
    <div className='border rounded-lg p-0.5 border-gray-400 relative'>
          <div>
            {GetPriority==""?<FiCalendar className='text-gray-600' onClick={()=>{
            setVisibility("visible")
          }}/>: <div className='text-xs' onClick={()=>{
            setVisibility("visible")
          }}> {GetPriority}</div>
          }
            
         
          </div>
          <form onSubmit={HandleSubmit} ref={formref} className={`${Visibility} absolute bg-gray-200 rounded-2xl p-5 flex flex-col z-20 justify-center items-center`}>
            <input type="date" name="datetime" id="" />
            <input type="submit" value="Submit" className='rounded-xl bg-gray-600 w-fit px-2 text-white mt-1' />
          </form>
    </div>
  )
}

export default Assignee