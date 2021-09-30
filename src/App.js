import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/main' exact component={Main} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
