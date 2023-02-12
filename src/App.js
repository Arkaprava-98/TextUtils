import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Text Utils Application" link3="How To Use" />
      <div className="container my-4">
        <TextForm heading="Enter Text to Analyze" />
      </div>
    </>
  );
}
export default App;
