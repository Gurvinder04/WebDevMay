import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponents';

function App() {
  return (
   <div>
     <ChildComponent name="coffee"/>
    <h1>Hello world</h1>
   </div>
  );
}

export default App;
