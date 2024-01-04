import { Task } from "../../dist/types/public-types";

export function initTasks() {
  const currentDate = new Date();
  // const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date("2023-12-15T13:51:47.100Z"),
      end: new Date("2023-12-15T13:51:48.500Z"),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: false
    },
    {
      start: new Date("2023-12-15T13:51:47.400Z"),
      end: new Date("2023-12-15T13:51:47.800Z"),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date("2023-12-15T13:51:47.800Z"),
      end: new Date("2023-12-15T13:51:48.500Z"),
      name: "Idea",
      id: "ProjectSample2",
      progress: 100,
      type: "project",
      project: "ProjectSample",
      hideChildren: false
    },
    {
      start:new Date("2023-12-15T13:51:47.800Z"),
      end: new Date("2023-12-15T13:51:48.000Z"),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample2"
    },
    {
      start: new Date("2023-12-15T13:51:48.000Z"),
      end: new Date("2023-12-15T13:51:48.500Z"),
      name: "Review",
      id: "ProjectSample3",
      type: "project",
      progress: 70,
      dependencies: ["Task 2"],
      project: "ProjectSample2",
      hideChildren: false
    },
    {
      start: new Date("2023-12-15T13:51:48.000Z"),
      end: new Date("2023-12-15T13:51:48.400Z"),
      name: "Release",
      id: "Task 6",
      progress: currentDate.getMonth(),
      type: "task",
      dependencies: ["Task 4"],
      project: "ProjectSample3"
    },
    {
      start: new Date("2023-12-15T13:51:48.400Z"),
      end: new Date("2023-12-15T13:51:48.500Z"),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample2"
    },
    {
      start: new Date("2023-12-15T13:51:47.450Z"),
      end: new Date("2023-12-15T13:51:48.500Z"),
      name: "Party Time",
      id: "Task 9",
      progress: 0,
      isDisabled: true,
      type: "task"
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
