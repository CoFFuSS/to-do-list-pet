import styled from "styled-components";

export const TaskList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const DragDiv = styled.div`
  display: flex;
  width: 80%;
  border: 2px solid lightpink;
  padding: 18px;
  border-radius: 6px;
  margin: 5px 0;
  cursor: grab;
  background-color: #fcfcf9;
  align-items: center;
`;
