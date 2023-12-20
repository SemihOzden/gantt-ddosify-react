import { Task } from "../../dist/types/public-types";

export function initTasks() {
  // const currentDate = new Date();
  const tasks: Task[] = [
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1,12,10,40,0),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15,12,28,40,800),
    //   name: "Some Project",
    //   id: "ProjectSample",
    //   progress: 25,
    //   type: "project",
    //   hideChildren: false,
    //   displayOrder: 1,
    // },
    
    {
        start: new Date(100000001001),
        end: new Date(100000001148),
        name: "/api/hammer/health_check/",
        id: "31",
        progress: 100,
        type: "task",
        displayOrder: 8,
        attributes: {
            path: "/api/hammer/health_check/",
            to_ip: "10.100.106.48",
            method: "POST",
            from_ip: "192.168.94.28",
            to_port: 1001,
            protocol: "L7_PROTOCOL_HTTP",
            from_port: 1000,
            status_code: 200
        }
    },
    {
        start: new Date(100000001001),
        end: new Date(100000001211),
        name: "/forbidden",
        id: "30",
        progress: 100,
        type: "task",
        displayOrder: 9,
        attributes: {
            path: "/forbidden",
            to_ip: "10.100.106.48",
            method: "GET",
            from_ip: "192.168.94.28",
            to_port: 8001,
            protocol: "L7_PROTOCOL_HTTP",
            from_port: 8000,
            status_code: 403
        },
        dependencies: ["31"]
    },
  
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2,12,28,40,10),
    //   end: new Date(
    //     currentDate.getFullYear(),
    //     currentDate.getMonth(),
    //     2,12,28,40,800
    //   ),
    //   name: "Idea",
    //   id: "Task 0",
    //   progress: 45,
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 2,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2,13,28,40,10),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0,30,450),
    //   name: "Research",
    //   id: "Task 1",
    //   progress: 25,
    //   dependencies: ["Task 0"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 3,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
    //   name: "Discussion with team",
    //   id: "Task 2",
    //   progress: 10,
    //   dependencies: ["Task 1"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 4,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
    //   name: "Developing",
    //   id: "Task 3",
    //   progress: 2,
    //   dependencies: ["Task 2"],
    //   type: "task",
    //   project: "ProjectSample",
    //   displayOrder: 5,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
    //   name: "Review",
    //   id: "Task 4",
    //   type: "task",
    //   progress: 70,
    //   dependencies: ["Task 2"],
    //   project: "ProjectSample",
    //   displayOrder: 6,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
    //   name: "Release",
    //   id: "Task 6",
    //   progress: currentDate.getMonth(),
    //   type: "milestone",
    //   dependencies: ["Task 4"],
    //   project: "ProjectSample",
    //   displayOrder: 7,
    // },
    // {
    //   start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
    //   end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
    //   name: "Party Time",
    //   id: "Task 9",
    //   progress: 0,
    //   isDisabled: true,
    //   type: "task",
    // },
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
