import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import {makeStyles} from "@material-ui/core";
import Alert from '../src/components/Banner/Alert';


const useStyles = makeStyles(() => ({
  App : {
    backgroundColor: '#14161a',
    color: 'white',
    minHeight: '100vh',
  }
}));

function App() {

  const classes = useStyles()

  return (
    <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes >
             <Route path = '/' Component={Homepage} exact/>
             <Route path = '/coins/:id' Component={Coinpage}/>
          </Routes>
        </div>
        <Alert />
    </BrowserRouter>
  )
}

export default App
