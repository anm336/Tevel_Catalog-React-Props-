import './App.css';
import globe from './globe.jpg'
import Component from './component.js'
import data from './data.js';

function App() {
  const cards = data.map(item => {
    return (
        <Component
        {...item}
        />
    )
  })

  return (
    <div className="App">
      <div className="nav"><img src={globe} className="globe" alt="globe"></img><p>my travel journal.</p></div>
      {cards}
    </div>
  );
}

export default App;
