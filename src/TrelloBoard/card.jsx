import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => (props.isDragging ? "#aaffa8a6" : "#fff")};

  :hover {
    cursor: grab;
  }
`;

const StyledCard = styled(Card)`
  padding-left: 10px;
`;

const StyledTitle = styled(CardTitle)`
  text-transform: uppercase;
  color: black;
  font-size: 0.9rem;
  margin-bottom: 2.5px;
  font-weight: 600;
  word-wrap: break-word;
  box-sizing: border-box;
  max-width: 150px;
  background-color: red;
  height: auto;
`;

const StyledSub = styled(CardSubtitle)`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.25px;
  color: rgb(43, 97, 124);
`;

const StyledCardBody = styled(CardBody)`
  margin-top: 10px;
  text-align: center;
  border-bottom: 1px solid grey;
  font-size: 0.8rem;
  padding: 5px;
  font-weight: 600;
  letter-spacing: 0.25px;
  color: rgb(43, 97, 124);
`;

const StyledCardText = styled(CardText)`
  text-align: center;
  margin: 5px;
  font-size: 0.9rem;
  letter-spacing: 0.25px;
  color: black;
`;

const CardConainer = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div
            style={{
              borderLeft: `4px solid ${task.content.color}`,
            }}
          >
            <StyledCard>
              <StyledTitle>{task.content.hospital}</StyledTitle>
              <StyledSub>{task.content.especialidade}</StyledSub>
              <StyledSub>{task.content.setor}</StyledSub>
              <StyledCardBody>
                <span>hello</span>02/07/07 - 02/07/07
              </StyledCardBody>
              <StyledCardText>{task.content.profissional}</StyledCardText>
            </StyledCard>
          </div>
        </Container>
      )}
    </Draggable>
  );
};

export default CardConainer;
