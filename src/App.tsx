import { Routes, Route } from 'react-router-dom';
import Details from './Pages/Details/Details';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh"}}>
      <Routes>
        <Route path="*" element={<Main />} />
        <Route path="/details/:city" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
