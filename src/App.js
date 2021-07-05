import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Column from "./TrelloBoard/column";
import initialData from "./TrelloBoard/initialData";
import { DragDropContext } from "react-beautiful-dnd";

import "./App.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/pt-br";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const App = () => {
  // Colunas do calendario
  const [data, setData] = useState(initialData);
  const board = data.columnOrder.map((columnId) => {
    const column = data.columns[columnId];

    const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

    return <Column key={column.id} column={column} tasks={tasks} />;
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId, combine } = result;

    if (!combine && !destination) {
      return;
    }
    if (
      !combine &&
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = combine
      ? data.columns[combine.droppableId]
      : data.columns[destination.droppableId];

    if (combine) {
      window.alert("Vai funcionar");
      const cardData = data.tasks[combine.draggableId].content;
      console.log("usuario final:", cardData);
      const combineTaskIds = Array.from(start.taskIds);
      combineTaskIds.splice(source.index, 1);
      const newColumn = {
        ...start,
        taskIds: combineTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
    }
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (start === finish) {
      const newCardsIds = Array.from(start.taskIds);
      newCardsIds.splice(source.index, 1);
      newCardsIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newCardsIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }

    const startCardsIds = Array.from(start.taskIds);
    startCardsIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startCardsIds,
    };

    const finishCardsId = Array.from(finish.taskIds);
    finishCardsId.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishCardsId,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
    return;
  };

  const onDragStart = (result) => {
    const { draggableId } = result;

    const cardData = data.tasks[draggableId].content;
    console.log("usuario inicial", cardData);
  };

  //Calendario
  window.onload = () => {
    const ChangeStyle = () => {
      const rows = document.getElementsByClassName("rbc-month-row");
      const today = document.getElementsByClassName("rbc-event");
      for (let index = 0; index < rows.length; index++) {
        document.getElementsByClassName("rbc-month-row")[index].style[
          "overflow"
        ] = "visible";
      }
      for (let index = 0; index < today.length; index++) {
        document.getElementsByClassName("rbc-event")[index].style[
          "background-color"
        ] = "inherit";
      }
    };
    ChangeStyle();
  };

  const [state, setState] = useState({
    events: [
      {
        start: moment().toDate(),
        end: moment().toDate(),
        title: board,
      },
      {
        start: moment().toDate(),
        end: moment().toDate(),
        title: board,
      },
    ],
  });

  /*   const onEventResize = (data) => {
    const { start, end } = data;

    setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: div() };
    });
  }; */

  const onEventDrop = (data) => {
    return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <DnDCalendar
        drilldownView={["month"]}
        localizer={localizer}
        defaultDate={moment().toDate()}
        defaultView="month"
        events={state.events}
        localizer={localizer}
        onEventDrop={onEventDrop}
        //onEventResize={onEventResize}
        culture="br"
        resizable
        draggableAccessor={(event) => false}
        style={{ height: "100vh", overflow: "visible" }}
      />
    </DragDropContext>
  );
};

export default App;
