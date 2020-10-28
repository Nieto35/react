import logo from './logo.svg';
import './App.css';
import Expectations from'./components/Expectations'
import Interests from './components/Interests'
import Learn from './components/Learn'
import  Profile from './components/Profile'


function App() {
  return (
    <div className="App">
      <Profile />
      <Interests />
      <Learn />
      <Expectations />
    </div>
  );
}

export default App;
