import styled from "styled-components";

export const DeleteButton = styled.button`
  cursor: pointer;
  height: ${({ theme }) => theme.spaces.m}px;
  width: ${({ theme }) => theme.spaces.m}px;
  border-radius: 50%;
  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: ${({ theme }) => theme.spaces.ss}px;
`;

export const TextContent = styled.div`
  width: inherit;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  word-wrap: break-word;
`;
