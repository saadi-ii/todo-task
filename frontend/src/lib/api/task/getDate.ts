import { api } from "@/lib/api/baseURL";

export const getTaskDate = (taskname: string, boxname: string) => {
  return api.get<string>("/task/getdate-task", { params: { taskname, boxname } });
};
