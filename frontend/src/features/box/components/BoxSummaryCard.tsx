"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io";
import { getTasks } from "@/lib/api/task/get";
import { Task } from "@/lib/types/task.types";

interface BoxSummaryCardProps {
  boxname: string;
}

export const BoxSummaryCard = ({ boxname }: BoxSummaryCardProps) => {
  const router = useRouter();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data.records));
  }, []);

  const tasksInBox = tasks.filter((task) => task.boxname === boxname);

  return (
    <div className="flex justify-center items-center">
      <div className="w-200 bg-gray-100 rounded-2xl p-5" onClick={() => router.push("/board")}>
        <div className="h-15 flex justify-between items-center">
          <div className="text-2xl">{boxname}</div>
          <div
            onClick={(e) => {
              setVisible((v) => !v);
              e.stopPropagation();
            }}
          >
            {visible ? (
              <IoIosArrowDropupCircle className="size-10" />
            ) : (
              <IoIosArrowDropdownCircle className="size-10" />
            )}
          </div>
        </div>
        <div className={`${visible ? "flex" : "hidden"} flex-col gap-2`}>
          {tasksInBox.map((task) => (
            <div key={task._id} className="flex justify-center items-center text-xl bg-white mx-5 rounded-2xl p-2">
              {task.taskname}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
