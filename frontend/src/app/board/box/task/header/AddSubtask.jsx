import { useState, useRef , useEffect } from 'react'
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";


const AddSubtask = (props) => {
  const [Visibility, setVisibility] = useState("hidden")

  const formref = useRef(null)
    
      
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


  const handleSubmit = async (e) => {
    e.preventDefault();

    const subtaskname = e.target.subtaskname.value;

    axios
      .post("http://localhost:7000/subtask/create-subtask", {
        taskname: props.taskname,
        subtaskname: subtaskname
      })
      .then(() => {
        setVisibility("hidden")
        props.setsubtaskname(subtaskname)
        location.reload()
      })
      .catch((err) => {
        console.log(err);
      });

  };

  return (
    <div className='flex items-center relative' onClick={() => setVisibility("visible")} >
      <CiCirclePlus className='text-gray-600 size-5' />
      <div className='text-gray-600'>{props.detail}</div>
      <div>
        <form ref={formref} onSubmit={handleSubmit} className={`${Visibility} absolute right-0 top-10 bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-2 text-xl gap-2 z-10`}>
          <label htmlFor="caption">Create Subtask</label>
          <input type="text" name="subtaskname" id="subtaskname" placeholder="Sub Task Name" className="border-2 w-45 py-1 px-3 rounded-2xl" />
          <input type="submit" value="Submit" id="submit" className="bg-gray-700 w-fit py-2 px-5 text-white rounded-lg text-2xl" />
        </form>
      </div>
    </div>
  )
}

export default AddSubtask
