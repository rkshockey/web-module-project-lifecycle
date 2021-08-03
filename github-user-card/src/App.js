import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';

function App() {
  return (
    <div className="App">
      <p>App</p>
      <UserCard />
      <FollowerList />
    </div>
  );
}

export default App;
