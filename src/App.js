
import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './themes';


const GlobalStyles = createGlobalStyle`
body{
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  transition: all 0.5s linear;
}
`;

function App() {

  //theme
  const currentHour = new Date().getHours();
  const isDaytime = currentHour >= 7 && currentHour < 18;
  const theme = isDaytime ? lightTheme : darkTheme;


  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
     <Router>
      <Navbar />
      <div id="google_element" style={{paddingLeft: "70px", marginTop: "10px"}}></div>
    <AllRoutes />
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
