import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import AddEdit from './pages/addedit/AddEdit';
import List from './pages/list/List';
import Header from './components/header/Header';

function App() {
  return (
    <>
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddEdit/>}/>
        <Route path='/update/:id' element={<AddEdit/>}/>
        <Route path='/detail/:id' element={<List/>}/>
      </Routes>
     </Router>
    </>
    
  );
}

export default App;
