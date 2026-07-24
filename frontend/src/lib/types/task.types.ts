export interface Task {
  _id: string;
  boxname: string;
  taskname: string;
  priority?: string;
  comment?: string;
  date?: string;
}

export interface CreateTaskPayload {
  boxname: string;
  taskname: string;
}

export interface RenameTaskPayload {
  taskname: string;
  newtaskname: string;
}

export interface MarkTaskCompletePayload {
  taskname: string;
  boxname: string;
}

export interface TaskPriorityPayload {
  taskname: string;
  boxname: string;
  priority: string;
}

export interface TaskDatePayload {
  taskname: string;
  boxname: string;
  date: string;
}

export interface TaskCommentPayload {
  taskname: string;
  comment: string;
}

export interface DeleteTaskPayload {
  taskname: string;
  boxname: string;
}
