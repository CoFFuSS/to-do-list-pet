import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.pink};
  font-size: ${({ theme }) => theme.fonts.m};
  padding: ${({ theme }) => theme.spaces.s}px;
`;
