import { ThemeProvider } from "styled-components";
import GlobalStyleThemes from "../styles/GlobalStyleTheme";
import GlobalStyles from "../styles/GlobalStyle.style";
import PreLoader from "../component/PreLoader";
import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={GlobalStyleThemes}>
        <GlobalStyles />
        <PreLoader />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
