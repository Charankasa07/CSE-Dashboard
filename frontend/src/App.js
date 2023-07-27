import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header';
import Update from './Components/Update';
import Information from './Components/Information';

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Home />}></Route>
    //   <Route path='/register' element={<Register/>}></Route>
    // </Routes>
    // </BrowserRouter>
    <Router>
      <Header/>
      <div className='App'>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/register'>
          <Register />
        </Route>
        <Route exact path="/update">
          <Update/>
        </Route>
        <Route exact path="/get-details">
          <Information/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
