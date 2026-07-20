import { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import axios from "axios";


const AddBox = (props) => {
  const [Visibility, setVisibility] = useState("hidden")
  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskname = e.target.taskname.value;

    axios
      .post("http://localhost:7000/task/create-task", {
        boxname: props.boxname,
        taskname: taskname
      })
      .then(() => {
        setVisibility("hidden")
        location.reload()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='py-2 flex items-center relative' onClick={() => setVisibility("visible")} >
      <FaPlus className='text-gray-600 size-5' />
      <div className='text-gray-600'>{props.detail}</div>
      <div>
        <form onSubmit={handleSubmit} className={`${Visibility} absolute right-1 top-10 bg-gray-300 flex flex-col justify-center items-center rounded-2xl p-2 text-xl gap-2 z-10`}>
          <label htmlFor="caption">Create Task</label>
          <input type="text" name="taskname" id="taskname" placeholder="Task Name" className="border-2 w-60 py-1 px-3 rounded-2xl" />
          <input type="submit" value="Submit" id="submit" className="bg-gray-700 w-fit py-2 px-5 text-white rounded-lg text-2xl" />
        </form>
      </div>
    </div>
  )
}

export default AddBox
