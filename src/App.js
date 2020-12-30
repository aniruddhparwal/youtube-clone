import './App.css';
import MainComponent from './Components/MainComponent';
import NavBar from './Components/NavBar';
import './SCSS/style.css'

function App() {
  // document.getElementsByTagName('title') = "YouTube"
  document.title = "Youtube"
  return (
    <div className="App">
      <NavBar />
      <MainComponent />
    </div>
  );
}

export default App;
