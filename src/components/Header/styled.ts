import styled from "styled-components";

export const Container = styled.header`
  position: sticky;
  z-index: 2;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1280px;
  padding: 20px 0px;
  @media (max-width: 300px) {
    padding: 0px;
  }
  @media (max-width: 1280px) {
    margin: 0 20px;
  }
  @media (max-width: 300px) {
    margin: 0 10px;
  }
`;
