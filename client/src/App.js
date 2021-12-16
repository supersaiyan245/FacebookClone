import './App.css';
import Layout from './layout/Layout.jsx';
import { useState, useEffect } from 'react';
import { loginUser, registerUser,
  verifyUser,
  removeToken
} from './services/auth';
import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './screens/Login.jsx';
import MainContainer from './container/MainContainer.jsx'

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
  <div className='App'>
    <Layout currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <MainContainer
          currentUser={currentUser}
          handleRegister={handleRegister}
          handleLogin={handleLogin}
        />
      </Switch>
    </Layout>
  </div>
  );
}

export default App;
