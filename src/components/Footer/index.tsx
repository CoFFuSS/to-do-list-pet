import { FooterContainer } from "./styled";
import { footerInfo } from "./mock";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <h3>{footerInfo.mainInfo}</h3>
      </FooterContainer>
    </>
  );
};
