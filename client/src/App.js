import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout.jsx';
import { loginUser, registerUser,
  verifyUser,
  removeToken} from './services/auth';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    // history.push('/');
  };
  
  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    // history.push('/');
  };

  return (
    <div className="App">
       <navbar>
        <Route path='/login'>
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path='/register'>
          <Register handleRegister={handleRegister} />
        </Route>
      </navbar>
      <aside>
      </aside>
      <main>
        {props.children}
      </main>
      <aside>
      </aside>
    </div>
  );
}

export default App;
