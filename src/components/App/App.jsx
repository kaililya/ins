import './App.css';
import Footer from '../Footer/Footer';
import styles from './App.css'
import Header from '../header/header';
import { Route, Routes } from 'react-router-dom';
import FunctionPage from '../../pages/FunctionPage/FunctionPage';
import MainPage from '../../pages/MainPage/MainPage';
import ProccesPage from '../../pages/ProccesPage/ProccesPage';
import AdvicePage from '../../pages/AdvicePage/AdvicePage';
import FirmPage from '../../pages/FirmPage/FirmPage';

function App() {
  return (
    <div className={styles.main_container}>
      <Header />  
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/function' element={<FunctionPage />}/>
        <Route path='/procces' element={<ProccesPage />}/>
        <Route path='/advice' element={<AdvicePage />}/>
        <Route path='/firm' element={<FirmPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
