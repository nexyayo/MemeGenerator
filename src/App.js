// by nexy :)

import './styles.css';
import NavBar from './components/NavBar';
import MemeInput from './components/MemeInput';

// UWAGA ! //
// Najlepiej oglądać na 80%, bo nie robiłem dla różnych rozdzielczości cssów,
// chodzi mi o telefony itd.

function App() {
  return (
    <div className="App">
      <NavBar />
      <MemeInput/>
    </div>
  );
}

export default App;
