import './App.css';
import Hero from './components/hero/Hero';
import Popular from './components/popular/Popular';
import Search from './components/Search/Search';


function App() {
  return (
    <div className="App">
      <Hero/>
      <Search/>
      <Popular/>
    </div>
  );
}

export default App;
