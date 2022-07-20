import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Dragons from './components/dragons/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;

