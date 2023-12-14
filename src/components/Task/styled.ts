import styled from "styled-components";

export const DeleteButton = styled.button`
  cursor: pointer;
  height: ${({ theme }) => theme.spaces.m}px;
  width: ${({ theme }) => theme.spaces.m}px;
  border-radius: 50%;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.white};
`;
