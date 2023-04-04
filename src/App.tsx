import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/header/Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
