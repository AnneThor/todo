import { useAxios, refetch } from 'use-axios';
import { delete as del, post, put } from 'axios';

const base = 'https://at-taskmanager.herokuapp.com/task';

export function getTasks() {
  return useAxios(base).data;
}

export async function deleteTask(id) {
  await del(`${base}/${id}`)
  await refetch(base)
}

export async function postTask(task) {
  await post(base, task)
  await refetch(base)
}

export async function putTask(task) {
  console.log("task is", task);
  console.log("task status", task.status);
  await put(`${base}/${task.id}`, { completed: task.status })
  await refetch(base)
}

// poll API (do I want/need to do that ... ?)
// point is to get updates from other users
// I'll set it for 30 sec
setInterval(() => refetch(base, 1000 * 10))
