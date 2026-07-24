import { api } from "@/lib/api/baseURL";

export const getSubtaskDate = (taskname: string, subtaskname: string) => {
  return api.get<string>("/subtask/getdate-subtask", { params: { taskname, subtaskname } });
};
