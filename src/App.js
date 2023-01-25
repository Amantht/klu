import logo from './logo.png';
import './App.css';
import Cse from './components/CSE';
import Ece from './components/ECE';
import ME from './components/ME';
import BT from './components/BT';
import Home from './components/Home';
import Cal from './components/Cal';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
    return (
    <div>
    <div className='App-header'>
      <img src={logo} style={{width:"100px",height:"100px"}}/>
      <h1>KL DEEMED TO BE UNIVERSITY</h1>
    </div>
    <div className='App-body'>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="cse" element={<Cse/>}/>
          <Route path="ece" element={<Ece/>}/>
          <Route path="me" element={<ME/>}/>
          <Route path="bt" element={<BT/>}/>
          <Route path="cal" element={<Cal/>}/>

        </Routes>    
      </BrowserRouter>
    


    </div>
    </div>
  );
}

export default App;