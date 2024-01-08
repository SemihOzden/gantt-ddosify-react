import React, { useEffect, useMemo } from "react";
import styles from "./task-list-table.module.css";
import { Task } from "../../types/public-types";

const localeDateStringCache = {};
const depthCache = {}

interface TooltipProps {
  name: string;
  width:number;
}

const Tooltip: React.FC<TooltipProps> = ({ name,width }) => {
  let limit=name?.length;
  function getTextWidth(text:string) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    if(context){context.font = getComputedStyle(document.body).font;}
  
    return context ? context.measureText(text).width : 0}

  const textWidth=getTextWidth(name) || 0
  if(textWidth>width){
    limit=Math.floor(name.length/textWidth * width)-3
  }
  return (
    <div>
    {limit<name.length ? <div
      className={styles.tooltip}
      data-tooltip={name}
    >
      {name.substring(0, limit)}..
          </div>:<div className={styles.fitTooltipText}>{name}</div>}
          </div>
  );
};

export default Tooltip;

const toLocaleDateStringFactory =
  (locale: string) =>
  (date: Date, dateTimeOptions: Intl.DateTimeFormatOptions) => {
    const key = date.toString();
    let lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };

const handleDepth=(project: any,newProjectId: any)=>{
  if(newProjectId){
    depthCache[newProjectId] = depthCache[project] ? (depthCache[project]+1) : 1
  }
  if(depthCache[project])
    return depthCache[project]
  else return 0;
}

const dateTimeOptions: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
};

export const TaskListTableDefault: React.FC<{
  rowHeight: number;
  rowWidth: string;
  fontFamily: string;
  fontSize: string;
  locale: string;
  tasks: Task[];
  selectedTaskId: string;
  setSelectedTask: (taskId: string) => void;
  onExpanderClick: (task: Task) => void;
}> = ({
  rowHeight,
  rowWidth,
  tasks,
  fontFamily,
  fontSize,
  locale,
  onExpanderClick,
}) => {
  const toLocaleDateString = useMemo(
    () => toLocaleDateStringFactory(locale),
    [locale]
  );


  useEffect(() => {
    if(tasks.length > 0){


     toLocaleDateString(tasks[0].start, dateTimeOptions)
    }
    

  }, [tasks,toLocaleDateString])

  const extractNumberFromString = (value: string): number => {
    const numericValue = parseFloat(value);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  return (
    <div
      className={styles.taskListWrapper}
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
      }}
    >
      {tasks.map(t => {
        let expanderSymbol = "";
        if (t.hideChildren === false) {
          expanderSymbol = "▼";
        } else if (t.hideChildren === true) {
          expanderSymbol = "▶";
        }
        const depth=(handleDepth(t.project,t?.type ? t?.id : null))*12;
        return (
          <div
            className={styles.taskListTableRow}
            style={{ height: rowHeight }}
            key={`${t.id}row`}
          >
            <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
            >
              <div className={styles.taskListNameWrapper} onClick={() => onExpanderClick(t)}>
              <span style={{marginLeft:`${depth}px`}}></span>
                
                <div
                  className={
                    expanderSymbol
                      ? styles.taskListExpander
                      : styles.taskListEmptyExpander
                  }
                >
                  {expanderSymbol}
                </div>
                <div className={styles.taskListLine}>
                </div>
                <div style={{height:"14px"}}><Tooltip width={(extractNumberFromString(rowWidth)-depth)} name={t.name}></Tooltip></div>
              </div>
            </div>
            {/* FROM Header */}
            {/* <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
            >
              &nbsp;{t.start.getUTCHours() + ":" + t.start.getUTCMinutes() + ":" + t.start.getUTCSeconds() + ":" + t.start.getUTCMilliseconds()}
            </div> */}
            {/* TO Header */}
            {/* <div
              className={styles.taskListCell}
              style={{
                minWidth: rowWidth,
                maxWidth: rowWidth,
              }}
            >
              &nbsp;{
                t.end.getUTCHours() + ":" + t.end.getUTCMinutes() + ":" + t.end.getUTCSeconds() + ":" + t.end.getUTCMilliseconds()
              }
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
