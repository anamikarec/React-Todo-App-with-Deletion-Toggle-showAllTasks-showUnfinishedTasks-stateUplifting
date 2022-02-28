import './App.css';
import { ChildToParent } from './Components/StateManagement/ChildToParent';
import { Parent } from './Components/StateManagement/ParentToChild';
import { Siblings } from './Components/StateManagement/Sibling';
import { Todo } from './Components/Todo/Todo';

function App() {
  return (
    <div className="App">
      {/* <Parent/>
      <ChildToParent/>
      <Siblings/> */}

      <Todo/>
    </div>
  );
}

export default App;
