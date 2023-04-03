import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from './PAGES/MAIN/Main'
import Navbar from './COMPONENTS/NAVBAR/Navbar';
import Footer from './COMPONENTS/FOOTER/Footer';
import Sing from './PAGES/SIGN/Sing';
import MakeInfo from './PAGES/INFO/MakeInfo';

function App() {
  return (
   <div>
      <Navbar/>
      <Routes>
        <Route path='' element={<Main/>}/>
        <Route path='/info' element={<MakeInfo/>}/>
        <Route path='/sign' element={<Sing/>}/>
      </Routes>
      <Footer/>
   </div>
  );
}

export default App;
