import { Routes, Route } from 'react-router-dom';
import DetailsContainer from './Pages/Details/DetailsContainer';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div style={{ width: "100vw", height: "90vh"}}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/details/:city" element={<DetailsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
