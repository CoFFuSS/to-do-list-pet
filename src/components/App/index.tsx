import { ThemeProvider } from "styled-components";
import { Footer } from "../Footer";
import { GeneralContent } from "../GeneralContent";
import { Header } from "../Header";
import { GlobalStyle } from "../../GlobalStyle";
import { GlobalTheme } from "../../theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={GlobalTheme}>
        <GlobalStyle />
        <Header />
        <GeneralContent />
        <Footer />
      </ThemeProvider>
    </>
  );
}
