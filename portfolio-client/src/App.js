import './styles/App.css';
import Navbar from './components/Navbar';
import ImageContainer from './components/ImageContainer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Navbar />
      <ImageContainer />
      <MainContent />
    </div>
  );
}

export default App;
