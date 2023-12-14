import styled from "styled-components";

export const DeleteButton = styled.button`
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.white};
  /* background-color: white */
`;
