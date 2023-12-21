import styled from "styled-components";

export const CreateTaskButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 6px;
  margin: 5px 0;
  cursor: pointer;
`;

export const CreateTaskInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
  margin: 5px 0;
  border-radius: 6px;
`;

export const CreateTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.input`
padding: 5px;
border: none;
border-bottom: 2px solid ${({ theme }) => theme.colors.pink}
&:focus {
  background-color: black;
}
`;
