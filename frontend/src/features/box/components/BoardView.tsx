"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { getBoxes } from "@/lib/api/box/get";
import { createBox } from "@/lib/api/box/create";
import { Box } from "@/lib/types/box.types";
import { BoardBox } from "./BoardBox";

export const BoardView = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [visible, setVisible] = useState(false);

  const fetchBoxes = () => {
    getBoxes().then((res) => setBoxes(res.data.boxes));
  };

  useEffect(() => {
    fetchBoxes();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const boxname = new FormData(e.currentTarget).get("boxname") as string;

    try {
      await createBox({ boxname });
      setVisible(false);
      fetchBoxes();
    } catch (error: any) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <div
      className="flex gap-5 p-5 overflow-x-scroll h-172"
      ref={containerRef}
      onClick={() => setVisible(false)}
    >
      {boxes.map((box) => (
        <BoardBox key={box._id} boxname={box.boxname} onDeleted={fetchBoxes} />
      ))}
      <BoardBox boxname="COMPLETE" isSystem onDeleted={fetchBoxes} />
      <div
        className="relative"
        onClick={(e) => {
          setVisible(true);
          e.stopPropagation();
        }}
      >
        <div
          className="w-20 h-20 border-2 border-dotted rounded-2xl flex justify-center items-center"
          onClick={() => {
            setVisible(true);
            containerRef.current?.scrollTo({
              left: containerRef.current.scrollWidth,
              behavior: "smooth",
            });
          }}
        >
          <FaPlus className="text-gray-600 size-5" />
        </div>
        <form
          onSubmit={handleSubmit}
          className={`w-80 absolute left-0 ${visible ? "visible" : "hidden"} flex flex-col justify-center items-center bg-gray-500 rounded-2xl p-5 text-xl gap-2`}
        >
          <label htmlFor="boxname">Create Box</label>
          <input
            type="text"
            name="boxname"
            id="boxname"
            placeholder="Box Name"
            className="border-2 text-white py-1 px-3 rounded-2xl"
          />
          <input
            type="submit"
            value="Submit"
            id="submit"
            className="bg-gray-900 w-fit py-2 px-5 text-white rounded-lg text-2xl"
          />
        </form>
      </div>
    </div>
  );
};
