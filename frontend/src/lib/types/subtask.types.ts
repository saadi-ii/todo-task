export interface Subtask {
  _id: string;
  taskname: string;
  subtaskname: string;
  priority?: string;
  date?: string;
}

export interface CreateSubtaskPayload {
  taskname: string;
  subtaskname: string;
}

export interface RenameSubtaskPayload {
  subtaskname: string;
  newsubtaskname: string;
}

export interface SubtaskPriorityPayload {
  subtaskname: string;
  taskname: string;
  priority: string;
}

export interface SubtaskDatePayload {
  subtaskname: string;
  taskname: string;
  date: string;
}

export interface DeleteSubtaskPayload {
  taskname: string;
  subtaskname: string;
}
