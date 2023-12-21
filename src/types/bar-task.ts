import { Task, TaskType } from "./public-types";

export interface BarTask extends Task {
  index: number;
  typeInternal: TaskTypeInternal;
  x1: number;
  x2: number;
  y: number;
  height: number;
  progressX: number;
  progressWidth: number;
  barCornerRadius: number;
  handleWidth: number;
  barChildren: BarTask[];
  styles: {
    backgroundColor: string;
    backgroundSelectedColor: string;
    progressColor: string;
    progressSelectedColor: string;
  };
  attributes?: {
    path?: string,
    to_ip?: string,
    method?: string,
    from_ip?: string,
    to_port?: number,
    protocol?: string,
    from_port?: number,
    status_code?:number,
    from_uid_pod?:string,
    to_uid_service?:string,
    to_url_outbound?:string,
    from_uid_service?:string,
    to_uid_daemonset?:string,
    to_uid_deployment?:string,
    from_uid_daemonset?:string,
    from_uid_deployment?:string,
    monitoring_id?:string,
  };
}

export type TaskTypeInternal = TaskType | "smalltask";
