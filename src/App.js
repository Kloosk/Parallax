import { ThemeProvider, createGlobalStyle} from 'styled-components';

const theme = {
    white: "#D9D9D9",
    red: "#8C030E",
    dark: "#A65E44",
    light: "#BF907E",
    black: "#03060D"
};
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function App() {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle/>

      </ThemeProvider>
  );
}

export default App;
