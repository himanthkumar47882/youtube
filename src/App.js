import './App.css';
import Hello from './component/Hello/Hello';
import Introduction from './component/myintro/introduction';
function App() {
  let test = 1;
  let testString = "Himanth";
  return (
    <div className='app-container'>
      <center>
          {test === 1 && <Hello stringValue={testString} />}
      </center>
      <Introduction/>
    </div>
  );
}

export default App;
