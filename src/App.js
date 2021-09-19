import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import { AuthProvider } from './store';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
