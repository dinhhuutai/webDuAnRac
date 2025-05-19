import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistic from './pages/Statistic';
import ConnecBluetooth from './pages/ConnecBluetooth';
import ScanQr from './pages/ScanQr';
import CreateUser from './pages/CreateUser';
import ListWeight from './pages/ListWeight';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/list-weight" element={<ListWeight />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/connect-ble" element={<ConnecBluetooth />} />
        <Route path="/scan-qr" element={<ScanQr />} />
      </Routes>
    </Router>
  )
}

export default App;
