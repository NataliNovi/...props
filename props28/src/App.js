
import './App.css';
import Button from './components/Button/Button.jsx';
import StateClass from './components/StateClass/StateClass';
import StateHook from './components/StateHook/StateHook';


//через спред
function App() {
  return (
    <div className="App">
     <Button name={"...Props"} className="test" id="buttonTest" title="button" aria-label="button"></Button>
    
     <StateClass name={"StateClass"} className="testStateClass" id="buttonTest" title="button" aria-label="button"></StateClass>

     <StateHook name={"StateHook"} className="testStateHook" id="buttonTest" title="button" aria-label="button"></StateHook>
    
    </div>
  );
}
//name={"Click on me"} - это свойство баттон, котрое мы убрали, чтобы сделать дефолт
export default App;


/*function App() {
  return (
    <div className="App">
     <Button name={"Click on me"} className="test" id="buttonTest" title="button"></Button>
    </div>
  );
}

export default App;*/
