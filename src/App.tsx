import Home from './pages/Home';
import sampleData from './sample-data.json';

function App() {
  return (
      <Home data={sampleData} />
  );
}

export default App;