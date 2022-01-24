import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Student from './Component/Student';
import ContactUs from './Component/ContactUs';
import PageNotFound from './Component/PageNotFound';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='home' element={<Home/>}/>
          <Route path='students' element={<Student/>}/>
          <Route path='contact' element={<ContactUs/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
