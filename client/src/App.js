import './App.css';
import Layout from './layout/Layout.jsx';
import { useState, useEffect } from 'react';
import { loginUser, registerUser,
  verifyUser,
  removeToken
} from './services/auth';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Container from './container/MainContainer.jsx'

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  
  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);
  
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };

  return (
    <Route path="/Home">
      <div className="App">
        <Switch>
          <navbar>
            <Layout currentUser={currentUser} handleLogout={handleLogout}>
              `<Route path='/Login'>
                <Login handleLogin={handleLogin} />
              </Route>
              <Route path='/Register'>
                <Register handleRegister={handleRegister} />
              </Route>`
            </Layout>
          </navbar>
          <aside>
          </aside>
          <main>
            <Container currentUser={currentUser}/>
          </main>
          <aside>
          </aside>
      </Switch>
      </div>
    </Route>
  );
}

export default App;
