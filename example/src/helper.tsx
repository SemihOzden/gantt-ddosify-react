import { Task } from "../../dist/types/public-types";

export function initTasks() {
  // const currentDate = new Date();
  const tasks: Task[] = [
    {
        "start": new Date("2023-12-29T15:13:12.029"),
        "end": new Date("2023-12-29T15:13:12.055"),
        "name": "/BCDEFGH/",
        "id": "span908617",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.032"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/CDEFGH/",
        "id": "span909141",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span908617",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.036"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/DEFGH/",
        "id": "span907432",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span909141",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.039"),
        "end": new Date("2023-12-29T15:13:12.053"),
        "name": "/EFGH/",
        "id": "span908614",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span907432",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.039"),
        "end": new Date("2023-12-29T15:13:12.053"),
        "name": "/EFGH/",
        "id": "span909139",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span907432"
    },
    {
        "start": new Date("2023-12-29T15:13:12.043"),
        "end": new Date("2023-12-29T15:13:12.051"),
        "name": "/FGH/",
        "id": "span908613",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span908614",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.043"),
        "end": new Date("2023-12-29T15:13:12.051"),
        "name": "/FGH/",
        "id": "span909138",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908614"
    },
    {
        "start": new Date("2023-12-29T15:13:12.046"),
        "end": new Date("2023-12-29T15:13:12.050"),
        "name": "/GH/",
        "id": "span909137",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span908613",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.046"),
        "end": new Date("2023-12-29T15:13:12.050"),
        "name": "/GH/",
        "id": "span908612",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908613"
    },
    {
        "start": new Date("2023-12-29T15:13:12.046"),
        "end": new Date("2023-12-29T15:13:12.050"),
        "name": "/GH/",
        "id": "span907430",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908613"
    },
    {
        "start": new Date("2023-12-29T15:13:12.046"),
        "end": new Date("2023-12-29T15:13:12.050"),
        "name": "/GH/",
        "id": "span905867",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908613"
    },
    {
        "start": new Date("2023-12-29T15:13:12.049"),
        "end": new Date("2023-12-29T15:13:12.049"),
        "name": "/H/",
        "id": "span905866",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909137"
    },
    {
        "start": new Date("2023-12-29T15:13:12.049"),
        "end": new Date("2023-12-29T15:13:12.049"),
        "name": "/H/",
        "id": "span907427",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909137"
    },
    {
        "start": new Date("2023-12-29T15:13:12.049"),
        "end": new Date("2023-12-29T15:13:12.049"),
        "name": "/H/",
        "id": "span908611",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909137"
    },
    {
        "start": new Date("2023-12-29T15:13:12.049"),
        "end": new Date("2023-12-29T15:13:12.049"),
        "name": "/H/",
        "id": "span909136",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909137"
    },
    {
        "start": new Date("2023-12-29T15:13:12.036"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/DEFGH/",
        "id": "span905868",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span909141",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.039"),
        "end": new Date("2023-12-29T15:13:12.053"),
        "name": "/EFGH/",
        "id": "span909739",
        "progress": 100,
        "type": "project",
        "isDisabled": true,
        "project": "span905868",
        "hideChildren": true
    },
    {
        "start": new Date("2023-12-29T15:13:12.043"),
        "end": new Date("2023-12-29T15:13:12.051"),
        "name": "/FGH/",
        "id": "span909738",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909739"
    },
    {
        "start": new Date("2023-12-29T15:13:12.036"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/DEFGH/",
        "id": "span908615",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909141"
    },
    {
        "start": new Date("2023-12-29T15:13:12.036"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/DEFGH/",
        "id": "span909140",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span909141"
    },
    {
        "start": new Date("2023-12-29T15:13:12.032"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/CDEFGH/",
        "id": "span905869",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908617"
    },
    {
        "start": new Date("2023-12-29T15:13:12.032"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/CDEFGH/",
        "id": "span908616",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908617"
    },
    {
        "start": new Date("2023-12-29T15:13:12.032"),
        "end": new Date("2023-12-29T15:13:12.054"),
        "name": "/CDEFGH/",
        "id": "span907434",
        "progress": 100,
        "type": "task",
        "isDisabled": true,
        "project": "span908617"
    }
];
  return tasks;
}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
