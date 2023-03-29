import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Add from './componets/Add';

import View from './componets/View';


import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Add' element={<Add data={{
          tittle: '', gener: '', published:'' ,author:''}}
      method="post" />}/>
          <Route path='/View' element={<View />} />
     </Routes>
    </div>
  );
}


export default App;
