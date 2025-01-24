import { Route, Routes } from 'react-router-dom';
import CompanyPage from './pages/CompanyPage/CompanyPage';
import CandidatePage from './pages/CandidatePage/CandidatePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CompanyPage />} />
      <Route path="/candidates" element={<CandidatePage />} />
    </Routes>
  );
};

export default App;
