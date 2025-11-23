import './App.css';
import SideBar from './components/SideBar';
import AddAccount from './pages/AddAccount';
import AddExpertAdvisor from './pages/AddExpertAdvisor';
import ExpertAdvisor from './pages/ExpertAdvisor';
import Home from './pages/Home';
import ManageAccount from './pages/ManageAccount';
import TradeCopierSetting from './pages/TradeCopierSetting';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className='mainSection'>
      <SideBar/>
      <div className='mainContent'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/trade-cpier-setting' element={<TradeCopierSetting/>}/>
          <Route path='/manage-account/*' element={<ManageAccount/>}/>
          <Route path='/manage-account/add-account' element={<AddAccount/>}/>
          <Route path='/expert-advisor/*' element={<ExpertAdvisor/>}/>
          <Route path='/expert-advisor/add-expert-advisor' element={<AddExpertAdvisor/>}/>

        </Routes>
      
      
      
      </div>
    </div>
  );
}

export default App;
