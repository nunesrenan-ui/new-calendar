import React from "react";
import styled from "styled-components";
import Card from "./card";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  height: 145px;
  overflow: hidden;

  :hover {
    height: auto;
    cursor: pointer;
  }
`;
const Title = styled.h3`
  padding: 25px;
  letter-spacing: 0.25px;
  text-align: center;
  background-color: #53a2e7a6;
  color: #3f3333;
  border-top: inherit;
  margin: 0;
`;
const CardList = styled.div`
  padding: 8px;
`;

const Column = ({ column, tasks }) => {
  const color = "red";
  return (
    <Container>
      <Droppable droppableId={column.id} isCombineEnabled>
        {(provided) => (
          <CardList
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            {tasks.map((task, index) => (
              <Card key={task.id} task={task} index={index} isOver={color} />
            ))}
            {provided.placeholder}
          </CardList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
