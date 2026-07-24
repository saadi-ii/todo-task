import { api } from "@/lib/api/baseURL";
import { TaskCommentPayload } from "@/lib/types/task.types";

export const setTaskComment = (data: TaskCommentPayload) => {
  return api.patch("/task/comment-task", data);
};
