import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout.jsx';
import { loginUser } from './services/auth';

function App() {
  return (
    <div className="App">
      <Route>
        <Layout handleLogin={handleLogin} />
      </Route>
    </div>
  );
}

export default App;
