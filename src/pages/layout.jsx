import { ThemeProvider } from "styled-components";
import GlobalStyleThemes from "../styles/GlobalStyleTheme";
import GlobalStyles from "../styles/GlobalStyle.style";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={GlobalStyleThemes}>
        <GlobalStyles />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
