import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.spaces.maxContentWidth}px;
  padding: ${({ theme }) => theme.spaces.m}px 0px;
  @media (max-width: ${({ theme }) => theme.endPoints.fold}px) {
    padding: 0px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.tabletL}px) {
    margin: 0 ${({ theme }) => theme.spaces.m}px;
  }
  @media (max-width: ${({ theme }) => theme.endPoints.fold}px) {
    margin: 0 ${({ theme }) => theme.spaces.ss}px;
  }
`;