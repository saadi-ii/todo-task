import React from 'react'
import { TiTick } from "react-icons/ti";
import axios from 'axios';


const MarkComplete = ({ taskname,subtaskname }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (subtaskname === "") {
      console.log("task");
      axios.patch("http://localhost:7000/task/markcompletion-task", {
        boxname: "COMPLETE",
        taskname: taskname
      })
        .then(() => {
          location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      // console.log("subtask");
      
      // axios.patch("http://localhost:7000/subtask/markcompletion-subtask", {
      //   boxname: "COMPLETE",
      //   subtaskname: subtaskname
      // })
      //   .then(() => {
      //     location.reload()
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      alert("It can be submitted with parent Task")
      return
    }

  };

  return (
    <div>
      <TiTick onClick={handleSubmit} />
    </div>
  )
}

export default MarkComplete
