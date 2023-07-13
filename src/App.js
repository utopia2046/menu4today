import './App.css';
import './peopleSelect';
import PeopleSelection from './peopleSelect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>今天吃啥？</h1>
        <p>圆石曰：吾日三省吾身，早饭吃啥？午饭吃啥？晚饭吃啥？</p>
        <p>帮助你回答人生终极难题</p>
      </header>
      <ul className="Query-section">
        <li><PeopleSelection /></li>
      </ul>
      <div className="Menu-section">

      </div>
    </div>
  );
}

export default App;
