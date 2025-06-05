import Nav from './Nav/Nav';
import Home from './Home/Home';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import Logo from './assets/LogoPng.png';
import { Routes, Route } from 'react-router-dom';
import DailyChallenges from './pages/DailyChallenges/DailyChallenges'; // Importa tus componentes de página
import RandomChallenge from './pages/RandomChallenges/RandomChallenges';
import Goals from './pages/Goals/Goals';
import FocusMode from './pages/FocusMode/FocusMode';
import CalendarPlanner from './pages/CalendarPlanner/CalendarPlanner';
import Statistics from './pages/Statistics/Statistics';
import ReportsSummary from './pages/ReportsSummary/RandomChallenges';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className='appContainer'>
      <div className="div1"><img className='logoImg' src={Logo} alt='logoImage'/></div>
      <div className="div2"><Nav/></div>
      <div className="div3"><SearchBar/></div>
      <div className="div4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/daily-challenges" element={<DailyChallenges />} />
          <Route path="/random-challenge" element={<RandomChallenge />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/focus-mode" element={<FocusMode />} />
          <Route path="/calendar" element={<CalendarPlanner />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/reports" element={<ReportsSummary />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;