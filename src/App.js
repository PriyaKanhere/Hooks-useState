import './App.css';
import { useEffect, useState } from 'react'
import ClassCounter from '../src/components/classCounter'
import FunctionCounter from '../src/components/functionCounter'
import FunctionCounter2 from '../src/components/functionCounter2'
import ClassCounter2 from '../src/components/functionCounter2'
import HookThree from '../src/components/HookCounterThree'
import HookFour from '../src/components/HookCounter4'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          Class counter component <ClassCounter /><hr></hr>
          Function counter component <FunctionCounter /><hr></hr>
          Function counter by using previous value <FunctionCounter2 /><hr></hr>
          Class counter by using previous value <ClassCounter2 /><hr></hr>
          Function holding state as an array <HookThree /><hr></hr>
          Function holding state as an Object <HookFour /> <hr></hr>
        </div>
      </header>
    </div>
  );
}

export default App;
