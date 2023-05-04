import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Main from './components/main';

function App() {
  return (
    // Header, Data components, footer
    <div className='App'>
      <MyNavbar />
      <Main />
    </div>
  );
}

export default App;
